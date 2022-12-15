import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import Contactos from './comunes/contactos/contactos';
import Encabezado from './comunes/encabezado/encabezado';
import Principal from './componentes/contenedores/principal';
import SeccionNoticias from './componentes/contenedores/noticias';
import Donacion from './componentes/contenedores/donar';
import Pie from './comunes/pie/pie';
import Error from './comunes/error/404';
import ContenedorNoticia from './componentes/contenedores/noticia';

const Navegacion = () =>{
  let ruta = useLocation();

  if (ruta.pathname === "/error-404"){
    return null
  }
  return(
    <React.StrictMode>
      <Contactos/>
      <Encabezado/>
    </React.StrictMode>
  );
}

const Footer = () =>{
  let ruta = useLocation();

  if (ruta.pathname === "/error-404"){
    return null
  }
  return(
    <Pie/>
  );
}

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
      <Navegacion/>
        <Switch>
          <Route path="/" exact component={Principal}/>
          <Route path="/noticias/:pagina" exact component={SeccionNoticias}/>
          <Route path="/noticia/:id" exact component={ContenedorNoticia}/>
          <Route path="/donar" exact component={Donacion}/>
          <Route path="/error-404" component={Error}/>
          <Redirect to="/error-404"/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
