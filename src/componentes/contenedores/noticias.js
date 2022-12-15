import React, { useEffect, useState } from 'react';
import ContenedorNoticias from '../noticias/noticias';
import '../../css/noticias/noticias.css';
import URL from '../../API/url';

const TituloBannerNoticias = (props) =>{
    return(
        <article className="encabezado-banner-noticias">
            <h1 className="titulo-banner-noticas animated fadeInUp">{props.titulo}</h1>
        </article>
    );
}

const BannerNoticias = (props) =>{
    return(
        <div className="img-banner-noticias" style={{backgroundImage: `url(${props.imagen})`}}>
        </div>
    );
}

const EncabezadoNoticias = () =>{
    const [banner, setBanner] = useState(null);

    const data = async () => {
        fetch(URL + "/secciones/2", {
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
                    setBanner(respuesta);
                });
            }
            else{
                setBanner([]);
            }
        })
        .catch(e =>{
            setBanner([]);
        });
    }

    useEffect(() =>{
        data();
    }, []);

    if (banner === null || banner.length === 0){
        return null;
    }
    return(
        <section className="banner-noticias">
            <BannerNoticias imagen={banner[0].url}/>
            <TituloBannerNoticias titulo={banner[0].titulo}/>
        </section>
    );
}

const SeccionNoticias = () =>{
    return(
        <React.Fragment>
            <EncabezadoNoticias/>
            <ContenedorNoticias/>
        </React.Fragment>
    );
}

export default SeccionNoticias;