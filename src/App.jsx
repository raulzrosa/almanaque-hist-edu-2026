import { useState } from 'react'
import { AULAS } from './content/aulasIndex'
import AlmanacHeader from './components/AlmanacHeader'
import AlmanacNavigation from './components/AlmanacNavigation'
import AlmanacPage from './components/AlmanacPage'
import LessonReader from './components/LessonReader'
import CuriosityCard from './components/CuriosityCard'
import WordSearch from './components/WordSearch'
import HistoryQuiz from './components/HistoryQuiz'
import Crossword from './components/Crossword'
import TimelineChallenge from './components/TimelineChallenge'
import { Bookmark, Gamepad2, Sparkles, PlusCircle, Grid3X3, Clock } from 'lucide-react'
import './styles/almanaque.css'

export default function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [activePageView, setActivePageView] = useState('spread') // 'spread' | 'page1' | 'page2'
  const [activeTab, setActiveTab] = useState('') // dinâmico
  const [showHowToAddModal, setShowHowToAddModal] = useState(false)

  const currentLesson = AULAS[currentLessonIndex] || AULAS[0]
  const page1Number = currentLesson.numero * 2 - 1
  const page2Number = currentLesson.numero * 2

  const passatempos = currentLesson.passatempos || {}
  const availableTabs = Object.keys(passatempos)
  const currentTab = availableTabs.includes(activeTab) ? activeTab : (availableTabs[0] || '')

  const getTabInfo = (key) => {
    switch (key) {
      case 'cacaPalavras':
        return { label: 'Caça-Palavras', icon: <Sparkles size={14} /> }
      case 'quiz':
        return { label: 'Quiz Histórico', icon: <Gamepad2 size={14} /> }
      case 'palavrasCruzadas':
        return { label: 'Palavras Cruzadas', icon: <Grid3X3 size={14} /> }
      case 'linhaDoTempo':
        return { label: 'Linha do Tempo', icon: <Clock size={14} /> }
      default:
        return { label: key, icon: <Sparkles size={14} /> }
    }
  }

  return (
    <div className="almanaque-root">
      {/* Fita Marcadora Decorativa */}
      <aside 
        className="ribbon-bookmark"
        title="História da Educação • Clique para ver instruções de novas aulas"
        onClick={() => setShowHowToAddModal(true)}
      >
        <Bookmark size={20} fill="#dfb25f" color="#b38634" />
      </aside>

      {/* Cabeçalho do Almanaque */}
      <AlmanacHeader currentLesson={currentLesson} />

      {/* Barra de Navegação e Sumário */}
      <AlmanacNavigation
        aulas={AULAS}
        currentLessonIndex={currentLessonIndex}
        onSelectLesson={setCurrentLessonIndex}
        activePageView={activePageView}
        onChangePageView={setActivePageView}
      />

      {/* Palco do Almanaque (Área das Páginas) */}
      <main className="almanac-stage">
        <div className={`almanac-spread ${activePageView !== 'spread' ? 'single-page-mode' : ''}`}>
          
          {/* PÁGINA 1: RESUMO CRÍTICO DA AULA */}
          {(activePageView === 'spread' || activePageView === 'page1') && (
            <AlmanacPage
              pageNumber={page1Number}
              topic={currentLesson.modulo || 'História da Educação'}
              edition={currentLesson.dataPublicacao}
            >
              <LessonReader lesson={currentLesson} />
            </AlmanacPage>
          )}

          {/* PÁGINA 2: GABINETE DE CURIOSIDADES & PASSATEMPOS */}
          {(activePageView === 'spread' || activePageView === 'page2') && (
            <AlmanacPage
              pageNumber={page2Number}
              topic="Gabinete de Curiosidades & Passatempos"
              edition="Almanaque Ilustrado"
            >
              <div className="page-2-container">
                {/* Cartão de Curiosidades Históricas */}
                <CuriosityCard curiosidade={currentLesson.curiosidade} />

                {/* Caixa de Passatempos Interativos */}
                <div className="activities-box">
                  <div className="activities-tabs">
                    {availableTabs.map((tabKey) => {
                      const info = getTabInfo(tabKey)
                      return (
                        <button
                          key={tabKey}
                          type="button"
                          className={`activity-tab-btn ${currentTab === tabKey ? 'active' : ''}`}
                          onClick={() => setActiveTab(tabKey)}
                        >
                          {info.icon} {info.label}
                        </button>
                      )
                    })}
                  </div>

                  {currentTab === 'cacaPalavras' && passatempos.cacaPalavras && (
                    <WordSearch config={passatempos.cacaPalavras} />
                  )}

                  {currentTab === 'quiz' && passatempos.quiz && (
                    <HistoryQuiz config={passatempos.quiz} />
                  )}

                  {currentTab === 'palavrasCruzadas' && passatempos.palavrasCruzadas && (
                    <Crossword config={passatempos.palavrasCruzadas} />
                  )}

                  {currentTab === 'linhaDoTempo' && passatempos.linhaDoTempo && (
                    <TimelineChallenge config={passatempos.linhaDoTempo} />
                  )}
                </div>
              </div>
            </AlmanacPage>
          )}

        </div>
      </main>

      {/* Rodapé do Almanaque */}
      <footer className="almanaque-footer">
        <div className="footer-inner">
          <div className="footer-heraldry">✦ 📜 ✦</div>
          <div className="footer-creds">
            Almanaque Digital de História da Educação • Desenvolvido para estudos universitários e difusão do pensamento crítico.
          </div>
          <div style={{ marginTop: 6, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={() => setShowHowToAddModal(true)}
              className="btn-vintage-outline"
              style={{ fontSize: '0.75rem', padding: '4px 10px' }}
            >
              <PlusCircle size={13} style={{ display: 'inline', marginRight: 4 }} />
              Como adicionar novos resumos (.md)
            </button>
          </div>
        </div>
      </footer>

      {/* Modal Guia: Como Adicionar Novas Aulas */}
      {showHowToAddModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 20
          }}
          onClick={() => setShowHowToAddModal(false)}
        >
          <div 
            style={{
              background: '#fdfaf2',
              border: '2px solid var(--color-gold)',
              borderRadius: 8,
              maxWidth: 620,
              width: '100%',
              padding: 24,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ruby)', margin: '0 0 12px' }}>
              Como Adicionar Novos Resumos ao Almanaque
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
              Para cada nova aula, o processo é super direto:
            </p>
            <ol style={{ fontSize: '0.92rem', paddingLeft: 20, color: 'var(--ink-primary)', lineHeight: 1.6 }}>
              <li>
                Crie o arquivo markdown com seu resumo na pasta:
                <br />
                <code style={{ background: '#eee5cf', padding: '2px 6px', borderRadius: 3 }}>
                  src/content/aulas/aula-02.md
                </code>
              </li>
              <li>
                Registre a nova aula em:
                <br />
                <code style={{ background: '#eee5cf', padding: '2px 6px', borderRadius: 3 }}>
                  src/content/aulasIndex.js
                </code>
                (definindo o título, conceitos e as palavras do passatempo ou quiz).
              </li>
              <li>
                O Almanaque atualizará o Sumário e gerará automaticamente as duas páginas numeradas e diagramadas!
              </li>
            </ol>
            <div style={{ textAlign: 'right', marginTop: 16 }}>
              <button 
                type="button" 
                className="btn-vintage"
                onClick={() => setShowHowToAddModal(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
