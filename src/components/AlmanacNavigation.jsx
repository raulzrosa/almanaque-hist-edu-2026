import { BookMarked, ChevronLeft, ChevronRight, BookOpen, Columns, FileText } from 'lucide-react'

export default function AlmanacNavigation({
  aulas,
  currentLessonIndex,
  onSelectLesson,
  activePageView,
  onChangePageView
}) {

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      onSelectLesson(currentLessonIndex - 1)
    }
  }

  const handleNextLesson = () => {
    if (currentLessonIndex < aulas.length - 1) {
      onSelectLesson(currentLessonIndex + 1)
    }
  }

  return (
    <nav className="almanac-nav-bar">
      {/* Seletor do Sumário */}
      <div className="nav-summary-select">
        <span className="nav-label">
          <BookMarked size={16} style={{ display: 'inline', marginRight: 4, verticalAlign: 'text-bottom' }} />
          Sumário:
        </span>
        <select
          className="select-vintage"
          value={currentLessonIndex}
          onChange={(e) => onSelectLesson(Number(e.target.value))}
          aria-label="Selecionar aula no sumário"
        >
          {aulas.map((aula, idx) => (
            <option key={aula.id} value={idx}>
              Aula {aula.numero.toString().padStart(2, '0')}: {aula.titulo}
            </option>
          ))}
        </select>
      </div>

      {/* Controles de Navegação entre Aulas */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          type="button"
          className="btn-vintage btn-vintage-outline"
          onClick={handlePrevLesson}
          disabled={currentLessonIndex === 0}
          title="Aula Anterior"
        >
          <ChevronLeft size={16} /> Anterior
        </button>

        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: '#e8dec3' }}>
          {currentLessonIndex + 1} / {aulas.length}
        </span>

        <button
          type="button"
          className="btn-vintage btn-vintage-outline"
          onClick={handleNextLesson}
          disabled={currentLessonIndex === aulas.length - 1}
          title="Próxima Aula"
        >
          Próxima <ChevronRight size={16} />
        </button>
      </div>

      {/* Alternância de Modo de Visualização (Página Dupla vs Página Única) */}
      <div className="nav-view-actions">
        <span className="nav-label" style={{ fontSize: '0.78rem' }}>Exibição:</span>
        <button
          type="button"
          className={`btn-vintage btn-vintage-outline ${activePageView === 'spread' ? 'active' : ''}`}
          onClick={() => onChangePageView('spread')}
          title="Ver as duas páginas lado a lado (estilo livro aberto)"
        >
          <Columns size={14} /> Página Dupla
        </button>
        <button
          type="button"
          className={`btn-vintage btn-vintage-outline ${activePageView === 'page1' ? 'active' : ''}`}
          onClick={() => onChangePageView('page1')}
          title="Ver apenas a Página 1 (Resumo)"
        >
          <FileText size={14} /> Pág. 1 (Resumo)
        </button>
        <button
          type="button"
          className={`btn-vintage btn-vintage-outline ${activePageView === 'page2' ? 'active' : ''}`}
          onClick={() => onChangePageView('page2')}
          title="Ver apenas a Página 2 (Passatempos)"
        >
          <BookOpen size={14} /> Pág. 2 (Jogos)
        </button>
      </div>
    </nav>
  )
}
