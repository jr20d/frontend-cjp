import React from 'react';

const Direccion = () =>{
    return(
        <div class="direccion">
            <div class="icono-dir">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <h2>DIRECCIÓN</h2>
            <p>Calle antigua a Tonacatepeque, Avenida San José, Reparto Las Arboledas, N° 24-A, Soyapango</p>
        </div>
    );
}

const Contactos = () =>{
    return (
        <div class="pie-contactos">
            <p class="pie-contacto"><i class="fab fa-facebook-square"></i> https://es-la.facebook.com/CASAJUVENILDPAZ/</p>
            <p class="pie-contacto"><i class="fas fa-envelope"></i> juvenildepazes@gmail.com</p>
        </div>
    );
}

const DerechosReservados = () =>{
    return (
        <div class="derechos-reservados">
            <p>Derechos Reservados &copy; Asociación Casa Juvenil de Paz 2020</p>
        </div>
    );
}

const Pie = () =>{
    return(
        <footer className="pie">
            <Direccion/>
            <Contactos/>
            <DerechosReservados/>
        </footer>
    );
}

export default Pie;