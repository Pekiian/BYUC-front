import React from 'react'
import '../App.css'

class Resultados extends React.Component
{
  render()
  {
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

            <div class="card-resultado">
                <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>

                <div class="info-resultado">
                    <h4>Procesador gamer AMD Ryzen 5 5600G 100-100000252BOX</h4>
                    <p>6 núcleos y 4.4GHz de frecuencia con gráfica integrada  - $17.090</p>
                </div>
            </div>
        </div>
    </main>
    )
  }
}
export default Resultados;
