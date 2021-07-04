import React, {Component} from "react";
import "./css/carrito.css"


class Carrito extends Component {
   
    render(){
        return (
            <React.Fragment>
                <div className="section-carrito">
                   <h2 className="titulo-carrito">Carrito de compras</h2>
                   <h4>Tu carrito está vacío</h4>
                   <p>¡Cámbialo! Elige algo y vuelve aquí.</p>
                   <div className="contenedor-boton">
                       <p>Seguir comprando</p>
                   </div>

                </div>
           
            </React.Fragment>
           
        )
    }
}

export default Carrito