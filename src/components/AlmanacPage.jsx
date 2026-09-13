export default function AlmanacPage({ pageNumber, topic, edition, children, className = '' }) {
  return (
    <article className={`almanac-page ${className}`}>
      {/* Moldura ornamental dupla clássica */}
      <div className="page-ornate-border"></div>
      <div className="corner-accent corner-tl"></div>
      <div className="corner-accent corner-tr"></div>
      <div className="corner-accent corner-bl"></div>
      <div className="corner-accent corner-br"></div>

      {/* Cabeçalho da página de almanaque */}
      <header className="page-header">
        <span className="page-header-topic">{topic || 'Almanaque de História'}</span>
        <span className="page-header-edition">{edition || 'Edição Corrente'}</span>
      </header>

      {/* Corpo da página */}
      <div className="page-body">
        {children}
      </div>

      {/* Rodapé da página */}
      <footer className="page-footer">
        <span>História da Educação</span>
        <span className="page-number">— {pageNumber} —</span>
        <span>Anno Domini MMXXVI</span>
      </footer>
    </article>
  )
}
