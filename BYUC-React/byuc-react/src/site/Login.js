import React from 'react'
import '../App.css'

class Login extends React.Component
{
  render()
  {
    return (
        <main className="iniciar-cuentas container">
            <div className="logo-cuentas">
                <img src="img/logo-header.png" alt="Logo BYUC"/>
            </div>

            <div className="forms">
                <div className="signup">
                    <form action="/signup" method="post" className="form">
                        <label htmlFor="email">Mail</label>
                        <input type="email" name="email" id="email"/>
        
                        <label htmlFor="nombre">Nombre y Apellido</label>
                        <input type="nombre" name="nombre" id="nombre"/>
        
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="contraseña" name="contraseña" id="contraseña"/>
        
                        <label htmlFor="repetir">Repetir Contraseña</label>
                        <input type="repetir" name="repetir" id="repetir"/>
        
                        <p className="error">Contraseña incorrecta</p>
        
                        <button>Crear Cuenta</button>
                    </form>
                    <a href='lol'>¿Problemas para  Crear una cuenta?</a>
                </div>
        
                <div className="login">
                    <form action="/signup" method="post" className="form form-login">
                        <label htmlFor="email">Mail</label>
                        <input type="email" name="email" id="email"/>
        
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="contraseña" name="contraseña" id="contraseña"/>
        
                        <p className="error">La contraseña o el mail no son correctos</p>
        
                        <button>Iniciar Sesión</button>
                    </form>
                    <a href='lol'>¿Problemas para Iniciar Sesión?</a>
                </div>
            </div>
        </main>
    )
  }
}
export default Login;
