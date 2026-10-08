import { Sparkles, Feather, GraduationCap } from 'lucide-react'

export default function AlmanacHeader() {
  return (
    <header className="almanac-header">
      <div className="header-inner">
        <div className="header-supertitle">
          <span className="header-line"></span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Feather size={16} /> Volume 1
          </span>
          <span className="header-line"></span>
        </div>

        <h1 className="header-main-title">Almanaque Ilustrado</h1>
        <p className="header-subtitle">
          Caderno de Estudos & Resumos Críticos de História da Educação
        </p>

        <div className="header-badges">
          <span className="vintage-pill">
            <GraduationCap size={14} /> Disciplina: História da Educação
          </span>
          <span className="vintage-pill">
            <Sparkles size={14} /> Resumos & Passatempos Culturais
          </span>
        </div>
      </div>
    </header>
  )
}
