import React from 'react'
import '../App.css'

class Footer extends React.Component
{
  render()
  {
    return (
        <footer className="site-footer">
            <div className="ayuda-footer">
                <h4>¿Necesitas Ayudas?</h4>
                <p>Comentanos tu duda o algo que te moleste</p>
            </div>

            <div className="redes-footer">
                <h4>¿Quienes Somos?</h4>
                <div className="redes-box">
                    <img src="img/logo-instagram.png" alt="Logo Instagram"/>
                    <img src="img/logo-email.png" alt="Logo Email"/>
                </div>
            </div>

            <div className="easy-way-out"></div>
        </footer>
    )
  }
}
export default Footer;
