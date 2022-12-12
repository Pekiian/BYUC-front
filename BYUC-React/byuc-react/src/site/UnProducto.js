import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css'

export default function UnProducto()
{
    const [isLoading, setIsLoading] = useState(true);
    const [producto, setProducto] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('idProducto'))

    useEffect(() => {
        fetch(`http://localhost:5000/producto/${searchParams.get('idProducto')}`)
        .then((response) => response.json())
        .then((producto) => {
            setProducto(producto[0]); // ⬅️ Guardar datos
            console.log(producto[0]);
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
        <main class="producto-container">
            <div class="fotos">
                <img src={"img/"+producto.imagen} alt="Foto del Componente"/>
            
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
                <h2>{producto.nombre}</h2>
            
                <h2>${producto.precio}</h2>

                <p>{producto.descripcion}</p>
                {/* <p>Informacon del vendedor, ej:  Direccion, cuando llega el pedido, la reputacion del vendedor.</p> */}

                <div class="btn-box">
                    <div class="btn-comprar">COMPRAR</div>
                    <div class="btn-wish-list">Agregar a lista de <br/> deseados</div>
                </div>
            </div>
        </main>
    )
}
