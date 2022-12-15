import React, { useEffect, useState } from 'react';
import Encabezado from '../../comunes/encabezado';

const Programa = (props) =>{
    const [verTitulo, setVerTitulo] = useState(false);
    const [verContenido, setVerContenido] = useState(false);
    const [verImagen, setVerImagen] = useState(false);

    const evento = () =>{
        if (document.getElementById(props.idTitulo).getBoundingClientRect().y < 500){
            setVerTitulo(true);
        }
        if (document.getElementById(props.idContenido).getBoundingClientRect().y < 500){
            setVerContenido(true);
        }
        if (document.getElementById(props.idImagen).getBoundingClientRect().y < 500){
            setVerImagen(true);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", evento);

        return() =>{
            window.removeEventListener("scroll", evento);
        }
    });

    return(
        <article className="programa">
            <div id={props.idTitulo} className={"encabezado-programa " + props.clase + ((verTitulo)? props.efecto : null)} style={{visibility: verTitulo? "visible" : "hidden"}}>
                <h2>{props.datos.titulo}</h2>
            </div>
            <div id={props.idContenido} className={"contenido-programa " + props.clase + ((verContenido)? props.efecto : null)} style={{visibility: verContenido? "visible" : "hidden"}}>
                <p>{props.datos.contenido}</p>
            <div id={props.idImagen} className={"fondo-programa " + ((verImagen)? props.efectoImg : null)} style={{backgroundImage: `url(${props.datos.imagen})`, visibility: verImagen? "visible" : "hidden"}}></div>
            </div>
        </article>
    );
}

const Contenedor = () =>{
    const programas = [
        {id: 1, titulo: "Programa Generando Valores", contenido: "Es el programa de voluntariado para básica y bachillerato que tiene como objetivo impulsar mediante charlas, talleres, actividades vivenciales, etc. el liderazgo, el compromiso y la participación de jóvenes en acciones de solidaridad, acompañamiento y de prevención en las siguientes áreas: VIH-SIDA, enfermedades de transmisión sexual, liderazgo, embarazos no planificados, violencia juvenil, resolución de conflictos, habilidades para la vida. La población objeto son jóvenes entre los 15 años de edad a los 20 años de edad estudiantes de bachillerato.", imagen: "/img/programa1.svg"},
        {id: 2, titulo: "Programa de Atención Preventiva y de Apadrinamiento", contenido: "Es el programa que se ejecuta con niños en situación de alto riesgo de las diferentes comunidades de nuestro país, así mismo el programa prevé la participación de cualquier otra organización, fundación, empresa, universidad o iglesia que quiera sumarse al proyecto en pro de la niñez y la juventud. Con este programa, se desarrollan actividades consistentes en: proporcionar a los y las mencionados niños y niñas/ y adolescentes/ alimentación, vestimenta, juguetes, útiles escolares, orientación espiritual, actividades lúcidas y recreativas también se realizan actividades como pintura dibujo, etc. La población objeto del programa son las Niñas y los niños y adolescentes entre los 7 años de edad hasta los 20 años de edad en situación de vulnerabilidad o alto riesgo.", imagen: "/img/programa2.svg"},
        {id: 3, titulo: "Programa de Atención en Crisis y Psicosocial", contenido: "Implica la promoción y diseño de un protocolo especializado en asistencia psicológica básico para la recuperación y estabilización emocional después de un trauma provocado por la violencia, delincuencia o por eventos naturales como inundaciones, terremotos, etc. La población objeto del programa son los niños, niñas, adolescentes y jóvenes comprendidos entre los 5 y los 29 años de edad.", imagen: "/img/programa3.svg"},
        {id: 4, titulo: "Programa de Asistencia y Orientación Jurídica", contenido: "Consiste en atender desde el ámbito jurídico a los niños, niñas, y personas jóvenes, que consideren vulnerados sus derechos y garantías fundamentales, o cualquier otra situación en la que se encuentren y requieran de auxilio técnico jurídico. La población objeto del programa son los niños, niñas, adolescentes y jóvenes comprendidos entre los 12 y los 29 años de edad.", imagen: "/img/programa4.svg"},
        {id: 5, titulo: "Programa Jóvenes SOS", contenido: "El cual es un espacio de participación y opinión de temas relevantes para la juventud.", imagen: "/img/programa5.svg"}
    ];

    const programasListado = programas.map((p, i) => {
        if ((i % 2) === 0){
            return <Programa idTitulo={"tituloProg" + i} idImagen={"imagenProg" + i} idContenido={"contProg" + i} datos={p} clase="derecha" efecto=" animated fadeInRight" efectoImg="animated fadeInLeft"/>
        }
        else{
            return <Programa idTitulo={"tituloProg" + i} idImagen={"imagenProg" + i} idContenido={"contProg" + i} datos={p} clase="izquierda" efecto=" animated fadeInLeft" efectoImg="animated fadeInRight"/>
        }
    });

    return(
        <div className="cont-programas">
            {programasListado}
        </div>
    );
}

const Programas = () =>{
    return(
        <section className="programas">
            <Encabezado titulo="NUESTROS PROGRAMAS" color="rgb(55, 110, 182)" idContenedor="titulo-programas" />
            <Contenedor/>
        </section>
    );
}

export default Programas;