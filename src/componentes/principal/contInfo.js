import React, { useEffect, useState } from 'react';

const Icono = (props) =>{
    return(
        <div className="cont-icono">
            <i className={props.icono}></i>
        </div>
    );
}

const Contenido = (props) =>{
    if (props.valores === true){
        const listaValores = props.info.contenido.map((valor) => 
            <li>{valor}</li>    
        );
        return(
            <React.Fragment key={props.info.id}>
                <Icono icono={props.info.icono}/>
                <h3>{props.info.titulo}</h3>
                <ul>
                    {listaValores}
                </ul>
            </React.Fragment>
        );
    }
    return(
        <React.Fragment key={props.info.id}>
            <Icono icono={props.info.icono}/>
            <h3>{props.info.titulo}</h3>
            <p>{props.info.contenido}</p>
        </React.Fragment>
    );
}

const ContInfo = (props) =>{
    const [ver, setVer] = useState(false);

    const evento = () =>{
        if (document.getElementById(props.idContenedor).getBoundingClientRect().y < 450){
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
        <article id={props.idContenedor} className={"cont-info " + ((ver) ? props.animacion : null)} style={{visibility: ver? "visible" : "hidden"}}>
            <Contenido info={props.info} valores={props.valores}/>
        </article>
    );
}

const Contenedor = () =>{
    const datosInfo = [
        {id: 1, titulo: "MISIÓN",
            contenido: `Somos una asociación que contribuye a
            minimizar los indices de violencia que afectan
            a la niñez, adolescencia y juventud de las
            comunidades y centros educativos del
            municipio de Soyapango, a través de la
            implementación de programas que fomentan
            valores, principios y una mentalidad de
            progreso.`,
            icono: "fas fa-hands-helping"
        },
        {id: 2, titulo: "VISIÓN",
            contenido: `Ser una asociación capaz de generar
            cambios en la mentalidad de la niñez,
            adolescencia y juventud de los catorce
            departamentos de El Salvador.`,
            icono: "fas fa-flag"
        },
        {id: 3, titulo: "VALORES",
            contenido: [
                "Amor",
                "Lealtad",
                "Honestidad",
                "Tolerancia",
                "Respeto"
            ],
            icono: "fas fa-hand-holding-heart"
        }
    ];
    return(
        <section className="cont">
            <ContInfo idContenedor="informacion-1" animacion="animated fadeInLeft" info={datosInfo[0]} valores={false}/>
            <ContInfo idContenedor="informacion-2" animacion="animated fadeInUp" info={datosInfo[1]} valores={false}/>
            <ContInfo idContenedor="informacion-3" animacion="animated fadeInRight" info={datosInfo[2]} valores={true}/>
        </section>
    );
}

export default Contenedor;