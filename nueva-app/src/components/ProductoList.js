import React, {Component} from "react"
import "./css/categorias.css"

class ProductoList extends Component {
    render(){
        return(
               <div className="section-main">
                    <main className="main">
                        {this.props.productos.map((producto)=>{
                        return (
                            <article className="tarjeta-producto" key={producto.id}>
                                <img  className="imagen-producto" src={producto.imagen} alt="imagen de producto" />
                                <h4 className="nombre-producto">{producto.nombre}</h4>
                                <p className="precio-producto">$ {producto.precio}</p>
                            </article>
                        )
                        })}
                        
                    </main>
                    <h6 className="siguiente">Siguiente </h6>
               </div>
        )
    }
}
 
  
  export default ProductoList;
  