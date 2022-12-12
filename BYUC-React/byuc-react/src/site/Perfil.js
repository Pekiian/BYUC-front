import React from 'react'
import '../App.css'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Perfil()
{

    const [isLoading, setIsLoading] = useState(true);
    const [usuario, setUsario] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id'))

    useEffect(() => {
        fetch(`http://localhost:5000/user/${searchParams.get('id')}`)
        .then((response) => response.json())
        .then((usuario) => {
            setUsario(usuario); // ⬅️ Guardar datos
            console.log(usuario);
            setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        });
    });

    if (isLoading) {
        return (
          <div className="App">
            <div class="resultados">
                <p>Cargando</p>
            </div>
          </div>
        );
      }
    return (
        <main class="perfi-container">
            <div class="usuario">
                <img src="img/plus-icon.png" alt="Icono Usuario"/>

                <div class="perfil-info">
                    <p class="perfil-names">{usuario.nombre} <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                    {/* <p class="perfil-names">Apellido <img src="img/plus-icon.png" alt="Icono Editar"/></p> */}
                    {/* <p class="perfil-names">Nombre Usuario <img src="img/plus-icon.png" alt="Icono Editar"/></p> */}
                    <p class="perfil-names">{usuario.email} <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                </div>
            </div>

            <div class="perfil-full-data">
                <div class="perfil-form">
                    <h3>¿Necesitas cambiar la contraseña?</h3>

                    <input type="text" placeholder="Contraseña Actual" value={usuario.contraseña}/>
                    <input type="password" placeholder="Nueva Contraseña"/>
                    <input type="password" placeholder="Repetir Contraseña"/>
                </div>

                <div class="perfil-form">
                    <h3>Documentos</h3>

                    <input type="number" placeholder="DNI" value={usuario.dni}/>
                    <input type="text" placeholder="CUIT/CUIL" value={usuario.cuitcuil}/>

                    <h3>Celular</h3>
                    <input type="text" placeholder="Número de Tel/Celus"/>
                </div>

                <div class="perfil-form">
                    <h3>Formas de Pago</h3>

                    <input type="text" placeholder={usuario.formas_de_pago}/>
                </div>
            </div>
        </main>
    )
  
}

