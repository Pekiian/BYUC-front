import React from 'react'
import '../App.css'

class Resultados extends React.Component
{
  render()
  {
    return (
        <main class="producto-container">
            <div class="fotos">
                <img src="img/cpu-resultado.png" alt="Foto del Componente"/>
            
                <div class="fotitos-xd">
                    <img src="img/cpu-resultado.png" alt="Foto GPU"/>
                    <img src="img/placas-de-video.png" alt="Foto GPU"/>
                    <img src="img/placas-de-video.png" alt="Foto GPU"/>
                    <img src="img/placas-de-video.png" alt="Foto GPU"/>
                    <img src="img/placas-de-video.png" alt="Foto GPU"/>
                </div>
            </div>

            {/* {
                const imagenesChiquitas = document.querySelectorAll('.fotitos-xd img')
                const imagenPrincipal = document.querySelector('.fotos img')

                imagenesChiquitas.forEach(imagen => {
                    imagen.addEventListener('click', (e) => {
                        let ruta = e.target.src.split('http://127.0.0.1:5500/')[1]
                        imagenPrincipal.src = ruta
                    })
                })
            } */}

            <div class="info">
                <h2>Titulo del Producto</h2>
            
                <h2>$6.969</h2>

                <p>Descripcion del producto, ej: Placa de video ASUS 1660, estado del producto, tiempo de uso, etc</p>
                <p>Informacon del vendedor, ej:  Direccion, cuando llega el pedido, la reputacion del vendedor.</p>

                <div class="btn-box">
                    <div class="btn-comprar">COMPRAR</div>
                    <div class="btn-wish-list">Agregar a lista de <br/> deseados</div>
                </div>
            </div>
        </main>
    )
  }
}
export default Resultados;
