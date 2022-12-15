import React, { useEffect, useState } from 'react';
import Encabezado from '../../comunes/encabezado';

const contenido = [
    "El trabajo de la Asociación Casa Juvenil de Paz se ha desarrollado desde hace más de una década en dos de los principales Centros Escolares del municipio de Soyapango: Centro Escolar Antonio José Cañas y Centro Escolar Profesor Daniel Cordón Salguero. Asimismo, en las comunidades precarias, Comunidad altos de Soyapango, castillo 1 y 2 y sus alrededores, La familia es considerada como el primer medio de socialización, siendo ambos padres los principales responsables de enseñar a sus hijos valores y normas sociales tales como: amor, paz, honestidad, responsabilidad, justicia, tolerancia, respeto, igualdad, entre otros que deberían no sólo imponerse, sino más bien modelarse.",
    "La realidad a la que se enfrentan los niños, niñas, jóvenes y adolescentes es muy distinta; conviven en familias desintegradas o con problemas de violencia intrafamiliar, lo cual afecta muchas áreas de su vida, entre éstas: autoestima, identidad, reconocimiento, manejo de emociones, conocimiento y práctica de valores, aprecio por la vida misma y por la vida del prójimo. El trabajo se ha realizado bajo la coordinación de Elsa de Jesús Ayala de Hernández, mujer de fe que ha convertido su humilde vivienda en la Casa juvenil de Paz y ha movido los corazones de cientos de niños, niñas, adolescentes, jóvenes y encargados de familia, y con un equipo de voluntarios que se suman a los esfuerzos.",
    "Actualmente se encuentra legalizada por Ministerio de Gobernación publicada en el diario oficial el 28 de febrero del año 2017 e inscrita en CONNA 20 de noviembre de 2018 como Entidad de atención de niñez y adolescencia, cuentan aproximadamente con 15 años de experiencia en trabajo de niñez y adolescencia. Durante los años de trabajo con niños, niñas, adolescentes y jóvenes se ha visualizado una constante: “la necesidad de sentirse queridos y apreciados”. Por tal razón, como Asociación creemos fielmente que el trabajo que realizamos con este sector tan importante de la población salvadoreña, es la semilla que sembramos hoy, y de la cual cosecharemos hombres y mujeres de bien, que reconocen la existencia de un Creador, que practican valores morales, que aman a su prójimo y a su nación.",
    "Amamos a nuestro El Salvador y deseamos con todo nuestro corazón contribuir a la construcción de un mejor futuro fundando las bases sólidas en las nuevas generaciones."
];

const ContenidoHistoria = (props) =>{
    const articulos = contenido.map((parrafo, indice) =>     
        <article className="cont-historia" style={{marginLeft: `${indice === 0 ? props.mover : 0}%`}}>
            <p>{parrafo}</p>
        </article>
    );

    return(
        <div className="banner-historia">
            {articulos}
        </div>
    );
}

const SeccionHistoria = () =>{
    const [claseSig, setClaseSig] = useState("controles-historia historia-activado");
    const [claseAnt, setClaseAnt] = useState("controles-historia historia-desactivado");
    const [contador, setContador] = useState(0);
    //Estado para manejar el evento touch en dispositivos moviles
    const [inicial, setInicial] = useState(0);

    let touchInicio = (event) =>{
        setInicial(event.touches[0].clientX);
    }

    let touchFinal = (event) =>{
        if (event.changedTouches[0].clientX > inicial + 100){
            anterior();
        }
        if (event.changedTouches[0].clientX < inicial - 100){
            siguiente();
        }
    }

    useEffect(() =>{
        document.querySelector(".banner-historia").addEventListener("touchstart", touchInicio);
        
        document.querySelector(".banner-historia").addEventListener("touchend", touchFinal);

        //Limipeza de los eventos cuando el componente sea desmontado
        return() =>{
            document.querySelector(".banner-historia").removeEventListener("touchstart", touchInicio);
            document.querySelector(".banner-historia").removeEventListener("touchend", touchFinal);
        }
    });

    const siguiente = () =>{
        if (contador > ((contenido.length - 1) * -100)){
            setContador(contador - 100);
            setClaseAnt("controles-historia historia-activado");
        }
        if (contador - 100 === ((contenido.length - 1) * -100)){
            setClaseSig("controles-historia historia-desactivado");
        }
    }

    const anterior = () =>{
        if (contador < 0){
            setContador(contador + 100);
            setClaseSig("controles-historia historia-activado");
        }
        if((contador + 100) === 0){
            setContador(0);
            setClaseAnt("controles-historia historia-desactivado");
        }
    }

    return(
        <section className="historia">
            <Encabezado titulo="HISTORIA" color="#fff" idContenedor="titulo-historia" />
            <ContenidoHistoria mover={contador}/>
            <div onClick={() => anterior()} id="anterior-historia" className={claseAnt}><i className="fas fa-angle-left"></i></div>
            <div onClick={() => siguiente()} id="proxima-historia" className={claseSig}><i className="fas fa-angle-right"></i></div>
        </section>
    );
}

const ImagenFondo = () =>{
    const imagen = "/img/img-svg2.svg";
    return(
        <div className="svg-2" style={{backgroundImage: `url(${imagen})`}}></div>
    );
}

const Historia = () =>{
    return(
        <div className="contenedor-historia">
            <ImagenFondo/>
            <SeccionHistoria/>
        </div>
    );
}

export default Historia;