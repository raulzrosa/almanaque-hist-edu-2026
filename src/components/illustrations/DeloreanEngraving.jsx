export default function DeloreanEngraving({ className = '' }) {
  return (
    <div className={`engraving-frame ${className}`}>
      <svg
        viewBox="0 0 600 280"
        xmlns="http://www.w3.org/2000/svg"
        className="engraving-svg"
        aria-label="Gravura do DeLorean estilizado como esboço renascentista"
      >
        <defs>
          <filter id="paper-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.95  0 0 0 0 0.92  0 0 0 0 0.84  0 0 0 1 0" />
            <feBlend mode="multiply" in="SourceGraphic" result="blend" />
          </filter>
          
          <pattern id="hatch-pattern" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#8c2418" strokeWidth="0.75" opacity="0.35" />
          </pattern>
        </defs>

        {/* Fundo de Pergaminho */}
        <rect width="600" height="280" fill="#f6eedb" />
        <rect width="600" height="280" fill="url(#hatch-pattern)" opacity="0.15" />

        {/* Moldura dupla da gravura */}
        <rect x="8" y="8" width="584" height="264" fill="none" stroke="#b38634" strokeWidth="1.5" />
        <rect x="14" y="14" width="572" height="252" fill="none" stroke="#7e2014" strokeWidth="1" strokeDasharray="6 3" />

        {/* Elementos Decorativos / Selos de Esboço de Almanaque */}
        <text x="24" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#7e2014" letterSpacing="2">
          TABULA I • CHRONO-MACHINA (1985)
        </text>
        <text x="576" y="32" fontFamily="Cinzel, serif" fontSize="10" fill="#8c641c" textAnchor="end" letterSpacing="1">
          VELOCITAS: 88 M.P.H.
        </text>

        {/* Linhas de grade e referências técnicas (estilo Da Vinci) */}
        <line x1="30" y1="195" x2="570" y2="195" stroke="#a08d72" strokeWidth="0.8" strokeDasharray="4 4" />
        <line x1="160" y1="40" x2="160" y2="230" stroke="#c4b59b" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="430" y1="40" x2="430" y2="230" stroke="#c4b59b" strokeWidth="0.5" strokeDasharray="3 3" />

        {/* Rastro de Chamas / Eletricidade Temporal */}
        <path d="M 20 192 Q 70 188 120 195 Q 60 198 20 192 Z" fill="#b38634" opacity="0.35" />
        <path d="M 20 194 L 110 194" stroke="#8c2418" strokeWidth="1.5" strokeDasharray="2 4" />
        
        {/* ========================================================
            SILHUETA DO DELOREAN (LINHAS ANGULARES CLÁSSICAS DOS ANOS 80)
            ======================================================== */}
        <g stroke="#2b1c12" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round">
          
          {/* Carroceria Principal / Cunha */}
          <path d="
            M 115 178
            L 140 135
            L 190 130
            L 280 85
            L 395 85
            L 475 140
            L 525 155
            L 535 178
            L 520 180
            L 495 180
            A 32 32 0 0 0 435 180
            L 225 180
            A 32 32 0 0 0 165 180
            Z
          " fill="#e8dec5" stroke="#332216" strokeWidth="2.5" />

          {/* Janela e Porta Asa de Gaivota (Gull-Wing) */}
          <path d="
            M 285 92
            L 388 92
            L 455 138
            L 295 138
            Z
          " fill="#dfd1b3" stroke="#332216" strokeWidth="1.8" />

          {/* Divisão da Porta Asa de Gaivota */}
          <line x1="330" y1="92" x2="330" y2="175" stroke="#5c432d" strokeWidth="1.2" strokeDasharray="3 1" />
          <path d="M 330 92 L 310 50 L 380 50 L 390 92" stroke="#7e2014" strokeWidth="1.5" fill="none" opacity="0.7" />
          <text x="345" y="46" fontFamily="EB Garamond, serif" fontStyle="italic" fontSize="9" fill="#7e2014">
            Apertura alaris (asa de gaivota)
          </text>

          {/* Faróis Dianteiros e Para-choque */}
          <rect x="520" y="160" width="12" height="15" fill="#fdfaf0" stroke="#332216" strokeWidth="1.5" />
          <line x1="520" y1="167" x2="532" y2="167" stroke="#b38634" strokeWidth="1" />
          
          {/* Reator Traseiro / Tubos de Fluxo (Mr. Fusion / Ventoinhas) */}
          <rect x="135" y="115" width="28" height="22" fill="#d2c19f" stroke="#7e2014" strokeWidth="1.8" />
          <line x1="140" y1="115" x2="140" y2="137" stroke="#7e2014" strokeWidth="1" />
          <line x1="149" y1="115" x2="149" y2="137" stroke="#7e2014" strokeWidth="1" />
          <line x1="158" y1="115" x2="158" y2="137" stroke="#7e2014" strokeWidth="1" />
          
          {/* Tubulações e cabos elétricos de viagem no tempo pelas laterais */}
          <path d="M 163 130 C 230 125, 360 145, 510 158" stroke="#7e2014" strokeWidth="1.8" strokeDasharray="4 2" />

          {/* Roda Traseira */}
          <circle cx="195" cy="180" r="28" fill="#2d221a" stroke="#1f1610" strokeWidth="3" />
          <circle cx="195" cy="180" r="18" fill="#dfd3b9" stroke="#b38634" strokeWidth="2" />
          <circle cx="195" cy="180" r="8" fill="#7e2014" />
          {/* Raios da roda */}
          <line x1="195" y1="162" x2="195" y2="198" stroke="#7e2014" strokeWidth="1.2" />
          <line x1="177" y1="180" x2="213" y2="180" stroke="#7e2014" strokeWidth="1.2" />

          {/* Roda Dianteira */}
          <circle cx="465" cy="180" r="28" fill="#2d221a" stroke="#1f1610" strokeWidth="3" />
          <circle cx="465" cy="180" r="18" fill="#dfd3b9" stroke="#b38634" strokeWidth="2" />
          <circle cx="465" cy="180" r="8" fill="#7e2014" />
          <line x1="465" y1="162" x2="465" y2="198" stroke="#7e2014" strokeWidth="1.2" />
          <line x1="447" y1="180" x2="483" y2="180" stroke="#7e2014" strokeWidth="1.2" />

          {/* Sombra no solo */}
          <ellipse cx="330" cy="210" rx="210" ry="8" fill="#221811" opacity="0.25" />
        </g>

        {/* Anotações Manuscritas de Engenharia (estilo Da Vinci) */}
        <g fontFamily="EB Garamond, serif" fontSize="11" fill="#4a3b2c" fontStyle="italic">
          <text x="60" y="80">"Machina ad praeteritum revertendi..."</text>
          <path d="M 120 86 Q 135 98 145 115" stroke="#7e2014" strokeWidth="0.8" fill="none" />
          
          <text x="400" y="68">Paradoxum historicum: McFly (1985)</text>
          <path d="M 440 74 Q 450 82 455 95" stroke="#7e2014" strokeWidth="0.8" fill="none" />

          <text x="210" y="240">
            *Representação artística da ficção cinematográfica versus o rigor historiográfico.
          </text>
        </g>

        {/* Legenda de Placa Clássica */}
        <rect x="130" y="248" width="340" height="20" fill="#fdf8ea" stroke="#b38634" strokeWidth="1" />
        <text x="300" y="262" fontFamily="Cinzel, serif" fontSize="9.5" fill="#7e2014" textAnchor="middle" fontWeight="bold">
          FIG. I: O BÓLIDO TEMPORAL DE MCFLY & BROWN • FICÇÃO POPULAR
        </text>
      </svg>
    </div>
  )
}

