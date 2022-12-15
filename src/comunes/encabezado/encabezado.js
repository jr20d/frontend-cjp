import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';

const LogoTitulo = (props) =>{
    if (props.logo){
        return (
            <div className="logo">
                <Link to="/"><img className="logo-img" src="/img/logo.png" alt="logo casa juvenil de paz"/></Link>
            </div>
        );
    }
    return(
        <div id="titulo" style={{color: props.fuente}}>
            <h2 className="animated fadeInUp">Casa Juvenil de Paz</h2>
        </div>
    );
}

const BotonMenu = () =>{
    const [activar, setActivar] = useState(false);
    const [pantalla, setPantalla] = useState(window.innerWidth);
    const [icono, setIcono] = useState("☰");
    const [clase, setClase] = useState("boton-menu");
    const [fuente, setFuente] = useState("rgb(55, 110, 182)");
    const [mostrarMenu, setMostrarMenu] = useState(false);

    useEffect(() =>{
        window.addEventListener("resize", () =>{
            setPantalla(window.innerWidth);
            if (window.innerWidth > 950){
                setActivar(true);
                setIcono("☰");
                setClase("boton-menu");
                setFuente("rgb(55, 110, 182)");
                setMostrarMenu(true);
            }
            if (window.innerWidth <= 950){
                setMostrarMenu(false);
                setIcono("☰");
                setClase("boton-menu");
                setFuente("rgb(55, 110, 182)");
            }
        });
    });

    const accion = () =>{
        setActivar(!activar);
        setIcono((icono === "☰") ? "X" : "☰");
        setClase((icono === "☰") ? "boton-menu rotate" : "boton-menu");
        setFuente((icono === "☰") ? "#fff" : "rgb(55, 110, 182)");
        setMostrarMenu((icono === "☰") ? true : false);
    }

    return(
        <React.Fragment key={0}>
            <LogoTitulo logo={false} fuente={fuente} />
            <div className={clase} onClick={() => accion()} style={{color: fuente}}>{icono}</div>
            <Menu mostrar={mostrarMenu} pantalla={pantalla} />
        </React.Fragment>
    );
}

//Funcion del evento Scroll
function scroll(){
    try{
        if (window.scrollY > 0){
            document.querySelector(".encabezado").style = "top: 0;";
            document.getElementById("titulo").style.top = "auto";
        }
        else{
            document.querySelector(".encabezado").style = "top: auto;";
            document.getElementById("titulo").style.top = "7%";
        }
    }
    catch{}
}

const Encabezado = () =>{
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            scroll();
        });

        return () =>{
            window.removeEventListener("scroll", () =>{
                scroll();
            });
        }
    });

    return(
        <header className="encabezado">
            <LogoTitulo logo={true} />
            <BotonMenu />
        </header>
    );
}

export default Encabezado;