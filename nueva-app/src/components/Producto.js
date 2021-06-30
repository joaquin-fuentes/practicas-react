import React, {Component} from "react"
import "./css/producto.css"

class Producto extends Component {
  render(props){ 
    return (
        <article className="tarjeta-producto">
           <img  className="imagen-producto" src={this.props.imagen} alt="imagen de producto" />
           <h4 className="nombre-producto">{this.props.nombre}</h4>
           <p className="precio-producto">$ {this.props.precio}</p>
        </article>
          );
  }
}
  
  export default Producto;
  