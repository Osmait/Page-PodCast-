import imagen_podcast from '../assets/img/imagen_podcast.svg'
export const CreaTuPodcast = () => {
  return (
    <section className='contenedor seccion'>
        <div className='crea-grid'>
            <div className='imagen'>
                <img src={imagen_podcast} alt="imagen podcast" />
            </div>
            <div className="contenido">
                <h2>Crea tu Podcast</h2>
                <p>Nosotros lo distribuimos a las plataformas mas importantes como Google Podcast, Spotify, Apple Podcast y YouTube</p>
            </div>
        </div>
    </section>
  )
}
