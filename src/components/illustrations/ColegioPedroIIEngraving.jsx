export default function ColegioPedroIIEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura da fachada histórica do Colégio Pedro II fundado em 1837"
      >
        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA V • IMPERIAL COLÉGIO DE PEDRO II
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          RIO DE JANEIRO • 1837
        </text>

        {/* ========================================================
            FACHADA CLÁSSICA NEO-CLÁSSICA DO COLÉGIO PEDRO II
            ======================================================== */}
        <g transform="translate(300, 140)">
          {/* Frontão Triangular Superior */}
          <polygon points="-160,-40 160,-40 0,-90" fill="#e8dec3" stroke="#332216" strokeWidth="2" />
          <polygon points="-140,-43 140,-43 0,-82" fill="none" stroke="#b38634" strokeWidth="1" />
          
          {/* Brasão do Império do Brasil no frontão */}
          <circle cx="0" cy="-62" r="14" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.2" />
          <text x="0" y="-58" fontFamily="Cinzel, serif" fontSize="9" fill="#7e2014" textAnchor="middle" fontWeight="bold">
            P II
          </text>

          {/* Entablamento e Inscrição */}
          <rect x="-160" y="-40" width="320" height="18" fill="#fdfaf2" stroke="#332216" strokeWidth="1.8" />
          <text x="0" y="-27" fontFamily="Cinzel, serif" fontSize="10" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="2">
            COLÉGIO DE PEDRO II • FUNDADO EM 1837
          </text>

          {/* Colunata Clássica (6 Colunas) */}
          <rect x="-160" y="-22" width="320" height="90" fill="#f3ebd7" stroke="#332216" strokeWidth="1.8" />
          
          {/* Colunas */}
          {[-130, -78, -26, 26, 78, 130].map((cx, i) => (
            <g key={i}>
              <rect x={cx - 7} y="-22" width="14" height="90" fill="#fdfaf2" stroke="#4a3726" strokeWidth="1.2" />
              <line x1={cx - 3} y1="-22" x2={cx - 3} y2="68" stroke="#b38634" strokeWidth="0.8" />
              <line x1={cx + 3} y1="-22" x2={cx + 3} y2="68" stroke="#b38634" strokeWidth="0.8" />
            </g>
          ))}

          {/* Portal Central em Arco */}
          <path d="M -22 68 L -22 15 A 22 22 0 0 1 22 15 L 22 68 Z" fill="#2d2118" stroke="#7e2014" strokeWidth="1.5" />

          {/* Janelas Laterais em Arco */}
          {[-104, 104].map((wx, i) => (
            <path key={i} d={`M ${wx - 12} 40 L ${wx - 12} 0 A 12 12 0 0 1 ${wx + 12} 0 L ${wx + 12} 40 Z`} fill="#2d2118" stroke="#7e2014" strokeWidth="1" />
          ))}

          {/* Escadaria de Acesso */}
          <rect x="-175" y="68" width="350" height="8" fill="#dfd1b5" stroke="#332216" strokeWidth="1" />
          <rect x="-185" y="76" width="370" height="8" fill="#d2c19f" stroke="#332216" strokeWidth="1" />
        </g>

        {/* Citações de Alunos Notáveis nas Laterais */}
        <g fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#4a3726">
          <text x="35" y="100">Álvares de Azevedo</text>
          <text x="35" y="118">José de Alencar</text>
          <text x="35" y="136">Manuel Bandeira</text>
          <line x1="35" y1="145" x2="110" y2="145" stroke="#b38634" strokeWidth="0.8" />

          <text x="475" y="100">Nilo Peçanha</text>
          <text x="475" y="118">Fernanda Montenegro</text>
          <text x="475" y="136">Cássia Eller</text>
          <line x1="475" y1="145" x2="550" y2="145" stroke="#b38634" strokeWidth="0.8" />
        </g>

        {/* Placa de Legenda */}
        <rect x="90" y="248" width="420" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. V: O PADRÃO DA ELITE IMPERIAL • O IMPERIAL COLÉGIO DE PEDRO II
        </text>
      </svg>
    </div>
  )
}

