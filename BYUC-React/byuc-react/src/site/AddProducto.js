import React from 'react'
import '../App.css'

class AddProducto extends React.Component
{
  render()
  {
    return (
        <main className="agregar-producto">
            <h2>¿Quieres vender un producto?</h2>

            <form action="" className="agregar">
                <div className="texto">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>

                    <label htmlFor="descripcion">Descripción del producto:</label>
                    <textarea name="descripcion" id="descripcion" placeholder="Descripción completa del producto"></textarea>
                </div>
                <div className="otros">
                    <div className="fotos">
                        <div className="text-foto">
                            <label htmlFor="fotos" className="text-foto">
                                Agregar fotos del producto                            
                                <img src="img/plus-icon.png" alt="Icono Agregar Foto"/>
                            </label>                        
                            <input type="file" name="" id="fotos"/>
                        </div>

                        <div className="grid-fotos">
                            <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                            <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                            <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                            <img src="img/cpu-resultado.png" alt="Foto de un CPU"/>
                        </div>
                    </div>

                    <div className="precio">
                        <label htmlFor="precio">Precio:</label>
                        <input type="number" name="precio" id="precio"/>
                    </div>
                </div>
            </form>
        </main>
    )
  }
}
export default AddProducto;
