import React, { useEffect } from 'react';

const Contenido = (props) =>{
    useEffect(() =>{
        document.querySelector(".texto-noticia").innerHTML = props.noticia.contenido;
    });

    return(
        <div className="texto-noticia"></div>
    );
}

const EncabezadoNoticia = (props) =>{
    let fecha = new Date(props.noticia.fecha.replace(".000+0000", ""));
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return(
        <div className="header-noticia">
            <div className="img-noticia">
                <img src={props.noticia.imagen} alt="casa juvenil de paz noticias"/>
            </div>
            <div className="titulo-header-noticia">
                <h1>{props.noticia.titulo}</h1>
            </div>
            <p style={{width: "100%", display: "block", textAlign: "justify"}}>Publicado: {fecha.getDate()} de {meses[fecha.getMonth()]} del {fecha.getFullYear()}</p>
        </div>
    );
}

const Noticia = (props) =>{
    return(
        <div className="contenido-noticia">
            <EncabezadoNoticia noticia={props.noticia}/>
            <Contenido noticia={props.noticia}/>
        </div>
    );
}

export default Noticia;