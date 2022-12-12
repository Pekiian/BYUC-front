import React from 'react'
import '../App.css'

class Header extends React.Component
{
  render()
  {
    return (
        <header className="site-header">                
          <a href="/" style={{textDecoration: "none", color:"black"}}>
            <img src="./img/logo-header.png" className="logo" alt="Logo Byuc"/>
          </a>
        
            <div className="search-bar intern-nav">
                <input type="text" className="search-bar" placeholder="Buscar componentes, monitores,..."/>
                <a href="/compras?id=1"><img src="./img/plus-icon.png" className="vector" alt="Icono Carrito"/></a>
            </div>

            <div className="nav-icons intern-nav">
                <a href="/agregar-producto"><img src="img/plus-icon.png" alt="Símbolo Más"/></a>
                <a href="/perfil"><img src="img/plus-icon.png" alt="Símbolo User"/></a>
                <a href="/login"><img src="img/plus-icon.png" alt="Símbolo Salir"/></a>
                <a href="/mis-productos?id=1"><img src="img/plus-icon.png" alt="Símbolo Menú"/></a>
            </div>
        </header>
    )
  }
}
export default Header;