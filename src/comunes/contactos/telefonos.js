import React from 'react';
const Telefonos = (props) =>{
    const numeros = props.numeros.map((n) =>
        <React.Fragment key={n.idTelefono}>
            {
                (n.telefono !== null && n.telefono !== "") &&
                    <span><i className="fas fa-phone-alt"></i></span>
            }
            {
                (n.telefono !== null && n.telefono !== "") &&
                <p><a href={"tel:+503" + n.telefono.replace("-", "")}>{n.telefono}</a></p>
            }
        </React.Fragment>
    );

    return(
        <div>
            {numeros}
        </div>
    );
}

export default Telefonos;