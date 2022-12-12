import React from 'react'
import '../App.css'
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Login(props)
{
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirm_contraseña, setRepetir] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const user = { nombre, email, dni:20000000, cuitcuil:"asdas", contraseña, confirm_contraseña, formas_de_pago:1  };
    //   console.log(JSON.stringify(user));
      
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }).then((e) => {
        console.log(e);
        console.log('new user added', user);
      }).catch(e => {
        console.log(e);
      })
    }
    
    return (
        <main className="iniciar-cuentas container">
            <div className="logo-cuentas">
                <img src="img/logo-header.png" alt="Logo BYUC"/>
            </div>

            <div className="forms">
                <div className="signup">
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="email">Mail</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        
                        <label htmlFor="nombre">Nombre y Apellido</label>
                        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="contraseña" id="contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>
        
                        <label htmlFor="repetir">Repetir Contraseña</label>
                        <input type="repetir" id="repetir" value={confirm_contraseña} onChange={(e) => setRepetir(e.target.value)}/>
        
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
