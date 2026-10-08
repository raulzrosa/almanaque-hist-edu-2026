import { useEffect, useRef, useState } from 'react'
import { Sparkles, BookOpen, GraduationCap, HeartHandshake, Compass, Languages, Eye, Smile, Award } from 'lucide-react'

export default function ComicDialogueSection() {
  const luteroRowRef = useRef(null)
  const comenioRowRef = useRef(null)

  const [luteroVisible, setLuteroVisible] = useState(false)
  const [comenioVisible, setComenioVisible] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === luteroRowRef.current) {
            setLuteroVisible(true)
            observer.unobserve(entry.target)
          } else if (entry.target === comenioRowRef.current) {
            setComenioVisible(true)
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    if (luteroRowRef.current) observer.observe(luteroRowRef.current)
    if (comenioRowRef.current) observer.observe(comenioRowRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="comic-dialogue-section">
      {/* Cabeçalho Editorial da Sessão Especial */}
      <div className="comic-section-header">
        <div className="comic-section-badge">
          <Sparkles size={14} /> Sessão Especial • Diálogo das Raízes
        </div>
        <h3 className="comic-section-title">
          O Fundamento do Bom Mestre: O que Dizem Lutero e Comênio?
        </h3>
        <p className="comic-section-subtitle">
          Entre a Reforma Protestante e o Nascimento da Didática Moderna: os alicerces indispensáveis que cada pensador exigia para o ofício do educador
        </p>
      </div>

      {/* ========================================================
          PAINEL 1: MARTINHO LUTERO (IMAGEM À ESQUERDA, BALÃO À DIREITA)
          ======================================================== */}
      <div
        ref={luteroRowRef}
        className={`comic-character-row comic-row-lutero ${luteroVisible ? 'is-visible' : ''}`}
      >
        {/* Retrato de Lutero (À Esquerda) */}
        <div className="comic-portrait-container portrait-left">
          <div className="comic-portrait-frame">
            <img
              src="/resumo6-1.png"
              alt="Retrato de Martinho Lutero"
              className="comic-portrait-img"
            />
            <div className="comic-portrait-plate">
              <span className="portrait-name">Martinho Lutero</span>
              <span className="portrait-dates">(1483–1546)</span>
              <span className="portrait-tag">Reforma & Educação Pública</span>
            </div>
          </div>
        </div>

        {/* Balão de História em Quadrinhos (Apontando para Lutero) */}
        <div className="comic-balloon-wrapper balloon-right">
          {/* Apêndice / Rabicho do balão (Desktop - aponta para a esquerda) */}
          <svg
            className="comic-tail comic-tail-left"
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M24 3 C15 9, 4 18, 0 22 C6 24, 15 27, 24 29 Z"
              fill="#fffdf8"
              stroke="#27211b"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line x1="23" y1="4" x2="23" y2="28" stroke="#fffdf8" strokeWidth="4" />
          </svg>

          {/* Rabicho do balão (Mobile - aponta para cima) */}
          <svg
            className="comic-tail comic-tail-top"
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

          <div className="comic-balloon-box">
            <div className="comic-balloon-header">
              <span className="comic-balloon-speaker">
                <Languages size={15} /> Lutero Exclama:
              </span>
              <span className="comic-balloon-badge">Fundamentos Docentes</span>
            </div>

            <div className="comic-balloon-lead">
              "Para que uma cidade floresça e os jovens sejam verdadeiramente educados, o professor não pode ser improvisado! Exijo para o ofício do mestre estes alicerces:"
            </div>

            <ul className="comic-principles-list">
              <li>
                <span className="principle-bullet">
                  <Languages size={13} />
                </span>
                <div>
                  <strong>Domínio das Línguas Clássicas:</strong> O mestre deve dominar hebraico, grego e latim para buscar a verdade direto nas fontes originais, sem intermediários.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <BookOpen size={13} />
                </span>
                <div>
                  <strong>Cultura Geral & Artes Liberais:</strong> Sólida bagagem em história, dialética, matemática e música ("a música afasta as aflições e afia a mente").
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <HeartHandshake size={13} />
                </span>
                <div>
                  <strong>Fim dos Castigos Cruéis:</strong> Repúdio veemente às torturas e espancamentos das escolas monásticas medievais. Ensinar com paciência, moderação e carinho fraterno.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <GraduationCap size={13} />
                </span>
                <div>
                  <strong>Instrução Universal (Meninos e Meninas):**</strong> O saber não é privilégio dos mosteiros; todas as crianças devem ser formadas para servir ao bem público da cidade.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <Award size={13} />
                </span>
                <div>
                  <strong>O Mais Nobre Ofício Civil:</strong> <em>"Depois do ministério da palavra, não há no mundo trabalho mais útil, maior e melhor do que o de um bom e fiel professor!"</em>
                </div>
              </li>
            </ul>

            <div className="comic-balloon-footer">
              <span>📖 Aos Conselhos de Todas as Cidades da Alemanha (1524) • Sermão sobre o Dever Escolar (1530)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor Decorativo Vintage entre os dois personagens */}
      <div className="comic-divider">
        <span className="comic-divider-line" />
        <span className="comic-divider-ornament">✦ ✦ ✦</span>
        <span className="comic-divider-line" />
      </div>

      {/* ========================================================
          PAINEL 2: JAN AMOS COMÊNIO (BALÃO À ESQUERDA, IMAGEM À DIREITA)
          ======================================================== */}
      <div
        ref={comenioRowRef}
        className={`comic-character-row comic-row-comenio ${comenioVisible ? 'is-visible' : ''}`}
      >
        {/* Balão de História em Quadrinhos (Apontando para Comênio à Direita) */}
        <div className="comic-balloon-wrapper balloon-left">
          {/* Apêndice / Rabicho do balão (Desktop - aponta para a direita) */}
          <svg
            className="comic-tail comic-tail-right"
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 3 C9 9, 20 18, 24 22 C18 24, 9 27, 0 29 Z"
              fill="#fffdf8"
              stroke="#27211b"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <line x1="1" y1="4" x2="1" y2="28" stroke="#fffdf8" strokeWidth="4" />
          </svg>

          {/* Rabicho do balão (Mobile - aponta para cima) */}
          <svg
            className="comic-tail comic-tail-top"
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

          <div className="comic-balloon-box">
            <div className="comic-balloon-header">
              <span className="comic-balloon-speaker">
                <Compass size={15} /> Comênio Afirma:
              </span>
              <span className="comic-balloon-badge">Didática & Método</span>
            </div>

            <div className="comic-balloon-lead">
              "Ensinar não é dom fortuito ou mero privilégio acidental! É a grande arte do método sincronizada com a própria natureza humana:"
            </div>

            <ul className="comic-principles-list">
              <li>
                <span className="principle-bullet">
                  <Compass size={13} />
                </span>
                <div>
                  <strong>O Domínio do Método Científico:</strong> O educador não depende de improvisos: domina uma didática universal capaz de <em>ensinar tudo a todos totalmente (Omnes omnia docere)</em>.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <Smile size={13} />
                </span>
                <div>
                  <strong>Respeito ao Ritmo Biológico do Educando:</strong> Sincronizar as lições com a capacidade, maturidade e idade da criança, sem jamais forçar além do tempo natural.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <Eye size={13} />
                </span>
                <div>
                  <strong>Intuição Sensível (Sentidos antes do Abstrato):</strong> O conhecimento deve entrar primeiro pelos olhos, ouvidos e mãos — com gravuras e objetos reais — antes das regras decoradas.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <HeartHandshake size={13} />
                </span>
                <div>
                  <strong>A Escola como Oficina de Humanidade:</strong> Ambientes luminosos e sem coerção violenta. O professor age como um guia ético e inspirador, jamais como um algoz.
                </div>
              </li>
              <li>
                <span className="principle-bullet">
                  <GraduationCap size={13} />
                </span>
                <div>
                  <strong>Gradualidade e Ordem Prática:</strong> Avançar do simples ao complexo, do conhecido ao desconhecido, para que o que se aprende seja duradouro e útil para toda a vida.
                </div>
              </li>
            </ul>

            <div className="comic-balloon-footer">
              <span>📐 Jan Amos Comênio • Didactica Magna (1657) — O Pai da Didática Moderna</span>
            </div>
          </div>
        </div>

        {/* Retrato de Comênio (À Direita) */}
        <div className="comic-portrait-container portrait-right">
          <div className="comic-portrait-frame">
            <img
              src="/resumo6-2.png"
              alt="Retrato de Jan Amos Comênio"
              className="comic-portrait-img"
            />
            <div className="comic-portrait-plate">
              <span className="portrait-name">Jan Amos Comênio</span>
              <span className="portrait-dates">(1592–1670)</span>
              <span className="portrait-tag">Pai da Didática Moderna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

