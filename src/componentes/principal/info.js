import React, { useEffect, useState } from 'react';
import Encabezado from '../../comunes/encabezado';
import Contenedor from './contInfo';

const ContenidoInfo = (props) =>{
    const [clase, setClase] = useState(null);
    const [ver, setVer] = useState(false);

    const evento = () =>{
        if (document.getElementById(props.idContenedor).getBoundingClientRect().y < 500){
            setClase("animated fadeInUp");
            setVer(true);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", evento);

        return() =>{
            window.removeEventListener("scroll", evento);
        }
    });

    return(
        <article id={props.idContenedor} className={"contenido-info " + clase} style={{visibility: ver? "visible" : "hidden"}}>
            <h3>¿QUE HACEMOS?</h3>
            <p>Promover una educación con valores espirituales, morales y cívicos en niños, niñas, adolescentes  y jóvenes con el propósito de minimizar el impacto negativo que ejercen la falta de valores y el clima de violencia que les rodea; guiándoles hacia el descubrimiento de su verdadera identidad y su potencial.</p>
        </article>
    );
}

const Info = () =>{
    return(
        <section className="info">
            <Encabezado titulo="ASOCIACIÓN CASA JUVENIL DE PAZ" color="#fff" idContenedor="titulo-informacion" />
            <ContenidoInfo idContenedor="cont-informacion"/>
            <Contenedor/>
        </section>
    );
}

const InfoContenedor = () =>{
    const imagen = "/img/wave.svg";
    return(
        <section className="info-contenedor" style={{backgroundImage: `url(${imagen})`}}>
            <Info/>
        </section>
    );
}

export default InfoContenedor;