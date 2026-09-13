import { useState, useEffect, useRef, useMemo } from 'react'
import confetti from 'canvas-confetti'
import { Trophy, RotateCcw } from 'lucide-react'

export default function Crossword({ config }) {
  const { grid, words } = config

  // Inicializa o estado das células do jogador
  const [userGrid, setUserGrid] = useState(() => {
    return grid.map(row => row.map(cell => (cell ? '' : null)))
  })
  const [activeWordId, setActiveWordId] = useState(words[0]?.id || null)
  const inputRefs = useRef({})
  const confettiFired = useRef(false)

  // Deriva se o jogador completou o jogo corretamente
  const isCompleted = useMemo(() => {
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] !== null) {
          if ((userGrid[r]?.[c] || '').toUpperCase() !== grid[r][c].toUpperCase()) {
            return false
          }
        }
      }
    }
    return true
  }, [userGrid, grid])

  useEffect(() => {
    if (isCompleted && !confettiFired.current) {
      confettiFired.current = true
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8c2418', '#b38634', '#dfb25f', '#ffffff']
      })
    } else if (!isCompleted) {
      confettiFired.current = false
    }
  }, [isCompleted])

  const handleCellChange = (r, c, value) => {
    if (grid[r][c] === null) return
    const char = value.slice(-1).toUpperCase()
    
    const next = userGrid.map(row => [...row])
    next[r][c] = char
    setUserGrid(next)

    // Se digitou uma letra, avança o foco para a próxima célula da palavra ativa
    if (char && activeWordId) {
      const currentWord = words.find(w => w.id === activeWordId)
      if (currentWord) {
        let nextR = r
        let nextC = c
        if (currentWord.orientation === 'horizontal') {
          nextC = c + 1
        } else {
          nextR = r + 1
        }
        if (nextR < grid.length && nextC < grid[0].length && grid[nextR][nextC] !== null) {
          inputRefs.current[`${nextR}-${nextC}`]?.focus()
        }
      }
    }
  }

  const handleKeyDown = (e, r, c) => {
    if (e.key === 'Backspace' && !userGrid[r][c] && activeWordId) {
      const currentWord = words.find(w => w.id === activeWordId)
      if (currentWord) {
        let prevR = r
        let prevC = c
        if (currentWord.orientation === 'horizontal') {
          prevC = c - 1
        } else {
          prevR = r - 1
        }
        if (prevR >= 0 && prevC >= 0 && grid[prevR][prevC] !== null) {
          inputRefs.current[`${prevR}-${prevC}`]?.focus()
        }
      }
    }
  }

  const handleReset = () => {
    setUserGrid(grid.map(row => row.map(cell => (cell ? '' : null))))
  }

  // Identifica o número da célula (se for início de palavra)
  const getCellNumber = (r, c) => {
    const w = words.find(item => item.row === r && item.col === c)
    return w ? w.number : null
  }

  // Verifica se a célula pertence à palavra atualmente ativa
  const isCellInActiveWord = (r, c) => {
    if (!activeWordId) return false
    const w = words.find(item => item.id === activeWordId)
    if (!w) return false

    if (w.orientation === 'horizontal') {
      return r === w.row && c >= w.col && c < w.col + w.word.length
    } else {
      return c === w.col && r >= w.row && r < w.row + w.word.length
    }
  }

  return (
    <div className="crossword-container">
      <p className="wordsearch-instruction">
        Preencha as letras cruzadas com os marcos da educação imperial brasileira:
      </p>

      <div className="crossword-layout">
        {/* Grade de Palavras Cruzadas */}
        <div className="crossword-board">
          {grid.map((row, r) => (
            <div key={r} className="crossword-row">
              {row.map((cell, c) => {
                if (cell === null) {
                  return <div key={`${r}-${c}`} className="cw-cell cw-black" />
                }
                const cellNum = getCellNumber(r, c)
                const inActiveWord = isCellInActiveWord(r, c)
                const isCorrect = (userGrid[r][c] || '').toUpperCase() === cell.toUpperCase()

                return (
                  <div 
                    key={`${r}-${c}`} 
                    className={`cw-cell ${inActiveWord ? 'active-word' : ''} ${isCompleted ? 'completed' : ''}`}
                    onClick={() => {
                      const associatedWord = words.find(w => 
                        w.orientation === 'horizontal' 
                          ? (r === w.row && c >= w.col && c < w.col + w.word.length)
                          : (c === w.col && r >= w.row && r < w.row + w.word.length)
                      )
                      if (associatedWord) setActiveWordId(associatedWord.id)
                      inputRefs.current[`${r}-${c}`]?.focus()
                    }}
                  >
                    {cellNum && <span className="cw-number">{cellNum}</span>}
                    <input
                      ref={el => (inputRefs.current[`${r}-${c}`] = el)}
                      type="text"
                      maxLength={1}
                      value={userGrid[r][c] || ''}
                      onChange={e => handleCellChange(r, c, e.target.value)}
                      onKeyDown={e => handleKeyDown(e, r, c)}
                      className={`cw-input ${isCompleted && isCorrect ? 'correct' : ''}`}
                      aria-label={`Linha ${r + 1}, Coluna ${c + 1}`}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Lista de Dicas (Horizontais & Verticais) */}
        <div className="crossword-clues-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ruby)' }}>
              Dicas Históricas
            </span>
            <button
              onClick={handleReset}
              className="btn-vintage-outline"
              style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 3 }}
              title="Limpar palavras cruzadas"
            >
              <RotateCcw size={12} style={{ display: 'inline', marginRight: 2 }} /> Limpar
            </button>
          </div>

          <div className="cw-clues-section">
            <h5 className="cw-clues-heading">✦ Horizontais</h5>
            {words.filter(w => w.orientation === 'horizontal').map(w => (
              <div
                key={w.id}
                className={`cw-clue-item ${activeWordId === w.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveWordId(w.id)
                  inputRefs.current[`${w.row}-${w.col}`]?.focus()
                }}
              >
                <span className="cw-clue-num">{w.number}.</span>
                <span>{w.clue} <em>({w.word.length} letras)</em></span>
              </div>
            ))}

            <h5 className="cw-clues-heading" style={{ marginTop: 10 }}>✦ Verticais</h5>
            {words.filter(w => w.orientation === 'vertical').map(w => (
              <div
                key={w.id}
                className={`cw-clue-item ${activeWordId === w.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveWordId(w.id)
                  inputRefs.current[`${w.row}-${w.col}`]?.focus()
                }}
              >
                <span className="cw-clue-num">{w.number}.</span>
                <span>{w.clue} <em>({w.word.length} letras)</em></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner de Vitória */}
      {isCompleted && (
        <div className="ws-victory-banner">
          <Trophy size={18} />
          <span>Brilhante! Todas as Palavras Cruzadas do Império foram decifradas!</span>
        </div>
      )}
    </div>
  )
}
