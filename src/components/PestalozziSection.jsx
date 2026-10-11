import { useState } from 'react'
import {
  Sparkles,
  Eye,
  Heart,
  Compass,
  BookOpen,
  Layers,
  Lightbulb,
  GraduationCap,
  School,
  MapPin,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export function PestalozziSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('vida') // 'vida' | 'republica'

  return (
    <div className={`pestalozzi-collapsible-wrapper ${isOpen ? 'is-expanded' : 'is-collapsed'}`}>
      {/* ========================================================
          BARRA / BANNER RETRÁTIL DE ACORDEÃO (SEMPRE VISÍVEL)
          ======================================================== */}
      <button
        type="button"
        className="pestalozzi-toggle-banner"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        title={isOpen ? 'Clique para recolher este aprofundamento' : 'Clique para expandir o aprofundamento sobre Pestalozzi'}
      >
        <div className="pestalozzi-banner-left">
          {/* Miniatura do Retrato de Pestalozzi */}
          <div className="pestalozzi-mini-thumb">
            <img
              src="/resumo3-1.png.png"
              alt="Miniatura de Pestalozzi"
              className="pestalozzi-thumb-img"
            />
          </div>

          <div className="pestalozzi-banner-info">
            <div className="pestalozzi-banner-badge">
              <Sparkles size={12} /> Aprofundamento Opcional • História da Pedagogia
            </div>
            <h4 className="pestalozzi-banner-title">
              Quer entender melhor o Método Intuitivo e a história de Pestalozzi?
            </h4>
            <p className="pestalozzi-banner-desc">
              Descubra como as "Lições de Coisas", o ensino pelos sentidos e o afeto infantil inspiraram o Decreto nº 981 de 1890 na recém-criada República.
            </p>
          </div>
        </div>

        <div className="pestalozzi-banner-action">
          <span className="pestalozzi-action-label">
            {isOpen ? 'Recolher' : 'Ver Aprofundamento'}
          </span>
          <span className="pestalozzi-action-chevron">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </div>
      </button>

      {/* ========================================================
          CONTEÚDO EXPANSÍVEL (EXIBIDO APENAS QUANDO ABERTO)
          ======================================================== */}
      {isOpen && (
        <div className="pestalozzi-expanded-body">
          <div className="comic-dialogue-section pestalozzi-special-section">
            {/* Cabeçalho Editorial da Sessão Especial */}
            <div className="comic-section-header">
              <div className="comic-section-badge">
                <Sparkles size={14} /> Sessão Especial • As Matrizes do Método Intuitivo
              </div>
              <h3 className="comic-section-title">
                Johann Heinrich Pestalozzi e a Revolução das "Lições de Coisas"
              </h3>
              <p className="comic-section-subtitle">
                Como o educador suíço superou a memorização verbalista mecânica e inspirou a reforma republicana brasileira de 1890 com o aprendizado pelos sentidos
              </p>
            </div>

            {/* PAINEL PRINCIPAL: RETRATO DE PESTALOZZI & BALÃO DO MÉTODO INTUITIVO */}
            <div className="comic-character-row comic-row-pestalozzi is-visible">
              {/* Retrato de Pestalozzi (À Esquerda) */}
              <div className="comic-portrait-container portrait-left">
                <div className="comic-portrait-frame">
                  <img
                    src="/resumo3-1.png.png"
                    alt="Retrato histórico de Johann Heinrich Pestalozzi"
                    className="comic-portrait-img"
                  />
                  <div className="comic-portrait-plate">
                    <span className="portrait-name">J. H. Pestalozzi</span>
                    <span className="portrait-dates">(1746–1827)</span>
                    <span className="portrait-tag">Pai da Pedagogia Moderna</span>
                  </div>
                </div>
              </div>

              {/* Balão de Explicação Pedagógica (Apontando para Pestalozzi) */}
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
                      <Eye size={15} /> Pestalozzi Ensina:
                    </span>
                    <span className="comic-balloon-badge">Fundamentos do Método Intuitivo</span>
                  </div>

                  <div className="comic-balloon-lead">
                    "A criança não aprende decorando palavras abstratas em livros mortos! O verdadeiro saber brota da intuição sensível (<em>Anschauung</em>): as coisas antes das palavras, a observação viva antes do conceito!"
                  </div>

                  <ul className="comic-principles-list">
                    <li>
                      <span className="principle-bullet">
                        <Eye size={13} />
                      </span>
                      <div>
                        <strong>"As Coisas Antes das Palavras":</strong> O aprendizado deve partir da percepção sensorial direta: ver, tocar, cheirar e manusear objetos reais da natureza (folhas, rochas, sementes, sólidos geométricos) antes de memorizar definições verbais.
                      </div>
                    </li>
                    <li>
                      <span className="principle-bullet">
                        <Heart size={13} />
                      </span>
                      <div>
                        <strong>Cabeça, Coração e Mãos (<em>Kopf, Herz und Hand</em>):</strong> A educação integral harmoniza o desenvolvimento intelectual (cabeça), o afeto e a formação moral (coração) e as habilidades corporais e o trabalho prático (mãos).
                      </div>
                    </li>
                    <li>
                      <span className="principle-bullet">
                        <Layers size={13} />
                      </span>
                      <div>
                        <strong>Do Concreto ao Abstrato:</strong> O intelecto progride segundo a ordem natural da infância: do simples ao complexo, do conhecido ao desconhecido, da experiência palpável ao raciocínio lógico abstrato.
                      </div>
                    </li>
                    <li>
                      <span className="principle-bullet">
                        <Compass size={13} />
                      </span>
                      <div>
                        <strong>A Tríade Primordial (Forma, Número e Nome):</strong> Qualquer percepção do mundo ancora-se em três atos: discernir a <em>forma</em> (desenho e geometria), quantificar o <em>número</em> (aritmética com objetos concretos) e expressar o <em>nome</em> (linguagem precisa).
                      </div>
                    </li>
                    <li>
                      <span className="principle-bullet">
                        <School size={13} />
                      </span>
                      <div>
                        <strong>Afeto Materno & Fim da Violência:</strong> Repúdio total aos castigos físicos monásticos. A escola deve reproduzir a ternura e o respeito mútuo de um lar acolhedor, onde o mestre conquista os alunos pelo amor e pela paciência.
                      </div>
                    </li>
                  </ul>

                  <div className="comic-balloon-footer">
                    <span>📖 Johann Heinrich Pestalozzi • <em>Como Gertrudes Ensina Seus Filhos</em> (1801) • <em>Cartas sobre Educação Popular</em></span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD CONTEXTUAL: A HISTÓRIA DE PESTALOZZI & O ECO NO BRASIL (1890) */}
            <div className="pestalozzi-history-context">
              <div className="pestalozzi-tabs-bar">
                <button
                  type="button"
                  className={`pestalozzi-tab-btn ${activeTab === 'vida' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vida')}
                >
                  <MapPin size={14} /> A Vida e os Institutos de Pestalozzi (Suíça)
                </button>
                <button
                  type="button"
                  className={`pestalozzi-tab-btn ${activeTab === 'republica' ? 'active' : ''}`}
                  onClick={() => setActiveTab('republica')}
                >
                  <Lightbulb size={14} /> Por que a República Adotou Pestalozzi no Decreto nº 981?
                </button>
              </div>

              <div className="pestalozzi-tab-content">
                {activeTab === 'vida' && (
                  <div className="pestalozzi-tab-pane">
                    <div className="pestalozzi-pane-grid">
                      <div className="pestalozzi-history-col">
                        <h4 className="pestalozzi-pane-title">
                          <GraduationCap size={16} /> Da Vocação Social aos Institutos Experimentais
                        </h4>
                        <p>
                          Nascido em <strong>Zurique (1746)</strong>, Johann Heinrich Pestalozzi cresceu sob forte influência das ideias iluministas de Jean-Jacques Rousseau. Profundamente tocado pela miséria das crianças camponesas e órfãs, dedicou toda sua vida e recursos para erguer refúgios escolares inovadores.
                        </p>
                        <p>
                          Em <strong>Neuhof (1774)</strong>, transformou sua propriedade rural em escola-oficina para ensinar fiação e agricultura combinadas à alfabetização. Mais tarde, em <strong>Stans (1799)</strong>, acolheu dezenas de órfãos de guerra napoleônica, cuidando pessoalmente da alimentação, do afeto e das primeiras letras das crianças sem qualquer auxílio financeiro estatal.
                        </p>
                      </div>
                      <div className="pestalozzi-history-col">
                        <h4 className="pestalozzi-pane-title">
                          <School size={16} /> O Apogeu em Yverdon & A Fama Mundial
                        </h4>
                        <p>
                          O ápice de sua metodologia ocorreu no célebre <strong>Instituto de Yverdon (1805–1825)</strong>, situado às margens do Lago Neuchâtel. Ali, educadores de todas as partes da Europa acorriam para observar suas turmas, onde não havia castigos, mas sim excursões botânicas, cartografia viva, experimentos de física e coral infantil.
                        </p>
                        <p>
                          Entre seus discípulos e admiradores estiveram <strong>Friedrich Froebel</strong> (criador dos Jardins de Infância), o filósofo <strong>Herbart</strong> e o educador francês <strong>Rivail</strong>. Suas ideias sobre as "Lições de Coisas" foram sistematizadas internacionalmente por Norman Calkins nos EUA e traduzidas por Rui Barbosa no Brasil.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'republica' && (
                  <div className="pestalozzi-tab-pane">
                    <div className="pestalozzi-pane-grid">
                      <div className="pestalozzi-history-col">
                        <h4 className="pestalozzi-pane-title">
                          <BookOpen size={16} /> A Ruptura com a Monarquia e o Positivismo
                        </h4>
                        <p>
                          Ao proclamar a República em 1889, os novos dirigentes brasileiros enfrentavam um modelo educacional imperial considerado arcaico, memorístico e elitista. O ministro <strong>Benjamin Constant</strong>, influenciado pela filosofia positivista e pelo iluminismo, via na ciência moderna o motor da emancipação do povo.
                        </p>
                        <p>
                          O método intuitivo de Pestalozzi encaixou-se perfeitamente no projeto republicano: ele transferia a autoridade pedagógica do dogma verbal da Igreja e dos manuais para a <strong>observação concreta do mundo e da natureza</strong>.
                        </p>
                      </div>
                      <div className="pestalozzi-history-col">
                        <h4 className="pestalozzi-pane-title">
                          <Lightbulb size={16} /> O Decreto nº 981/1890 e o Cidadão da República
                        </h4>
                        <p>
                          O <strong>Decreto nº 981 de 1890</strong> fixou no Distrito Federal que o ensino primário deveria adotar o método intuitivo como diretriz obrigatória. O novo regime não queria súditos passivos que apenas repetiam rezas ou lições de cor; precisava de <strong>cidadãos observadores, racionais e capazes de julgar pelos próprios sentidos</strong>.
                        </p>
                        <p>
                          As salas de aula republicanas passaram a ser equipadas com mapas murais, coleções de sementes, minerais, réguas e quadros ilustrados — os vestígios materiais da pedagogia moderna de Pestalozzi que chegavam ao Brasil!
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Botão de Fechamento/Recolhimento no Rodapé da Sessão */}
            <div className="pestalozzi-collapse-footer">
              <button
                type="button"
                className="btn-vintage-outline"
                onClick={() => setIsOpen(false)}
                title="Fechar e recolher o aprofundamento de Pestalozzi"
              >
                <ChevronUp size={14} /> Recolher este aprofundamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PestalozziSection
