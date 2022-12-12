import React from 'react'
import '../App.css'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from '../components/productCard'

export default function Carrito()
{
    const [isLoading, setIsLoading] = useState(true);
    const [producto, setProducto] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id'))

    useEffect(() => {
        fetch(`http://localhost:5000/mis-productos/${searchParams.get('id')}`)
        .then((response) => response.json())
        .then((producto) => {
            setProducto(producto); // ⬅️ Guardar datos
            console.log(producto);
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
        <main class="mis-productos">
            <div class="los-mios">
                <h2>Mis Publicaciones</h2>

                <div class="no-los-tuyos">
                {producto.map(product => {
                    return(
                        <ProductCard data={product}></ProductCard>
                    )
                })}
                </div>
            </div>

            <div class="no-entiendo-que-es-esto-gaspi">
                <h2>Puntos de encuentro</h2>

                <div class="puntos-creo">
                    <div class="puntito-xd">
                        <h3>Calle y Dirección</h3>
                        <img src="img/plus-icon.png" alt="Icono de Borrar"/>
                    </div>

                    <div class="puntito-xd">
                        <h3>Calle y Dirección</h3>
                        <img src="img/plus-icon.png" alt="Icono de Borrar"/>
                    </div>
                </div>

                <div class="icono-sumar">
                    <img src="img/plus-icon.png" class="icono-gaspi" alt="Icono de Agregar"/>
                </div>
            </div>
        </main>
    )

}

