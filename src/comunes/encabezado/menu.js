import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Enlace = (props) =>{
    const [pantalla, setPantalla] = useState(window.innerWidth);
    const [verItem, setVerItem] = useState(false);

    const evento = () =>{
        setPantalla(window.innerWidth);
        setVerItem(false);
    }

    useEffect(() =>{
        window.addEventListener("resize", evento);

        return() =>{
            window.removeEventListener("resize", evento);
        }
    });

    //ajustando el tiempo en milesimas de segundos para mostrar cada opción del menú
    setTimeout(() => {
        setVerItem(true);
    }, props.relay);

    const ruta = useLocation();

    let nombreId = (ruta.pathname === props.ruta) ? "activo" : "";

    const reinicarScroll = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    if (pantalla <= 950 && !props.mostrar){
        return null;
    }

    return(
        <li>
            <NavLink onClick={() => reinicarScroll()} id={nombreId} style={{visibility: (verItem === true) ? "visible": false}} exact to={props.ruta} className={(nombreId === "activo") ? (verItem === true) ? "animated bounceInDown" : "" : (verItem === true) ? "inactivo animated bounceInDown": ""}>
                {props.titulo}
            </NavLink>
        </li>
    );
}

const Enlaces = (props) =>{
    const [numPagina, setNumPagina] = useState("/noticias/1");

    let location = useLocation();

    //Asignar el valor de la ruta de noticias con el numero de pagina cuando cambie su estado
    //y mantener el componente NavLink seleccionado
    useEffect(() =>{
        if (location.pathname.substr(0, 10) === "/noticias/"){
            setNumPagina(location.pathname);
        }
    }, [location]);

    return(
        <ul className="menu-items">
            <Enlace ruta="/" titulo="PRINCIPAL" relay="550" mostrar={props.mostrar}/>
            <Enlace ruta={numPagina} titulo="NOTICIAS" relay="750" mostrar={props.mostrar}/>
            <Enlace ruta="/donar" titulo="DONAR" relay="950" mostrar={props.mostrar}/>
        </ul>
    );
}

const Menu = (props) =>{
    let ver = ((props.mostrar === true && props.pantalla < 950) || (props.pantalla > 950)) ? true : false;

    if (ver === false){
        return null;
    }
    return(
        <nav className="menu" style={{visibility: (!ver)? "hidden" : "visible"}}>
            <Enlaces mostrar={ver}/>
        </nav>
    );
}

export default Menu;