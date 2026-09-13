import { Compass } from 'lucide-react'

export default function CuriosityCard({ curiosidade }) {
  if (!curiosidade) return null

  return (
    <div className="curiosity-card">
      <div className="curiosity-badge">
        <Compass size={13} /> Gabinete de Curiosidades
      </div>
      <h3 className="curiosity-title">{curiosidade.titulo}</h3>
      <p className="curiosity-text">{curiosidade.texto}</p>
      {curiosidade.curiosidadeExtra && (
        <div className="curiosity-extra">
          {curiosidade.curiosidadeExtra}
        </div>
      )}
    </div>
  )
}
