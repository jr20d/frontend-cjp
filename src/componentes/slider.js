import React, { useEffect, useState } from 'react';
import '../css/slider.css';
import URL from '../API/url';

const ocultar = () =>{
    document.querySelector(".banner-texto").style.visibility = "hidden";
    document.querySelector(".banner-texto").style.opacity = 0;
    if (window.innerWidth > 915){
        document.querySelector(".banner-texto").style.left = "0%";
    }
    else{
        document.querySelector(".banner-texto").style.bottom = "0%";
    }
}

const mostrar = () =>{
    document.querySelector(".banner-texto").style.visibility = "visible";
    document.querySelector(".banner-texto").style.opacity = 1;
    if (window.innerWidth > 915){
        document.querySelector(".banner-texto").style.left = "5%";
    }
    else{
        document.querySelector(".banner-texto").style.bottom = "10%";
    }
}

const BannerTitulo = (props) =>{
    const contenido = props.contenido;
    useEffect(() => {
        ocultar();
        let animar = setTimeout(() =>{
            mostrar();
        }, 700);

        return () =>{
            clearTimeout(animar);
        }
    });

    return(
        <div className="banner-texto" style={{opacity: 0, left: "0%"}}>
            <span>{contenido}</span>
        </div>
    );
}

const Banner = (props) =>{
    const banner = props.slide;

    return(
        <React.Fragment key={banner.idSeccion}>
            <div className="banner" style={{backgroundImage: `url(${banner.url})`}}>
            </div>
            <BannerTitulo contenido={banner.titulo}/>
        </React.Fragment>
    );
}

const BannerContenedor = () =>{
    const [contador, setContador] = useState(0);
    const [resultado, setResultado] = useState(null);

    const data = () => {
        fetch(URL + "/secciones/1", {
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
                    setResultado(respuesta);
                });
            }
        })
        .catch(e =>{
            console.log(e);
        });
    }

    useEffect(() =>{
        let tiempo;
        if (resultado !== null){
            tiempo = setInterval(()=>{
                cambiarSlide(true);
            }, 14000);
        }

        if (resultado === null){
            data();
        }
        
        return () =>{
            clearInterval(tiempo);
        }
    });

    if (resultado === null){
        return null;
    }

    const cambiarSlide = siguiente =>{
        if (siguiente){
            setContador((contador < resultado.length - 1) ? (contador + 1) : 0);
        }
        else{
            setContador((contador > 0) ? (contador - 1) : (resultado.length - 1));
        }
    }
    return(
        <section className="contenedor-banner">
            <Banner slide={resultado[contador]}/>
            {
                resultado.length > 0?
                <React.Fragment key={0}>
                    <div id="atras" onClick={() => cambiarSlide(false)} className="controles"><i className="fas fa-angle-left"></i></div>
                    <div id="siguiente" onClick={() =>cambiarSlide(true)} className="controles"><i className="fas fa-angle-right"></i></div>
                </React.Fragment>
                :
                null
            }
        </section>
    );
}

export default BannerContenedor;