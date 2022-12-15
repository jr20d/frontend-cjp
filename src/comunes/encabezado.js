import React, { useEffect, useState } from 'react';

const Encabezado = (props) =>{
    const [clase, setClase] = useState(null);
    const [ver, setVer] = useState(false);

    const efecto = () =>{
        if (document.getElementById(props.idContenedor).getBoundingClientRect().y < 500){
            setClase("animated fadeInUp");
            setVer(true);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", efecto);

        return() =>{
            window.removeEventListener("scroll", efecto);
        }
    });

    const color = props.color;
    const titulo = props.titulo;
    return(
        <article id={props.idContenedor} className={"encabezado-info " + clase} style={{visibility: ver? "visible" : "hidden"}}>
            <h2 style={{color: color}}>{titulo}</h2>
            <hr style={{color: color, border: `2px solid ${color}`, width: "250px", backgroundColor: color, margin: "0 auto", marginTop: "10px"}}/>
        </article>
    );
}

export default Encabezado;