import React from "react";

export const Planes = () => {
  return (
    <section className="planes seccion">
      <div className="contenedor">
        <h2>Planes</h2>
        <p className="descripcion">Inicia gratis, crece tu plan cuando sea necesario</p>

        <div className="nuestros-planes">
          <div className="plan inicio">
            <h3>Inicio</h3>
            <p className="precio">$2.99 Mes</p>

            <ul className="listado">
              <li>30 Episodios</li>
              <li>Estadisticas</li>
              <li>App para grabar</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>
          {/* plan fin  */}

          <div className="plan negocio">
            <h3>Negocio</h3>
            <p className="precio">$6.99 Mes</p>

            <ul className="listado">
              <li> Episodios Ilimitados</li>
              <li> Todas las plataformas</li>
              <li>Estadisticas</li>
              <li>App para grabar</li>
              <li>podcast Pagados</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>
          {/* plan fin  */}

          <div className="plan pro ">
            <h3>PRO</h3>
            <p className="precio">$4.99 Mes</p>

            <ul className="listado">
              <li> 50 Episodios </li>
              <li> Todas las plataformas</li>
              <li>Estadisticas</li>
              <li>App para grabar</li>
            </ul>
            <a href="#" className="boton-plan">
              Inscribirme
            </a>
          </div>
          {/* plan fin  */}
        </div>
      </div>
    </section>
  );
};
