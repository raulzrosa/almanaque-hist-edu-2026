import { BookMarked, ChevronLeft, ChevronRight, BookOpen, FileText } from 'lucide-react'

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
      <div className="nav-lesson-controls">
        <button
          type="button"
          className="btn-vintage btn-vintage-outline"
          onClick={handlePrevLesson}
          disabled={currentLessonIndex === 0}
          title="Aula Anterior"
        >
          <ChevronLeft size={16} /> Anterior
        </button>

        <span className="nav-page-counter">
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

      {/* Alternância de Página (Página 1: Resumo vs Página 2: Passatempos) */}
      <div className="nav-view-actions">
        <span className="nav-label">Página:</span>
        <div className="nav-view-buttons">
          <button
            type="button"
            className={`btn-vintage btn-vintage-outline ${activePageView === 'page1' ? 'active' : ''}`}
            onClick={() => onChangePageView('page1')}
            title="Ver a Página 1 (Resumo Crítico da Aula)"
          >
            <FileText size={14} /> <span>Pág. 1 (Resumo)</span>
          </button>
          <button
            type="button"
            className={`btn-vintage btn-vintage-outline ${activePageView === 'page2' ? 'active' : ''}`}
            onClick={() => onChangePageView('page2')}
            title="Ver a Página 2 (Gabinete de Curiosidades & Passatempos)"
          >
            <BookOpen size={14} /> <span>Pág. 2 (Passatempos)</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
