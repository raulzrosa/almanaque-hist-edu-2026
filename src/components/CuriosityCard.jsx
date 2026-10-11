import { useState } from 'react'
import { Compass, Feather, Sparkles, BookOpen, X, MessageSquareQuote } from 'lucide-react'

export default function CuriosityCard({ curiosidade }) {
  const [isBookOpen, setIsBookOpen] = useState(false)

  if (!curiosidade) return null

  // Remove repetição do prefixo "Gabinete de Curiosidades: " se já existir no dado
  const cleanTitle = curiosidade.titulo
    ? curiosidade.titulo.replace(/^Gabinete de Curiosidades:\s*/i, '')
    : 'Relíquia da História da Educação'

  return (
    <div className="dra-corugari-free-cabinet">
      {/* Container Principal: Mascote Livre + Balão de Fala */}
      <div className="corugari-cabinet-layout">
        
        {/* ========================================================
            LADO ESQUERDO: DRA. CORUGARI LIVRE (SEM RECIPIENTE/FRAME)
            ======================================================== */}
        <div className="corugari-mascot-free-container">
          <div className="corugari-mascot-wrapper">
            {/* Imagem de corpo inteiro sem fundo */}
            <img
              src="/mascote-dra-corugari-corpo-inteiro.png"
              alt="Dra. Corugari de corpo inteiro - Mascote Coruja Professora do Almanaque"
              className="corugari-free-img"
            />

            {/* DESTAQUE INTERATIVO SOBRE O LIVRO */}
            <button
              type="button"
              className={`corugari-book-hotspot ${isBookOpen ? 'book-opened' : ''}`}
              onClick={() => setIsBookOpen(!isBookOpen)}
              title={
                isBookOpen
                  ? 'Clique para fechar a anotação secreta do tomo'
                  : 'Clique no livro que a Dra. segura para revelar a anotação secreta!'
              }
              aria-label="Abrir anotação secreta do tomo que a Dra. Corugari segura"
            >
              {/* Efeito de brilho pulsante contínuo */}
              <span className="book-pulse-ring" />
              
              {/* Plaqueta flutuante de dica */}
              {/* <span className="book-floating-tag">
                <Sparkles size={11} />
                <span>{isBookOpen ? 'Tomo Aberto' : 'Clique no Livro!'}</span>
              </span> */}
            </button>
          </div>

          {/* Plaqueta elegante de rodapé da mascote */}
          <div className="corugari-pedestal-badge">
            <span className="pedestal-name">Dra. Corugari</span>
            <span className="pedestal-title">Curadora do Gabinete</span>
          </div>
        </div>

        {/* ========================================================
            LADO DIREITO: BALÃO DE FALA DA DRA. CORUGARI
            ======================================================== */}
        <div className="corugari-speech-container">
          
          {/* Apêndice / Rabicho do balão apontando para a Dra. Corugari (Desktop) */}
          <svg
            className="corugari-speech-tail corugari-tail-left"
            width="26"
            height="36"
            viewBox="0 0 26 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M26 3 C16 10, 4 20, 0 24 C8 27, 17 30, 26 33 Z"
              fill="#fffdf8"
              stroke="#27211b"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line x1="25" y1="4" x2="25" y2="32" stroke="#fffdf8" strokeWidth="4" />
          </svg>

          {/* Rabicho do balão apontando para cima (Mobile) */}
          <svg
            className="corugari-speech-tail corugari-tail-top"
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 20 C9 12, 16 0, 16 0 C16 0, 23 12, 29 20 Z"
              fill="#fffdf8"
              stroke="#27211b"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line x1="4" y1="19" x2="28" y2="19" stroke="#fffdf8" strokeWidth="4" />
          </svg>

          {/* Corpo do Balão com a Fala da Coruja */}
          <div className="corugari-speech-bubble">
            {/* <div className="speech-header">
              <div className="speech-speaker-label">
                <MessageSquareQuote size={15} />
                <span>Dra. Corugari Proclama:</span>
              </div>
              <div className="speech-cabinet-pill">
                <Compass size={12} />
                <span>Gabinete de Curiosidades</span>
              </div>
            </div> */}

            {/* Título da Curiosidade */}
            <h3 className="speech-curiosity-title">{cleanTitle}</h3>

            {/* Fala Principal da Mascote */}
            <div className="speech-lead-quote">
              "Atenção, caros estudantes e mestres! Abram bem os olhos para este fascinante registro que guardo nos arquivos do meu gabinete:"
            </div>

            <p className="speech-body-text">{curiosidade.texto}</p>

            {/* Botão de Dica/Ação Rápida para o Livro */}
            {!isBookOpen && curiosidade.curiosidadeExtra && (
              <button
                type="button"
                className="speech-book-hint-btn"
                onClick={() => setIsBookOpen(true)}
                title="Clique aqui ou no tomo antigo nas asas da Dra. Corugari para revelar a anotação"
              >
                <Sparkles size={14} className="hint-sparkle-icon" />
                <span>
                  <strong>Anotação Secreta no Tomo:</strong> Há um fato confidencial sobre isto em meu livro. <em>Clique no livro que seguro para revelá-lo!</em>
                </span>
              </button>
            )}

            {/* ========================================================
                ANOTAÇÃO MARGINAL REVELADA PELO LIVRO CLICADO
                ======================================================== */}
            {isBookOpen && curiosidade.curiosidadeExtra && (
              <div className="corugari-secret-manuscript-note">
                <div className="manuscript-header">
                  <div className="manuscript-title">
                    <BookOpen size={14} />
                    <span>Anotação Marginal Revelada do Tomo:</span>
                  </div>
                  <button
                    type="button"
                    className="manuscript-close-btn"
                    onClick={() => setIsBookOpen(false)}
                    title="Fechar anotação do tomo"
                  >
                    <X size={13} /> <span>Fechar Tomo</span>
                  </button>
                </div>
                <div className="manuscript-body">
                  <p>{curiosidade.curiosidadeExtra}</p>
                </div>
                <div className="manuscript-footer">
                  <Feather size={12} />
                  <span>Extraído diretamente dos arquivos da Dra. Corugari • Curadora Historiográfica</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
