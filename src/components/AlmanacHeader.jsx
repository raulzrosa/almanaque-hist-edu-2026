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
      </div>
    </header>
  )
}
