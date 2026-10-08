import { useState, useMemo } from 'react'
import { marked } from 'marked'
import { KeyRound, Layers, AlignLeft, Sparkles, BookOpen } from 'lucide-react'
import DeloreanEngraving from './illustrations/DeloreanEngraving'
import HistorianManuscriptEngraving from './illustrations/HistorianManuscriptEngraving'
import FluxCapacitorEngraving from './illustrations/FluxCapacitorEngraving'
import PombalSchoolEngraving from './illustrations/PombalSchoolEngraving'
import ColegioPedroIIEngraving from './illustrations/ColegioPedroIIEngraving'
import LicoesDeCoisasEngraving from './illustrations/LicoesDeCoisasEngraving'
import MestraBenedictaEngraving from './illustrations/MestraBenedictaEngraving'
import ComeniusDidacticaEngraving from './illustrations/ComeniusDidacticaEngraving'
import EscolaNormalEngraving from './illustrations/EscolaNormalEngraving'
import InstitutosEducacaoEngraving from './illustrations/InstitutosEducacaoEngraving'
import ComicDialogueSection from './ComicDialogueSection'
import ThinkersCarouselSection from './ThinkersCarouselSection'

export default function LessonReader({ lesson }) {
  // Modo de visualização: 'pontos' (tópicos ilustrados) ou 'corrido' (texto integral)
  const [viewMode, setViewMode] = useState('pontos')

  // Parseia o markdown caso o usuário queira ler em texto contínuo
  const htmlContent = useMemo(() => {
    const md = lesson?.resumoMarkdown || ''
    if (!md) return ''
    return marked.parse(md, {
      gfm: true,
      breaks: true
    })
  }, [lesson])

  if (!lesson) return null

  const pontos = lesson.pontosIlustrados || []

  // Mapeia a ilustração ou imagem adequada
  const renderIllustration = (ponto) => {
    if (ponto.imagemUrl) {
      return (
        <div className="engraving-frame image-poster-frame">
          <img
            src={ponto.imagemUrl}
            alt={ponto.titulo}
            className="engraving-img poster-img"
          />
          {ponto.legendaIlustracao && (
            <div className="engraving-caption">
              {ponto.legendaIlustracao}
            </div>
          )}
        </div>
      )
    }

    switch (ponto.tipoIlustracao) {
      case 'delorean':
        return <DeloreanEngraving />
      case 'manuscrito':
        return <HistorianManuscriptEngraving />
      case 'fluxo':
        return <FluxCapacitorEngraving />
      case 'pombal':
        return <PombalSchoolEngraving />
      case 'pedroII':
        return <ColegioPedroIIEngraving />
      case 'licoesCoisas':
        return <LicoesDeCoisasEngraving />
      case 'benedicta':
        return <MestraBenedictaEngraving />
      case 'comenius':
        return <ComeniusDidacticaEngraving />
      case 'escolaNormal':
        return <EscolaNormalEngraving />
      case 'institutosEducacao':
        return <InstitutosEducacaoEngraving />
      default:
        return null
    }
  }

  return (
    <div className="lesson-reader">
      {/* Bloco de Título Editorial do Almanaque */}
      <div className="lesson-title-block">
        <div className="lesson-chapter-label">
          Aula {lesson.numero.toString().padStart(2, '0')} • Resumo Crítico
        </div>
        <h2 className="lesson-h1">{lesson.titulo}</h2>
        {lesson.subtitulo && (
          <div className="lesson-h2">{lesson.subtitulo}</div>
        )}

        {/* Alternador de Formato: Tópicos Ilustrados vs Texto Corrido */}
        <div className="format-toggle-bar">
          <button
            type="button"
            className={`format-toggle-btn ${viewMode === 'pontos' ? 'active' : ''}`}
            onClick={() => setViewMode('pontos')}
            title="Exibir resumo estruturado em seções visuais com gravuras históricas"
          >
            <Layers size={13} /> Tópicos Ilustrados ({pontos.length} Pontos)
          </button>
          <button
            type="button"
            className={`format-toggle-btn ${viewMode === 'corrido' ? 'active' : ''}`}
            onClick={() => setViewMode('corrido')}
            title="Exibir o texto acadêmico contínuo original na íntegra"
          >
            <AlignLeft size={13} /> Texto Corrido na Íntegra
          </button>
        </div>
      </div>

      {/* ========================================================
          MODO 1: PONTOS ILUSTRADOS (DESIGN MODULAR DE ALMANAQUE)
          ======================================================== */}
      {viewMode === 'pontos' && pontos.length > 0 ? (
        <div className="lesson-points-list">
          {pontos.map((ponto, idx) => (
            <div key={ponto.id || idx} className="lesson-point-wrapper">
              <section className="lesson-point-card">
                {/* Cabeçalho do Ponto */}
                <div className="point-header">
                  <span className="point-numeral-badge">
                    Ponto {ponto.numeroRomano}
                  </span>
                  <div className="point-title-group">
                    <h3 className="point-title">{ponto.titulo}</h3>
                    {ponto.subtitulo && (
                      <span className="point-subtitle">{ponto.subtitulo}</span>
                    )}
                  </div>
                </div>

                {/* Gravura ou Imagem Ilustrativa de Época */}
                {(ponto.imagemUrl || ponto.tipoIlustracao) && (
                  <div className="point-engraving-wrapper">
                    {renderIllustration(ponto)}
                  </div>
                )}

                {/* Tag / Conceito de Destaque */}
                {ponto.destaqueConceito && (
                  <div className="point-concept-tag">
                    <Sparkles size={13} /> {ponto.destaqueConceito}
                  </div>
                )}

                {/* Parágrafos do Ponto */}
                <div className="point-body-text">
                  {ponto.paragrafos.map((paragrafo, pIdx) => (
                    <p key={pIdx}>{paragrafo}</p>
                  ))}
                </div>

                {/* Nota de rodapé explicativa / Reflexão */}
                {ponto.notaRodape && (
                  <div className="point-footer-note">
                    <BookOpen size={13} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{ponto.notaRodape}</span>
                  </div>
                )}
              </section>

              {/* Sessão Especial entre o Ponto 1 e o Ponto 2 (Lutero & Comênio na Aula 06) */}
              {((idx === 0 && lesson.numero === 6) || ponto.secaoEspecialApos) && (
                <ComicDialogueSection />
              )}

              {/* Sessão Especial após o Ponto 2 (Carrossel dos 3 Pensadores na Aula 06) */}
              {idx === 1 && lesson.numero === 6 && (
                <ThinkersCarouselSection />
              )}
            </div>
          ))}
        </div>
      ) : (
        /* ========================================================
           MODO 2: TEXTO CORRIDO CLÁSSICO INTEGRAL
           ======================================================== */
        <div 
          className="lesson-prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      )}

      {/* Citação destacada */}
      {lesson.citacaoDestaque && (
        <blockquote className="lesson-quote-box">
          "{lesson.citacaoDestaque.texto}"
          <cite className="lesson-quote-author">
            — {lesson.citacaoDestaque.fonte}
          </cite>
        </blockquote>
      )}

      {/* Conceitos-Chave da Aula */}
      {lesson.conceitosChave && lesson.conceitosChave.length > 0 && (
        <div className="concepts-section">
          <div className="concepts-header">
            ✦ Conceitos Historiográficos Fundamentais ✦
          </div>
          <div className="concepts-grid">
            {lesson.conceitosChave.map((item, idx) => (
              <div key={idx} className="concept-card">
                <span className="concept-term">
                  <KeyRound size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {item.termo}
                </span>
                <span>{item.descricao}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
