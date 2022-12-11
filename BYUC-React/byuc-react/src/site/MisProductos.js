import React from 'react'
import '../App.css'
import ProductCard from '../components/productCard'

class Carrito extends React.Component
{
  render()
  {
    return (
        <main class="mis-productos">
            <div class="los-mios">
                <h2>Mis Publicaciones</h2>

                <div class="no-los-tuyos">
                    <ProductCard data={{id:1, imagen:"cpu-resultado.png", nombre: "Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX", descripcion: "6 núcleos y 4.4GHz de frecuencia con gráfica integrada", precio:"17.090"}}></ProductCard>
                    {/* <div class="card-resultado">
                        <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
            
                        <div class="info-resultado">
                            <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                            <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                        </div>
                    </div> */}
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
}
export default Carrito;

