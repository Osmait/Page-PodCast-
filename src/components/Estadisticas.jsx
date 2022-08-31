import grafica from '../assets/img/grafica.svg'
export const Estadisticas = () => {
  return (
   <section className='estadisticas seccion contenedor'>
    <h2>Estadisticas Detalladas</h2>
    <p>Nosotros lo distribuimos a las plataformas mas importantes como Google Podcast, Spotify, Apple Podcast y YouTube</p>
    <img src={grafica} alt=" imagen grafica" />
   </section>
  )
}
