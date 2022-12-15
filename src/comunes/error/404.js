import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../../css/error404.css';

const Error = () =>{
    useEffect(() =>{
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="contenedor-error">
            <img className="img-error" src="/img/error404.svg" alt="Error 404"/>
            <h1 className="titulo-error">¡Ooops, parece que te has perdido!</h1>
            <p className="parrafo-error">La página buscas no fue encontrada</p>
            <Link className="enlace-error" to="/">Regresar a la página principal</Link>
        </div>
    );
}

export default Error;