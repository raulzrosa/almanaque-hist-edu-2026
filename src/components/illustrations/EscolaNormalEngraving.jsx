export default function EscolaNormalEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura da Escola Normal e da formação de professores no Brasil"
      >
        <defs>
          <pattern id="hatch-normal" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#b38634" strokeWidth="0.6" opacity="0.22" />
          </pattern>
        </defs>

        {/* Fundo Pergaminho */}
        <rect width="600" height="280" fill="#f5edd8" />
        <rect width="600" height="280" fill="url(#hatch-normal)" opacity="0.12" />

        {/* Moldura dupla */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Cabeçalho */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA VIII • AS ESCOLAS NORMAIS NO BRASIL
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          NITERÓI (1835) • SÃO PAULO (1890)
        </text>

        {/* ========================================================
            FACHADA CLÁSSICA DA ESCOLA NORMAL & ESCOLA-MODELO
            ======================================================== */}
        <g transform="translate(300, 138)">
          {/* Frontão Triangular Superior */}
          <polygon points="-165,-42 165,-42 0,-92" fill="#e8dec3" stroke="#332216" strokeWidth="2" />
          <polygon points="-145,-45 145,-45 0,-84" fill="none" stroke="#b38634" strokeWidth="1" />

          {/* Símbolo do Compasso & Esquadro (Norma = Régua e Parâmetro) */}
          <circle cx="0" cy="-64" r="14" fill="#dfb25f" stroke="#7e2014" strokeWidth="1.2" />
          <text x="0" y="-60" fontFamily="Cinzel, serif" fontSize="8.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
            NORMA
          </text>

          {/* Entablamento e Inscrição Principal */}
          <rect x="-165" y="-42" width="330" height="18" fill="#fdfaf2" stroke="#332216" strokeWidth="1.8" />
          <text x="0" y="-29" fontFamily="Cinzel, serif" fontSize="9.5" fontWeight="bold" fill="#7e2014" textAnchor="middle" letterSpacing="2">
            ESCOLA NORMAL • FORMAÇÃO DO MAGISTÉRIO
          </text>

          {/* Edifício com Colunata Clássica */}
          <rect x="-165" y="-24" width="330" height="92" fill="#f3ebd7" stroke="#332216" strokeWidth="1.8" />

          {/* 6 Colunas Clássicas */}
          {[-135, -81, -27, 27, 81, 135].map((cx, i) => (
            <g key={i}>
              <rect x={cx - 7} y="-24" width="14" height="92" fill="#fdfaf2" stroke="#4a3726" strokeWidth="1.2" />
              <line x1={cx - 3} y1="-24" x2={cx - 3} y2="68" stroke="#b38634" strokeWidth="0.8" />
              <line x1={cx + 3} y1="-24" x2={cx + 3} y2="68" stroke="#b38634" strokeWidth="0.8" />
            </g>
          ))}

          {/* Portal Central em Arco */}
          <path d="M -22 68 L -22 14 A 22 22 0 0 1 22 14 L 22 68 Z" fill="#2d2118" stroke="#7e2014" strokeWidth="1.5" />

          {/* Janelas Históricas em Arco */}
          {[-108, 108].map((wx, i) => (
            <path key={i} d={`M ${wx - 12} 38 L ${wx - 12} 0 A 12 12 0 0 1 ${wx + 12} 0 L ${wx + 12} 38 Z`} fill="#2d2118" stroke="#7e2014" strokeWidth="1" />
          ))}

          {/* Escadaria Frontal */}
          <rect x="-180" y="68" width="360" height="8" fill="#dfd1b5" stroke="#332216" strokeWidth="1" />
          <rect x="-190" y="76" width="380" height="8" fill="#d2c19f" stroke="#332216" strokeWidth="1" />
        </g>

        {/* Anotações Laterais Historiográficas */}
        <g fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9.5" fill="#4a3726">
          <text x="30" y="98">1835: Niterói (RJ)</text>
          <text x="30" y="115">Primeira Escola Normal</text>
          <text x="30" y="132">Método Mútuo & Desafios</text>
          <line x1="30" y1="140" x2="115" y2="140" stroke="#b38634" strokeWidth="0.8" />

          <text x="465" y="98">1890: Caetano de Campos</text>
          <text x="465" y="115">Escola-Modelo Anexa</text>
          <text x="465" y="132">Feminização da Docência</text>
          <line x1="465" y1="140" x2="560" y2="140" stroke="#b38634" strokeWidth="0.8" />
        </g>

        {/* Placa de Legenda */}
        <rect x="75" y="248" width="450" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. IX: A INSTITUCIONALIZAÇÃO DOCENTE • DE NITERÓI À REFORMA CAETANO DE CAMPOS
        </text>
      </svg>
    </div>
  )
}

