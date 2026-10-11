import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { PROFESSORAS_MEMORIA, PROJETO_INFO } from '../content/jogoMemoriaData'
import { 
  Sparkles, 
  RotateCcw, 
  Trophy, 
  ExternalLink, 
  X, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  Lightbulb, 
  GraduationCap,
  Eye
} from 'lucide-react'

// Função utilitária para embaralhar as cartas
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Cria os pares de cartas (16 cartas: 2 de cada uma das 8 professoras)
function createDeck() {
  const deck = []
  PROFESSORAS_MEMORIA.forEach((prof) => {
    deck.push({
      uniqueId: `${prof.id}-card-1`,
      profId: prof.id,
      profData: prof
    })
    deck.push({
      uniqueId: `${prof.id}-card-2`,
      profId: prof.id,
      profData: prof
    })
  })
  return shuffleArray(deck)
}

export default function MemoryGame() {
  const [deck, setDeck] = useState(() => createDeck())
  const [flippedIndices, setFlippedIndices] = useState([]) // índices no deck virados neste turno
  const [matchedProfIds, setMatchedProfIds] = useState(() => new Set())
  const [isLocked, setIsLocked] = useState(false)
  const [moves, setMoves] = useState(0)
  const [activeModalProf, setActiveModalProf] = useState(null)
  const confettiFired = useRef(false)

  const hasCompletedGame = matchedProfIds.size === PROFESSORAS_MEMORIA.length && PROFESSORAS_MEMORIA.length > 0

  // Dispara confete quando todas as 8 professoras forem encontradas
  useEffect(() => {
    if (hasCompletedGame) {
      if (!confettiFired.current) {
        confettiFired.current = true
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#8c2418', '#b38634', '#dfb25f', '#fdfaf2', '#4a2c11']
        })
      }
    } else {
      confettiFired.current = false
    }
  }, [hasCompletedGame])

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProf(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const resetGame = () => {
    setDeck(createDeck())
    setFlippedIndices([])
    setMatchedProfIds(new Set())
    setMoves(0)
    setIsLocked(false)
    setActiveModalProf(null)
    confettiFired.current = false
  }

  const handleCardClick = (index) => {
    if (isLocked) return
    if (flippedIndices.includes(index)) return

    const clickedCard = deck[index]
    if (matchedProfIds.has(clickedCard.profId)) return

    const newFlipped = [...flippedIndices, index]
    setFlippedIndices(newFlipped)

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1)
      const [firstIndex, secondIndex] = newFlipped
      const firstCard = deck[firstIndex]
      const secondCard = deck[secondIndex]

      if (firstCard.profId === secondCard.profId) {
        // PAR ENCONTRADO!
        const matchedProf = firstCard.profData
        const updatedMatches = new Set(matchedProfIds)
        updatedMatches.add(matchedProf.id)
        setMatchedProfIds(updatedMatches)
        setFlippedIndices([])

        // Abre o modal especial com o resumo e a inovação docente
        setTimeout(() => {
          setActiveModalProf(matchedProf)
        }, 350)
      } else {
        // Não foi par: aguarda um instante e desvira
        setIsLocked(true)
        setTimeout(() => {
          setFlippedIndices([])
          setIsLocked(false)
        }, 1100)
      }
    }
  }

  const isCardFlipped = (index, card) => {
    return flippedIndices.includes(index) || matchedProfIds.has(card.profId)
  }

  const isCardMatched = (card) => {
    return matchedProfIds.has(card.profId)
  }

  return (
    <div className="memory-game-root">
      {/* Cabeçalho do Jogo de Época */}
      <div className="memory-game-header">
        <div className="memory-header-badge">
          <Sparkles size={14} className="gold-icon" />
          <span>Jogo de Memória Historiográfico • Edição Especial</span>
        </div>
        <h3 className="memory-game-title">
          Mulheres & Inovação Docente
        </h3>
        <p className="memory-game-subtitle">
          Encontre os pares das 8 professoras pioneiras. Ao combinar cada par, descubra a biografia e a inovação pedagógica que essa educadora legou à história da educação brasileira.
        </p>

        {/* Barra de Status e Controles */}
        <div className="memory-status-bar">
          <div className="memory-stat-pill">
            <Users size={15} />
            <span>Pares Encontrados: <strong>{matchedProfIds.size} / {PROFESSORAS_MEMORIA.length}</strong></span>
          </div>
          <div className="memory-stat-pill">
            <Sparkles size={15} />
            <span>Tentativas: <strong>{moves}</strong></span>
          </div>
          <button 
            type="button" 
            className="btn-vintage btn-vintage-outline memory-restart-btn"
            onClick={resetGame}
            title="Embaralhar e Recomeçar o Jogo"
          >
            <RotateCcw size={14} /> Recomeçar Partida
          </button>
        </div>
      </div>

      {/* Banner de Vitória ao Concluir */}
      {hasCompletedGame && (
        <div className="memory-victory-banner">
          <div className="victory-icon-wrap">
            <Trophy size={32} />
          </div>
          <div className="victory-text-wrap">
            <h4>Extraordinário! Todas as 8 Mestras Pioneiras foram Reveladas!</h4>
            <p>
              Você completou o desafio da memória em <strong>{moves}</strong> tentativas. Conhecer suas biografias é resgatar a inovação silenciosa praticada diariamente no chão das salas de aula brasileiras.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-vintage memory-play-again-btn"
            onClick={resetGame}
          >
            <RotateCcw size={14} /> Jogar Novamente
          </button>
        </div>
      )}

      {/* Grade de Cartas do Jogo da Memória (16 Cartas) */}
      <div className="memory-grid" role="region" aria-label="Tabuleiro do Jogo da Memória">
        {deck.map((card, index) => {
          const flipped = isCardFlipped(index, card)
          const matched = isCardMatched(card)

          return (
            <button
              key={card.uniqueId}
              type="button"
              className={`memory-card ${flipped ? 'flipped' : ''} ${matched ? 'matched' : ''}`}
              onClick={() => handleCardClick(index)}
              disabled={isLocked || matched}
              aria-label={
                flipped 
                  ? `Carta ${card.profData.nome}` 
                  : `Carta virada de costas na posição ${index + 1}`
              }
            >
              <div className="memory-card-inner">
                {/* VERSO DA CARTA (Estampa Gravada Vintage de Almanaque) */}
                <div className="memory-card-back">
                  <div className="card-ornament-border">
                    <div className="card-center-seal">
                      <GraduationCap size={22} className="card-seal-icon" />
                      <span className="card-seal-text">Mestras</span>
                    </div>
                  </div>
                </div>

                {/* FRENTE DA CARTA (Retrato e Nome da Professora) */}
                <div className="memory-card-front">
                  <div className="card-photo-wrapper">
                    <img 
                      src={card.profData.imagem} 
                      alt={card.profData.nome} 
                      className="card-photo-img"
                      loading="lazy"
                    />
                    {matched && (
                      <span className="card-matched-badge" title="Par Descoberto!">
                        <CheckCircle2 size={16} />
                      </span>
                    )}
                  </div>
                  <div className="card-caption">
                    <span className="card-prof-name">{card.profData.nome}</span>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Galeria das Professoras Já Reveladas (Compêndio Biográfico Interativo) */}
      <div className="memory-discovered-gallery">
        <div className="gallery-header">
          <BookOpen size={16} className="gold-icon" />
          <h4 className="gallery-title">Galeria das Mestras Descobertas:</h4>
          <span className="gallery-subtitle">
            (Clique em qualquer professora já encontrada para reler sua biografia e inovação)
          </span>
        </div>

        <div className="gallery-strip">
          {PROFESSORAS_MEMORIA.map((prof) => {
            const isFound = matchedProfIds.has(prof.id)
            return (
              <button
                key={prof.id}
                type="button"
                className={`gallery-prof-chip ${isFound ? 'found' : 'locked'}`}
                onClick={() => {
                  if (isFound) setActiveModalProf(prof)
                }}
                disabled={!isFound}
                title={isFound ? `Abrir Biografia de ${prof.nome}` : 'Ainda não encontrada no jogo'}
              >
                <div className="chip-avatar-wrap">
                  {isFound ? (
                    <img src={prof.imagem} alt={prof.nome} className="chip-avatar-img" />
                  ) : (
                    <div className="chip-avatar-placeholder">?</div>
                  )}
                </div>
                <div className="chip-name-wrap">
                  <span className="chip-prof-name">
                    {isFound ? prof.nome : '??? Encontre no Jogo'}
                  </span>
                  {isFound && <Eye size={12} className="chip-view-icon" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* PAINEL INSTITUCIONAL E HISTORIOGRÁFICO DO PROJETO EMBAIXO DO JOGO */}
      <section className="memory-project-footer-box">
        <div className="project-heraldry-top">✦ 📚 ✦</div>
        <div className="project-badge">Historiografia & Acervo de Pesquisa</div>
        <h4 className="project-main-title">Sobre o Projeto</h4>
        <h5 className="project-sub-title">
          Mulheres e inovação docente (São Paulo e França, nas décadas de 1860 a 1960)
        </h5>
        
        <div className="project-body-text">
          <p>
            O projeto, que integra a <strong>Faculdade de Educação da USP (Universidade de São Paulo)</strong> e universidades francesas associadas à <strong>USPC (Université Sorbonne Paris Cité)</strong>, objetiva a elaboração de biografias de professoras que inovaram a prática docente e que permanecem praticamente desconhecidas ainda nos dias de hoje.
          </p>
          <p>
            A maioria dessas mulheres construiu sua trajetória em sala de aula. Foram professoras de escolas primárias e secundárias em zonas urbanas e rurais, criaram metodologias para o ensino de jovens e adultos ou para alunos especiais. No seu conjunto, estas biografias exibem as múltiplas formas de ser mulher e professora em São Paulo e na França nos séculos XIX e XX.
          </p>
        </div>

        <div className="project-source-callout">
          <span className="source-label">Fonte oficial e dados originais da pesquisa:</span>
          <a 
            href="https://histeduc.wixsite.com/genre-genero" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-external-link"
          >
            <span>Acesse o Acervo Histórico Completo: https://histeduc.wixsite.com/genre-genero</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* MODAL DETALHADO DA PROFESSORA ENCONTRADA */}
      {activeModalProf && (
        <div 
          className="memory-modal-backdrop"
          onClick={() => setActiveModalProf(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-prof-name"
        >
          <div 
            className="memory-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar Modal */}
            <button
              type="button"
              className="memory-modal-close"
              onClick={() => setActiveModalProf(null)}
              aria-label="Fechar biografia"
            >
              <X size={20} />
            </button>

            {/* Cabeçalho do Modal com Selo */}
            <div className="memory-modal-header">
              <div className="modal-badge-found">
                <CheckCircle2 size={15} />
                <span>Mestra Pioneira Encontrada!</span>
              </div>
              <h3 id="modal-prof-name" className="modal-prof-title">
                {activeModalProf.nome}
              </h3>
              <div className="modal-prof-meta">
                <span>{activeModalProf.datas}</span>
                <span className="meta-sep">•</span>
                <span>{activeModalProf.local}</span>
              </div>
              <div className="modal-prof-role">
                {activeModalProf.cargoPrincipal}
              </div>
            </div>

            {/* Corpo do Modal em Duas Colunas (Foto Grande e Texto) */}
            <div className="memory-modal-body">
              {/* Coluna da Imagem Maior com Moldura de Época */}
              <div className="modal-portrait-col">
                <div className="modal-portrait-frame">
                  <img 
                    src={activeModalProf.imagem} 
                    alt={`Retrato de ${activeModalProf.nome}`} 
                    className="modal-portrait-img"
                  />
                  <div className="portrait-plate">
                    Profª. {activeModalProf.nome}
                  </div>
                </div>
              </div>

              {/* Coluna de Biografia e Inovação */}
              <div className="modal-info-col">
                {/* Resumo Biográfico */}
                <div className="modal-section-card">
                  <div className="section-card-title">
                    <BookOpen size={16} className="ruby-icon" />
                    <span>Trajetória & Vida Docente</span>
                  </div>
                  <p className="section-card-text">
                    {activeModalProf.resumo}
                  </p>
                </div>

                {/* DESTAQUE PRINCIPAL: CONTRIBUIÇÃO / INOVAÇÃO PARA A EDUCAÇÃO */}
                <div className="modal-section-card innovation-card">
                  <div className="section-card-title gold-title">
                    <Lightbulb size={18} className="gold-icon" />
                    <span>✦ Inovação & Contribuição para a Educação ✦</span>
                  </div>
                  <p className="innovation-card-text">
                    {activeModalProf.inovacao}
                  </p>
                </div>

                {/* Palavras-Chave Historiográficas */}
                {activeModalProf.palavrasChave && (
                  <div className="modal-keywords-row">
                    <span className="keywords-label">Palavras-chave:</span>
                    <div className="keywords-chips">
                      {activeModalProf.palavrasChave.map((kw, i) => (
                        <span key={i} className="kw-chip">{kw}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Autoria da Pesquisa Histórica */}
                <div className="modal-authorship-note">
                  <span>Pesquisa e autoria: <strong>{activeModalProf.autoriaPesquisa}</strong></span>
                </div>
              </div>
            </div>

            {/* Rodapé do Modal Enfatizando o Projeto e o Link */}
            <div className="memory-modal-footer">
              <div className="modal-footer-source">
                <p className="footer-source-text">
                  Informações e dados biográficos obtidos através do projeto <strong>"Mulheres e inovação docente (São Paulo e França, nas décadas de 1860 a 1960)"</strong> (Faculdade de Educação da USP / Université Sorbonne Paris Cité).
                </p>
                <a 
                  href={PROJETO_INFO.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-source-link"
                >
                  <span>{PROJETO_INFO.url}</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <button 
                type="button" 
                className="btn-vintage memory-modal-continue-btn"
                onClick={() => setActiveModalProf(null)}
              >
                Continuar Jogo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
