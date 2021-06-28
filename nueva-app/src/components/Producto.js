import React, {Component} from "react"
import "./css/producto.css"

class Producto extends Component {
  render(props){ 
    return (
        <article className="tarjeta-producto">
           <img  className="imagen-producto" src={props.urlProducto} alt="imagen de producto" />
           <h4 className="nombre-producto">{props.nombreProducto}</h4>
           <p className="precio-producto">{props.precioProducto}</p>
        </article>
          );
  }
}
  
  export default Producto;
  