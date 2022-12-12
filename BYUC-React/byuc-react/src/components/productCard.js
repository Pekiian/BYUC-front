import React from 'react'
import '../App.css'

const productCard = (data) => {
   // values.data.imagen = 'img/'+values.data.imagen
    console.log(data)
    return(
        <div className="card-resultado" style={{marginBottom: "3rem"}}>
            <img src={data.data.imagen} alt="Foto de un CPU"/>

            <div className="info-resultado">
                <a href={"/producto?idProducto="+data.data.id} style={{textDecoration: "none", color: "black"}}>
                    <h4>{data.data.nombre}</h4>
                </a>
                <p>{data.data.descripcion}  - ${data.data.precio}</p>
            </div>
        </div>
    );
}

export default productCard;
