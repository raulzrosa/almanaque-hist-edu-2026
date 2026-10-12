import { useState, useEffect, useRef, useMemo } from 'react'
import confetti from 'canvas-confetti'
import { Trophy, CheckCircle2, RotateCcw, Clock, ArrowRight } from 'lucide-react'

// Função para embaralhar os acontecimentos
function shuffleList(list) {
  if (!list || list.length <= 1) return list || []
  const arr = [...list]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // Garante que a ordem não fique idêntica à sequência original
  if (arr.length > 1 && arr.every((item, idx) => item.id === list[idx].id)) {
    [arr[0], arr[1]] = [arr[1], arr[0]]
  }
  return arr
}

export default function TimelineChallenge({ config }) {
  const { marcos, instrucao } = config
  // marcos: array com { id, ano, evento, detalhe }

  const [selectedYear, setSelectedYear] = useState(null)
  const [matches, setMatches] = useState({}) // { ano: eventoId }
  const [wrongAttempt, setWrongAttempt] = useState(null)
  const [resetCount, setResetCount] = useState(0)
  const [prevMarcos, setPrevMarcos] = useState(marcos)
  const confettiFired = useRef(false)

  // Reseta seleção caso a lista de marcos mude (ex: troca de aula)
  if (prevMarcos !== marcos) {
    setPrevMarcos(marcos)
    setSelectedYear(null)
    setMatches({})
    setWrongAttempt(null)
  }

  // Acontecimentos embaralhados para desafiar o aluno
  const shuffledMarcos = useMemo(() => {
    void resetCount // Força reembaralhamento ao clicar em Reiniciar
    return shuffleList(marcos)
  }, [marcos, resetCount])

  // Mantém a coluna de datas organizada cronologicamente como linha do tempo
  const sortedYears = useMemo(() => {
    return [...marcos].sort((a, b) => parseInt(a.ano, 10) - parseInt(b.ano, 10))
  }, [marcos])

  const isCompleted = Object.keys(matches).length === marcos.length && marcos.length > 0

  // Dispara confetes na conclusão
  useEffect(() => {
    if (isCompleted && !confettiFired.current) {
      confettiFired.current = true
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#8c2418', '#b38634', '#dfb25f', '#ffffff']
      })
    } else if (!isCompleted) {
      confettiFired.current = false
    }
  }, [isCompleted])

  const handleSelectYear = (ano) => {
    if (matches[ano]) return // já associado
    setSelectedYear(ano)
    setWrongAttempt(null)
  }

  const handleSelectEvent = (marco) => {
    if (!selectedYear) return

    if (marco.ano === selectedYear) {
      // Associação Correta!
      setMatches(prev => ({ ...prev, [selectedYear]: marco.id }))
      setSelectedYear(null)
      setWrongAttempt(null)
    } else {
      // Erro
      setWrongAttempt({ ano: selectedYear, eventoId: marco.id })
      setTimeout(() => {
        setWrongAttempt(null)
      }, 1200)
    }
  }

  const handleReset = () => {
    setSelectedYear(null)
    setMatches({})
    setWrongAttempt(null)
    setResetCount(c => c + 1)
  }

  const matchedCount = Object.keys(matches).length

  return (
    <div className="timeline-challenge-container">
      <p className="wordsearch-instruction">
        {instrucao} <em>(Clique no ano e, em seguida, selecione o evento histórico correspondente)</em>
      </p>

      {/* Barra de Progresso */}
      <div className="timeline-status-bar">
        <span className="timeline-progress-text">
          Marcos Conectados: {matchedCount} de {marcos.length}
          {selectedYear && (
            <span className="timeline-selected-badge">
              • Ano {selectedYear} ativo
            </span>
          )}
        </span>
        <button
          onClick={handleReset}
          className="btn-vintage-outline"
          style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: 3 }}
        >
          <RotateCcw size={12} style={{ display: 'inline', marginRight: 2 }} /> Reiniciar
        </button>
      </div>

      <div className="timeline-layout">
        {/* Coluna da Linha do Tempo (Anos) */}
        <div className="timeline-years-column">
          <h5 className="timeline-col-title">✦ Datas Históricas</h5>
          <div className="timeline-years-list">
            {sortedYears.map(m => {
              const isMatched = !!matches[m.ano]
              const isSelected = selectedYear === m.ano
              const isError = wrongAttempt?.ano === m.ano

              return (
                <button
                  key={m.ano}
                  type="button"
                  className={`tl-year-btn ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isError ? 'error' : ''}`}
                  onClick={() => handleSelectYear(m.ano)}
                  disabled={isMatched}
                >
                  <Clock size={14} style={{ flexShrink: 0 }} />
                  <span className="tl-year-text">{m.ano}</span>
                  {isMatched && <CheckCircle2 size={16} color="#2e7d32" style={{ marginLeft: 'auto' }} />}
                  {isSelected && !isMatched && <ArrowRight size={14} style={{ marginLeft: 'auto' }} />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Coluna de Eventos para Conectar */}
        <div className="timeline-events-column">
          <h5 className="timeline-col-title">✦ Acontecimentos na Educação</h5>
          <div className="timeline-events-list">
            {shuffledMarcos.map(m => {
              const matchedAno = Object.keys(matches).find(ano => matches[ano] === m.id)
              const isMatched = !!matchedAno
              const isError = wrongAttempt?.eventoId === m.id

              return (
                <div
                  key={m.id}
                  className={`tl-event-card ${isMatched ? 'matched' : ''} ${isError ? 'error' : ''} ${selectedYear && !isMatched ? 'selectable' : ''}`}
                  onClick={() => handleSelectEvent(m)}
                >
                  {isMatched && (
                    <span className="tl-matched-tag">
                      ✓ Ano {matchedAno}
                    </span>
                  )}
                  <div className="tl-event-text">
                    {m.evento}
                  </div>
                  {isMatched && m.detalhe && (
                    <div className="tl-event-detail">
                      {m.detalhe}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Banner de Vitória */}
      {isCompleted && (
        <div className="ws-victory-banner" style={{ marginTop: 16 }}>
          <Trophy size={18} />
          <span>{config.mensagemVitoria || 'Extraordinário! Toda a Linha do Tempo foi reconstruída!'}</span>
        </div>
      )}
    </div>
  )
}
