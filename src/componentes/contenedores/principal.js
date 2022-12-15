import React from 'react';
import BannerContenedor from '../slider';
import InfoContenedor from '../principal/info';
import Historia from '../principal/historia';
import Programas from '../principal/programas';
import {UltimasNoticias} from '../principal/ultimasNoticias';
import Instituciones from '../principal/instituciones';
import '../../css/principal/info.css';
import '../../css/principal/historia.css';
import '../../css/principal/programas.css';
import '../../css/principal/instituciones.css';

const ContenedorPricipal = () =>{
    return(
        <main className="principal">
            <InfoContenedor/>
            <Historia/>
            <Programas/>
            <UltimasNoticias/>
            <Instituciones/>
        </main>
    );
}

const Principal = () =>{
    return(
        <React.Fragment key={0}>
            <BannerContenedor/>
            <ContenedorPricipal/>
        </React.Fragment>
    );
}

export default Principal;