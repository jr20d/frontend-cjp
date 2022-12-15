import React from 'react';
import DonarContenedor from '../donaciones/donar';
import '../../css/donaciones/donacion.css';

const Donacion = () =>{
    return(
        <main id="contenedor-donaciones" className="donaciones">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{zIndex: 0, height: "100%", width: "100%", position: "absolute", top: "0"}}><path className="donacion-fondo" d="M-37.02,114.76 C172.34,183.84 313.99,114.76 536.91,154.24 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none"}}></path></svg>
            <h1 className="titulo-donaciones animated fadeInUp">¿COMO DONAR?</h1>
            <DonarContenedor/>
        </main>
    );
}

export default Donacion;