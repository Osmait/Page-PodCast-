import logo from '../assets/img/logo.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='contenidor footer-grid'>
            <div className='footer-widget'>
                <img className='logo' src={logo} alt=" imagen logo" />
            </div>

            <div className='footer-widget'>
                <h3>Soluciones</h3>
                <nav>
                    <a href="#">Soluciones</a>
                    <a href="#">Graficas</a>
                    <a href="#">Distribucion</a>
                </nav>
            </div>

            <div className='footer-widget'>
                <h3>Soporte</h3>
                <nav>
                    <a href="#">Documentacion</a>
                    <a href="#">Precios</a>
                    <a href="#">API</a>
                </nav>
            </div>

            <div className='footer-widget'>
                <h3>Podcast FM</h3>
                <nav>
                    <a href="#">Nosotros</a>
                    <a href="#">Blog</a>
                    <a href="#">=Clientes</a>
                </nav>
            </div>
            

        </div>
        <p className='copyright'>Podcast FM - Todos los derechos Reservados</p>
    </footer>
  )
}
