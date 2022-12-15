import React, { useEffect, useState } from 'react';
import Telefonos from './telefonos';
import Redes from './redes';
import URL from '../../API/url';

const Contactos = () =>{
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    const data = async () => {
        fetch(URL + "/telefonos", {
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
                setError(false);
                response.json()
                .then(respuesta =>{
                    setResultado(respuesta);
                });
            }
            else{
                setError(true);
            }
        })
        .catch(e =>{
            setError(true);
        });
    }

    useEffect(() =>{
        data();
    }, []);
    if (error){
        return null;
    }
    const enlacesRedes = [
        {idEnlace: 1, enlace: "https://es-la.facebook.com/CASAJUVENILDPAZ/", clase: "fab fa-facebook-square"},
        {idEnlace: 2, enlace: "mailto:juvenildepazes@gmail.com", clase: "fas fa-envelope"}
    ];

    return (
        <div className="contactos">
            <Telefonos numeros={resultado}/>
            <Redes enlaces={enlacesRedes}/>
        </div>
    );
};

export default Contactos;