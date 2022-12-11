import React from 'react'
import '../App.css'

const productCard = (values) => {
   // values.data.imagen = 'img/'+values.data.imagen
    
    return(
        <div className="card-resultado">
        <img src={values.data.imagen} alt="Foto de un CPU"/>

        <div className="info-resultado">
            <h4>{values.data.nombre}</h4>
            <p>{values.data.descripcion}  - {values.data.precio}</p>
        </div>
    </div>
    );
}

export default productCard;
