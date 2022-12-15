import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Noticia} from '../principal/ultimasNoticias';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import URL from '../../API/url';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const usePagina = () =>{
    const [page, setPage] = useState(1);
    let history = useHistory();
    let {pagina} = useParams();

    const numPagina = (valor) =>{
        setPage(valor);
        history.push("/noticias/" + valor);
    }

    //Limpiar el error del valor de la pagina actual cuando se actualiza
    useEffect(() =>{
        history.push("/noticias/" + page);
    }, [history, page, pagina]);

    return [
        page,
        numPagina
    ];
}

function Paginacion(props) {
    const classes = useStyles();
    const [page, numPagina] = usePagina();

    const cambioPagina = (event, value) => {
      numPagina(value);
        window.scrollTo({
            top: 350,
            left: 0,
            behavior: 'smooth'
        });
    };
    
    return (
      <div className={classes.root + " paginacion"}>
        <Pagination count={props.paginas} page={page} onChange={cambioPagina} />
      </div>
    );
  }

const ContenedorNoticias = () =>{
    let {pagina} = useParams();
    let [noticias, setNoticias] = useState(null);
    let [precarga, setPrecarga] = useState(true);
    let paginas = 0;

    const data = async () => {
        fetch(URL + "/noticias", {
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
            <div className="ContenedorNoticias">
                <img alt="preload" src="/img/preload.gif" width="50" style={{margin: "0 auto"}}/>
            </div>
        );
    }
    if (noticias === null || noticias.length === 0){
        return(
            <div className="ContenedorNoticias">
                <h1 style={{margin: "0 auto"}}>No se encontraron noticias</h1>
            </div>
        );
    }
    //Agregando la cantidad de paginas en las que se dividiran las noticias
    for(let j = 0; j < noticias.length / 6; j++){
        paginas = 1 + j;
    }

    //<div><Noticia noticia={n}/>
    const listadoNoticias = noticias.map((n, i) =>{
        if (i >= ((pagina - 1) * 6) && i < (pagina * 6)){
            return (<Noticia noticia={n}/>)
        }
        else{
            return null;
        }
    });

    if (listadoNoticias.length === 0 || listadoNoticias.includes(Object)){
        return null;
    }
    return(
        <React.StrictMode>
            <div className="ContenedorNoticias">
                {listadoNoticias}
            </div>
            <Paginacion paginas={paginas} />
        </React.StrictMode>
    );
}

export default ContenedorNoticias;