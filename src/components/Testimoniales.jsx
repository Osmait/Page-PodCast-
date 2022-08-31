import appimg from '../assets/img/app.jpg'

export const Testimoniales = () => {
  return (
    <section className='contenedor seccion testimoniales'>
        <div className='imagen'>
            <img src={appimg} alt="app img" />
        </div>
        <div className='contenido'>
            <h2> Testimoniales</h2>

            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, neque nulla consequatur vero quae suscipit ratione impedit provident non excepturi veritatis saepe itaque vitae amet ut dolores aut quas fuga. lore</p>
            </div>

            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, neque nulla consequatur vero quae suscipit ratione impedit provident non excepturi veritatis saepe itaque vitae amet ut dolores aut quas fuga. lore</p>
            </div>

            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, neque nulla consequatur vero quae suscipit ratione impedit provident non excepturi veritatis saepe itaque vitae amet ut dolores aut quas fuga. lore</p>
            </div>
        </div>
    </section>
  )
}
