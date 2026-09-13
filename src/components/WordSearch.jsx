import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { Trophy, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react'

export default function WordSearch({ config }) {
  const { fixedGrid, palavras, instrucao } = config
  
  const [selectedCoords, setSelectedCoords] = useState([])
  const [foundWords, setFoundWords] = useState([])
  const [foundCoords, setFoundCoords] = useState([])
  const [activeHint, setActiveHint] = useState(null)
  const isDragging = useRef(false)
  const startCell = useRef(null)

  // Dispara confetes ao completar todas as palavras
  useEffect(() => {
    if (foundWords.length === palavras.length && palavras.length > 0) {
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#8c2418', '#b38634', '#dfb25f', '#ffffff']
      })
    }
  }, [foundWords.length, palavras.length])

  // Função auxiliar para calcular linha entre duas coordenadas
  const getLineCoords = (r1, c1, r2, c2) => {
    const dr = r2 - r1
    const dc = c2 - c1
    const steps = Math.max(Math.abs(dr), Math.abs(dc))
    if (steps === 0) return [[r1, c1]]

    // Apenas horizontal, vertical ou diagonal perfeita (45 graus)
    const isHorizontal = dr === 0
    const isVertical = dc === 0
    const isDiagonal = Math.abs(dr) === Math.abs(dc)

    if (!isHorizontal && !isVertical && !isDiagonal) {
      return null
    }

    const stepR = dr === 0 ? 0 : dr / steps
    const stepC = dc === 0 ? 0 : dc / steps
    const coords = []

    for (let i = 0; i <= steps; i++) {
      coords.push([Math.round(r1 + i * stepR), Math.round(c1 + i * stepC)])
    }
    return coords
  }

  // Verifica se uma lista de coordenadas forma uma palavra válida
  const testCoordinatesForWord = (coords) => {
    if (!coords || coords.length === 0) return false

    const word = coords.map(([r, c]) => fixedGrid[r][c]).join('')
    const reversed = [...word].reverse().join('')

    const match = palavras.find(
      (p) => (p.palavra === word || p.palavra === reversed) && !foundWords.includes(p.palavra)
    )

    if (match) {
      setFoundWords((prev) => [...prev, match.palavra])
      // Adiciona coordenadas sem duplicatas
      setFoundCoords((prev) => {
        const next = [...prev]
        coords.forEach(([r, c]) => {
          if (!next.some(([er, ec]) => er === r && ec === c)) {
            next.push([r, c])
          }
        })
        return next
      })
      setSelectedCoords([])
      return true
    }
    return false
  }

  // Trata início de seleção (MouseDown / TouchStart)
  const handleStart = (r, c) => {
    isDragging.current = true
    startCell.current = [r, c]

    // Se já havia 1 célula selecionada anteriormente e agora clicamos em outra na mesma linha:
    if (selectedCoords.length === 1) {
      const [r0, c0] = selectedCoords[0]
      const line = getLineCoords(r0, c0, r, c)
      if (line && line.length > 1) {
        setSelectedCoords(line)
        const found = testCoordinatesForWord(line)
        if (found) {
          isDragging.current = false
          startCell.current = null
          return
        }
      }
    }

    setSelectedCoords([[r, c]])
    testCoordinatesForWord([[r, c]])
  }

  // Trata arrasto (MouseEnter / TouchMove)
  const handleHover = (r, c) => {
    if (!isDragging.current || !startCell.current) return
    const [r0, c0] = startCell.current
    const line = getLineCoords(r0, c0, r, c)
    if (line) {
      setSelectedCoords(line)
    }
  }

  // Trata fim de seleção (MouseUp / TouchEnd)
  const handleEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false

    if (selectedCoords.length > 0) {
      const found = testCoordinatesForWord(selectedCoords)
      if (!found && selectedCoords.length > 1) {
        // Se formou uma linha que não é palavra, limpa a seleção
        setSelectedCoords([])
      }
    }
  }

  const handleWordListClick = (palavraObj) => {
    setActiveHint(palavraObj.dica)
  }

  const handleReset = () => {
    setSelectedCoords([])
    setFoundWords([])
    setFoundCoords([])
    setActiveHint(null)
  }

  const isCellFound = (r, c) => {
    return foundCoords.some(([fr, fc]) => fr === r && fc === c)
  }

  const isCellSelected = (r, c) => {
    return selectedCoords.some(([sr, sc]) => sr === r && sc === c)
  }

  const isComplete = foundWords.length === palavras.length

  return (
    <div 
      className="wordsearch-container"
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <p className="wordsearch-instruction">
        {instrucao} <em>(Arraste ou clique na primeira e na última letra de cada palavra)</em>
      </p>

      <div className="wordsearch-layout">
        {/* Grade de Letras */}
        <div className="wordsearch-grid" role="grid" aria-label="Grade de caça-palavras">
          {fixedGrid.map((row, rIdx) => (
            row.map((letter, cIdx) => {
              const found = isCellFound(rIdx, cIdx)
              const selected = isCellSelected(rIdx, cIdx)
              return (
                <button
                  key={`${rIdx}-${cIdx}`}
                  type="button"
                  className={`ws-cell ${found ? 'found' : ''} ${selected ? 'selected' : ''}`}
                  onMouseDown={() => handleStart(rIdx, cIdx)}
                  onMouseEnter={() => handleHover(rIdx, cIdx)}
                  title={`Linha ${rIdx + 1}, Coluna ${cIdx + 1}`}
                >
                  {letter}
                </button>
              )
            })
          ))}
        </div>

        {/* Lista de Palavras & Dicas */}
        <div className="wordsearch-list">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ruby)' }}>
              Palavras ({foundWords.length}/{palavras.length})
            </span>
            <button
              onClick={handleReset}
              className="btn-vintage-outline"
              style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 3 }}
              title="Reiniciar caça-palavras"
            >
              <RotateCcw size={12} style={{ display: 'inline', marginRight: 2 }} /> Limpar
            </button>
          </div>

          {palavras.map((p) => {
            const found = foundWords.includes(p.palavra)
            return (
              <div
                key={p.palavra}
                className={`ws-word-item ${found ? 'found' : ''}`}
                onClick={() => handleWordListClick(p)}
                style={{ cursor: 'pointer' }}
                title={`Clique para ver a dica de ${p.palavra}`}
              >
                <span>{p.palavra}</span>
                {found ? (
                  <CheckCircle2 size={14} color="#8c2418" />
                ) : (
                  <HelpCircle size={14} color="#998772" />
                )}
              </div>
            )
          })}

          {activeHint && (
            <div style={{
              marginTop: 8,
              padding: '6px 10px',
              fontSize: '0.78rem',
              background: '#fff8ea',
              border: '1px dashed var(--color-gold)',
              borderRadius: 4,
              color: 'var(--ink-secondary)'
            }}>
              <strong>Dica:</strong> {activeHint}
            </div>
          )}
        </div>
      </div>

      {/* Banner de Celebração ao completar */}
      {isComplete && (
        <div className="ws-victory-banner">
          <Trophy size={18} />
          <span>Excelente! Você decifrou todos os vestígios do Caça-Palavras!</span>
        </div>
      )}
    </div>
  )
}
