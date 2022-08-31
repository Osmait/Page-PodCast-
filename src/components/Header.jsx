import logo from '../assets/img/logo.svg'

export const Header = () => {
  return (
   <header className='site-header'>
    <div className='contenedor header-grid'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='contenido-header' >
            <h1>Tu Plataforma para publicar tus podcast</h1>
            <a href="#" className='boton-primario'>Crear Cuenta</a>
        </div>
    </div>

   </header>
  )
}
