import podcast_cover from '../assets/img/podcast_cover.png'
export const Beneficion = () => {
  return (
    <section className='beneficios seccion'>
        <div className='grid-beneficios contenedor'>
            <div className='contenido-beneficios'>
                <h2> Llega a miles y gana dinero</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, fuga tempore maxime accusantium eaque consequuntur sint dolorum nisi exercitationem quis dolore sequi laudantium odio dolor nostrum consectetur necessitatibus, magni nulla.</p>
            </div>

            <div className='imagen'>
                <img src={podcast_cover} alt=" imagen podcast" />
            </div>
        </div>
    </section>
  )
}
