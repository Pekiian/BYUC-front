import React from 'react'
import '../App.css'

class Home extends React.Component
{
  render()
  {
    return (
        <main className="home container">
            <div className="card">
                <a href="/resultados?tipo=perisfericos" style={{textDecoration: "none", color:"black"}}>
                    <h2>Perisfericos</h2>
                    <img src="img/perisfericos.png" alt="Perisfericos"/>
                </a>
            </div>

            <div className="card disccounts">
                <h2>DESCUENTOS <br/> SEMANALES</h2>
            </div>

            <div className="card">
                <a href="/resultados?tipo=gpus" style={{textDecoration: "none", color:"black"}}>
                    <h2>Placas de Video</h2>
                    <img src="img/placas-de-video.png" alt="Placas de Video"/>
                </a>
            </div>

            <div className="card">
                <a href="/resultados?tipo=componentes" style={{textDecoration: "none", color:"black"}}>
                    <h2>Componentes</h2>
                    <img src="img/componentes.png" alt="Componentes"/>
                </a>
            </div> 
    </main>
    )
  }
}
export default Home;
