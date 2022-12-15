import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Noticia from '../noticia/noticia';
import '../../css/noticia/estiloNoticia.css';
import URL from '../../API/url';

const ContenedorNoticia = () =>{
    const {id} = useParams();
    const [noticia, setNoticia] = useState(null);
    const [precarga, setPrecarga] = useState(true);

    const data = async () => {
        fetch(URL + "/noticias/" + id, {
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
                    setNoticia(respuesta);
                    setPrecarga(false);
                });
            }
            else{
                setNoticia([]);
                setPrecarga(false);
            }
        })
        .catch(e =>{
            setNoticia([]);
            setPrecarga(false);
        });
    }

    useEffect(() =>{
        if (noticia === null){
            data();
        }
    });

    if (precarga){
        return (
            <main className="contenedor-noticia" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <img alt="preload" src="/img/preload.gif" width="50" style={{margin: "0 auto"}}/>
            </main>
        );
    }
    if (noticia === null || noticia.length === 0){
        return (
            <main className="contenedor-noticia" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h1>La noticia que buscas no fué encontrada</h1>
            </main>
        );
    }
    return (
        <main className="contenedor-noticia">
            <Noticia noticia={noticia}/>
        </main>
    );
}

export default ContenedorNoticia;