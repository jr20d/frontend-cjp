import React, { useEffect, useState } from 'react';
import Encabezado from '../../comunes/encabezado';
import URL from '../../API/url';

const Institucion = (props) =>{
    return(
        <article className="institucion">
                {
                    (props.institucion.logo && props.institucion.logo !== "") &&
                    <img src={props.institucion.logo} alt={"logo " + props.institucion.nombre}  style={{maxWidth: "250px"}}/>
                }
                {
                    (props.institucion.mostrar) &&
                    <h1>{props.institucion.nombre}</h1>
                }
        </article>
    );
}

const ContenedorInstituciones = () =>{
    const[instituciones, setInstituciones] = useState(null);

    const data = async () => {
        fetch(URL + "/instituciones", {
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
                    setInstituciones(respuesta);
                });
            }
            else{
                setInstituciones([]);
            }
        })
        .catch(e =>{
            setInstituciones([]);
        });
    }

    useEffect(() =>{
        data();
    }, []);

    if (instituciones === null){
        return null;
    }

    if (instituciones.length === 0){
        return(
            <div className="contenedor-institucion">
                <h1 style={{margin: "0 auto", color: "#fff"}}>No se encontraron resultados</h1>
            </div>
        );
    }

    const listadoInstituciones = instituciones.map((institucion) =>
        <Institucion institucion={institucion}/>
    );

    return(
        <div className="contenedor-institucion">
            {
                listadoInstituciones
            }
        </div>
    );
}

const Instituciones = () =>{
    return(
        <section className="instituciones">
            <Encabezado titulo="INSTITUCIONES QUE COLABORAN CON NOSOTROS" color="#fff" idContenedor="titulo-instituiones" />
            <ContenedorInstituciones/>
        </section>
    );
}

export default Instituciones;