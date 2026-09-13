import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { Trophy, CheckCircle2, RotateCcw, Clock, ArrowRight } from 'lucide-react'

export default function TimelineChallenge({ config }) {
  const { marcos, instrucao } = config
  // marcos: array com { id, ano, evento, detalhe }

  const [selectedYear, setSelectedYear] = useState(null)
  const [matches, setMatches] = useState({}) // { ano: eventoId }
  const [wrongAttempt, setWrongAttempt] = useState(null)
  const confettiFired = useRef(false)

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
  }

  const matchedCount = Object.keys(matches).length

  return (
    <div className="timeline-challenge-container">
      <p className="wordsearch-instruction">
        {instrucao} <em>(Clique no ano e, em seguida, selecione o evento histórico correspondente)</em>
      </p>

      {/* Barra de Progresso */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 12 }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-ruby)' }}>
          Marcos Conectados: {matchedCount} de {marcos.length}
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
            {marcos.map(m => {
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
            {marcos.map(m => {
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
          <span>Extraordinário! Toda a Linha do Tempo da Educação Imperial foi reconstruída!</span>
        </div>
      )}
    </div>
  )
}
