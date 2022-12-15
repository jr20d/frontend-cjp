import React, { useEffect, useState } from 'react';
import Encabezado from '../../comunes/encabezado';
import '../../css/noticias.css';
import {Link} from 'react-router-dom';
import URL from '../../API/url';

const ContenidoNoticia = (props) =>{
    let fecha = new Date(props.noticia.fecha.replace(".000+0000", ""));
    let mes = fecha.getMonth() + 1;
    let formatoFecha = fecha.getDate() + "/" + mes + "/" + fecha.getFullYear();
    return(
        <article className="noticia">
            <div className="encabezado-noticia">
                <img src={props.noticia.imagen} alt={"Imagen noticia " + props.noticia.titulo} className="imagen-noticia"/>
            </div>
            <p className="fecha">Publicado: {formatoFecha}</p>
            <div className="cuerpo-noticia">
                <h3 className="titulo-noticia">{props.noticia.titulo}</h3>
            </div>
        </article>
    );
}

const Noticia = (props) =>{
    if (!props.noticia){
        return null;
    }
    return(
        <Link to={"/noticia/" + props.noticia.idNoticia}>
            <ContenidoNoticia noticia={props.noticia}/>
        </Link>
    );
}

const SeccionNoticias = () =>{
    const [noticias, setNoticias] = useState(null);
    const [precarga, setPrecarga] = useState(true);

    const data = async () => {
        fetch(URL + "/noticias/ultimas", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
        .then(response=>{
            if (response.ok && response.status === 200){
                response.json()
                .then(respuesta =>{
                    setNoticias(respuesta);
                    setPrecarga(false);
                });
            }
            else{
                setNoticias([]);
                setPrecarga(false);
            }
        })
        .catch(e =>{
            setNoticias([]);
            setPrecarga(false);
        });
    }

    useEffect(() =>{
        data();
    }, []);

    if (precarga){
        return(
            <div className="seccion-noticias" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <img alt="preload" src="/img/preload.gif" width="50"/>
            </div>
        );
    }
    if (noticias.length === 0 || !noticias){
        return(
            <div className="seccion-noticias">
                <h1 style={{margin: "0 auto"}}>No se encontraron noticias</h1>
            </div>
        );
    }
    return(
        <div className="seccion-noticias">
            <Noticia noticia={noticias[0]}/>
            <Noticia noticia={noticias[1]}/>
            <Noticia noticia={noticias[2]}/>
        </div>
    );
}

const UltimasNoticias = () =>{
    return(
        <section className="noticias">
            <div className="contenedor-noticias">
                <Encabezado titulo="ULTIMAS NOTICIAS" color="rgb(55, 110, 182)" idContenedor="titulo-ultimas-noticias" />
                <SeccionNoticias/>
            </div>
        </section>
    );
}

export {UltimasNoticias, Noticia};