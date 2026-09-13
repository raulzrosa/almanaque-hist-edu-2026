import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Award, CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react'

export default function HistoryQuiz({ config }) {
  const { titulo, perguntas } = config
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showSummary, setShowSummary] = useState(false)

  const currentQ = perguntas[currentIdx]
  const hasAnsweredCurrent = selectedAnswers[currentIdx] !== undefined

  const handleSelectOption = (optionIdx) => {
    if (hasAnsweredCurrent) return // não muda resposta depois de responder

    const isCorrect = optionIdx === currentQ.respostaCorreta
    const newAnswers = {
      ...selectedAnswers,
      [currentIdx]: {
        selected: optionIdx,
        isCorrect
      }
    }
    setSelectedAnswers(newAnswers)

    // Se acertou todas na última pergunta, comemora
    if (isCorrect && currentIdx === perguntas.length - 1) {
      const correctCount = Object.values(newAnswers).filter(a => a.isCorrect).length
      if (correctCount === perguntas.length) {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        })
      }
    }
  }

  const handleNext = () => {
    if (currentIdx < perguntas.length - 1) {
      setCurrentIdx(currentIdx + 1)
    } else {
      setShowSummary(true)
    }
  }

  const handleReset = () => {
    setCurrentIdx(0)
    setSelectedAnswers({})
    setShowSummary(false)
  }

  const correctTotal = Object.values(selectedAnswers).filter(a => a.isCorrect).length

  return (
    <div className="quiz-container">
      {!showSummary ? (
        <>
          <div className="quiz-progress-bar">
            <span>{titulo}</span>
            <span>
              Questão {currentIdx + 1} de {perguntas.length}
            </span>
          </div>

          <div className="quiz-question-card">
            <h4 className="quiz-question-text">{currentQ.enunciado}</h4>

            <div className="quiz-options">
              {currentQ.opcoes.map((op, opIdx) => {
                const isSelected = selectedAnswers[currentIdx]?.selected === opIdx
                const isCorrect = currentQ.respostaCorreta === opIdx
                const letters = ['A', 'B', 'C', 'D']

                let stateClass = ''
                if (hasAnsweredCurrent) {
                  if (isCorrect) stateClass = 'correct'
                  else if (isSelected) stateClass = 'incorrect'
                }

                return (
                  <button
                    key={opIdx}
                    type="button"
                    className={`quiz-option-btn ${stateClass}`}
                    onClick={() => handleSelectOption(opIdx)}
                    disabled={hasAnsweredCurrent}
                  >
                    <span className="quiz-option-letter">{letters[opIdx]}</span>
                    <span style={{ flex: 1 }}>{op}</span>
                    {hasAnsweredCurrent && isCorrect && (
                      <CheckCircle2 size={16} color="#2e7d32" style={{ flexShrink: 0 }} />
                    )}
                    {hasAnsweredCurrent && isSelected && !isCorrect && (
                      <XCircle size={16} color="#c62828" style={{ flexShrink: 0 }} />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Explicação da resposta */}
            {hasAnsweredCurrent && (
              <div className="quiz-feedback-box">
                <div style={{ fontWeight: 700, marginBottom: 4, color: selectedAnswers[currentIdx].isCorrect ? '#2e7d32' : '#8c2418' }}>
                  {selectedAnswers[currentIdx].isCorrect ? '✓ Resposta Correta!' : '✗ Atenção ao conceito:'}
                </div>
                <div>{currentQ.explicacao}</div>

                <div style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    className="btn-vintage"
                    style={{ fontSize: '0.78rem', padding: '6px 14px' }}
                    onClick={handleNext}
                  >
                    {currentIdx < perguntas.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '24px 16px',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: 6,
          border: '1px solid #d4c6a9'
        }}>
          <Award size={40} color="var(--color-ruby)" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', margin: '0 0 8px', color: 'var(--color-ruby)' }}>
            Resultado da Sabatina
          </h3>
          <p style={{ fontSize: '1.1rem', margin: '0 0 16px' }}>
            Você acertou <strong>{correctTotal}</strong> de <strong>{perguntas.length}</strong> questões!
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--ink-secondary)', fontStyle: 'italic', marginBottom: 20 }}>
            {correctTotal === perguntas.length
              ? 'Distinção e Louvor! O rigor metodológico está gravado em sua mente.'
              : 'Bom trabalho! Vale a pena reler o resumo da página 1 para fixar os conceitos.'}
          </p>
          <button type="button" className="btn-vintage" onClick={handleReset}>
            <RotateCcw size={14} /> Tentar Novamente
          </button>
        </div>
      )}
    </div>
  )
}
