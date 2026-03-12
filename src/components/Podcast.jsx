import podcasts from '../data/podcasts'

export default function Podcast() {
  return (
    <section id="podcast" className="podcast">
      <h2>Nosso Podcast</h2>
      <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.2rem' }}>
        Ouça histórias inspiradoras e conversas sobre carreira, tecnologia e vida profissional
        com desenvolvedores experientes que estão fazendo a diferença no mercado.
      </p>

      <div className="podcast-grid">
        {podcasts.map((video) => (
          <div className="podcast-video" key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="video-thumb"
              />
              <div className="video-overlay">
                <i className="fab fa-youtube"></i>
              </div>
            </a>
          </div>
        ))}
      </div>

      <a
        href="https://www.youtube.com/playlist?list=PLndJnupfcnxE4dErxRpXICLXQ2Xz5UduD"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        style={{ marginTop: '2rem', background: 'var(--primary-color)', color: 'white' }}
      >
        <i className="fab fa-youtube"></i> Ver Todos os Episódios
      </a>
    </section>
  )
}
