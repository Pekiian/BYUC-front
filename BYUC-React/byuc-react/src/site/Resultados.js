import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from '../components/productCard'
import '../App.css'

export default function Resultados()
{
    const [isLoading, setIsLoading] = useState(true);
    const [productos, setProductos] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('tipo'))

    useEffect(() => {
        fetch(`http://localhost:5000/productos/${searchParams.get('tipo')}`)
        .then((response) => response.json())
        .then((productos) => {
            setProductos(productos); // ⬅️ Guardar datos
            console.log(productos);
            setIsLoading(false); // ⬅️ Desactivar modo "cargando"
        });
    });
    
    if (isLoading) {
        return (
          <div className="App">
            <div class="filtros">
                <p>Filtros <img src="img/flecha-expandir.png" alt="Icono Expandir"/></p>
                <div class="card-filtro">
                    <label for="precio">Precio</label>
                    <div class="input-box">
                        <input type="number" name="precio" id="precio" placeholder="Min..."/>
                        <input type="number" name="precio" id="precio" placeholder="Max..."/>
                    </div>
                </div>
            </div>

            <div class="resultados">
                <h3>Resultados de la Búsqueda</h3>

                <p>Cargando</p>
            </div>
          </div>
        );
      }

    return (
        <main class="main-resultados">
            <div class="filtros">
                <p>Filtros <img src="img/flecha-expandir.png" alt="Icono Expandir"/></p>
                <div class="card-filtro">
                    <label for="precio">Precio</label>
                    <div class="input-box">
                        <input type="number" name="precio" id="precio" placeholder="Min..."/>
                        <input type="number" name="precio" id="precio" placeholder="Max..."/>
                    </div>
                </div>
            </div>

            <div class="resultados">
                <h3>Resultados de la Búsqueda</h3>
                {productos.map(producto => {
                    return(
                        <ProductCard data={producto}></ProductCard>
                    )
                })}
                {/* <div class="card-resultado">
                    <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>

                    <div class="info-resultado">
                        <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                        <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                    </div>
                </div> */}
            </div>
        </main>
    )
}
