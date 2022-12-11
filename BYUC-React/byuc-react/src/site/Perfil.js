import React from 'react'
import '../App.css'

class Resultados extends React.Component
{
  render()
  {
    return (
        <main class="perfi-container">
            <div class="usuario">
                <img src="img/plus-icon.png" alt="Icono Usuario"/>

                <div class="perfil-info">
                    <p class="perfil-names">Nombre <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                    <p class="perfil-names">Apellido <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                    <p class="perfil-names">Nombre Usuario <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                    <p class="perfil-names">Mail del Usuario <img src="img/plus-icon.png" alt="Icono Editar"/></p>
                </div>
            </div>

            <div class="perfil-full-data">
                <div class="perfil-form">
                    <h3>¿Necesitas cambiar la contraseña?</h3>

                    <input type="text" placeholder="Contraseña Actual"/>
                    <input type="password" placeholder="Nueva Contraseña"/>
                    <input type="password" placeholder="Repetir Contraseña"/>
                </div>

                <div class="perfil-form">
                    <h3>Documentos</h3>

                    <input type="number" placeholder="DNI"/>
                    <input type="text" placeholder="CUIT/CUIL"/>

                    <h3>Celular</h3>
                    <input type="text" placeholder="Número de Tel/Celus"/>
                </div>

                <div class="perfil-form">
                    <h3>Formas de Pago</h3>

                    <input type="text" placeholder="Mantenerme Solamente en Efectivo"/>
                </div>
            </div>
        </main>
    )
  }
}
export default Resultados;
