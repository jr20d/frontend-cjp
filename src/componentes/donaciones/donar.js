import React, { useEffect, useState } from 'react';

const IntroDonacion = () =>{
    const [clase, setClase] = useState(null);
    const [ver, setVer] = useState(false);

    const evento = () =>{
        if (document.getElementById("intro-donaciones").getBoundingClientRect().y < 300){
            setClase("animated fadeInLeft");
            setVer(true);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", evento);

        return() =>{
            window.removeEventListener("scroll", evento);
        }
    });

    return(
        <article id="intro-donaciones" className={"intro-donaciones " + clase} style={{visibility: (ver) ? "visible" : "hidden"}}>
            <div className="icono-intro-donaciones">
                <i class="fas fa-donate"></i>
            </div>
            <div className="contenido-intro-donaciones">
                <p>Realiza tu donación a nuestro número de cuenta del <strong>BAC Credomatic</strong><small>&#174;</small> a nombre de <strong>Casa Juvenil de Paz</strong>, con esto ayudas a la continuidad y mejora de los programas realizados en favor de los niños, niñas y jovenes.</p>
            </div>
        </article>
    );
}

const Donar = () =>{
    const [clase, setClase] = useState(null);
    const [ver, setVer] = useState(false);

    const evento = () =>{
        if (document.getElementById("donacion").getBoundingClientRect().y < 300){
            setClase("animated fadeInRight");
            setVer(true);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", evento);

        return() =>{
            window.removeEventListener("scroll", evento);
        }
    });

    return(
        <article id="donacion" className={"donacion " + clase} style={{visibility: (ver)? "visible" : "hidden"}}>
            <div className="donacion-encabezado">
                <img src="/img/logo-bac-credomatic.png" alt="logo bac credomatic"/>
            </div>
            <div className="donacion-cuenta">
                <span>N° Cuenta: 201153756</span>
            </div>
        </article>
    );
}

const DonarContenedor = () =>{
    return(
        <section className="seccion-donacion">
            <IntroDonacion/>
            <Donar/>
        </section>
    );
}

export default DonarContenedor;