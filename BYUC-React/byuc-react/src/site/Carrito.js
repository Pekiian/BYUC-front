import React from 'react'
import '../App.css'
import ProductCard from '../components/productCard';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Carrito()
{

    const [isLoading, setIsLoading] = useState(true);
    const [deseados, setDeseado] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('id'))

    useEffect(() => {
        fetch(`http://localhost:5000/deseados/${searchParams.get('id')}`)
        .then((response) => response.json())
        .then((deseados) => {
            setDeseado(deseados); // ⬅️ Guardar datos
            console.log(deseados);
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
        <main class="compras">
                <div class="wish-list">
                    <h2>Lista de deseados</h2>
                    <div class="wish-elements">
                    {deseados.map(producto => {
                        return(
                            <div class="wish-element">
                                <ProductCard data={producto}></ProductCard>
                            </div>
                        )
                    })}
                    </div>
                </div>

                <div class="carrito">
                    <h2>Carrito de Compras</h2>
                    <div class="carrito-card">
                        <div class="carrito-element">
                        <ProductCard data={{id:1, imagen:"cpu-resultado.png", nombre: "Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX", descripcion: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada", precio:"17.090"}}></ProductCard>
                            {/* <div class="card-resultado">
                                <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                
                                <div class="info-resultado">
                                    <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                                    <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                                </div>
                            </div>
                            <img src="img/plus-icon.png" alt="Símbolo Tacho"/> */}
                        </div>

                        <div class="carrito-element">
                            <ProductCard data={{id:1, imagen:"cpu-resultado.png", nombre: "Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX", descripcion: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada", precio:"17.090"}}></ProductCard>
                            {/* <div class="card-resultado">
                                <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                
                                <div class="info-resultado">
                                    <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                                    <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                                </div>
                            </div>
                            <img src="img/plus-icon.png" alt="Símbolo agregar"/> */}
                        </div>

                        <div class="carrito-element">
                            <ProductCard data={{id:1, imagen:"cpu-resultado.png", nombre: "Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX", descripcion: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada", precio:"17.090"}}></ProductCard>
                            {/* <div class="card-resultado">
                                <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                
                                <div class="info-resultado">
                                    <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                                    <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                                </div>
                            </div>
                            <img src="img/plus-icon.png" alt="Símbolo agregar"/> */}
                        </div>

                        <button class="btn-comprar">Finalizar Compra</button>
                    </div>
                </div>
        </main>
    )
}
