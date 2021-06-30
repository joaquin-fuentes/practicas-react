import React, {Component} from "react"
import "./css/formulario.css"

class Formulario extends Component  {
    // state = {}
    // handleChange= (e) => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value:e.target.value})
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    handleClick= (e) => {
        console.log("El botón fue presionado")
    }
    handleSubmit= (e) => {
      e.preventDefault()
      console.log("El formulario no se subío")
      console.log(this.state)
    }


    render (){ 
    return (
    <div className="section-creacion-producto">
        <div className="contenedor-formulario">
            <h2>Crear producto</h2>
            <form onSubmit={this.handleSubmit} className="form-crear-producto" action="">
                <input onChange={this.props.onChange} 
                 className="input" 
                 type="file" 
                 id="src-file" 
                 name="imagen" 
                 placeholder="imagen" 
                 value={this.props.valoresForm.imagen} />

                <input onChange={this.props.onChange} 
                className="input" 
                type="text" 
                name="nombre" 
                placeholder="Nombre del producto" 
                value={this.props.valoresForm.nombre} required/>
                <input onChange={this.props.onChange} 
                className="input" 
                type="number" 
                name="precio" 
                placeholder="Precio" 
                value={this.props.valoresForm.precio} required/>
                <input  onChange={this.props.onChange} 
                className="input" 
                type="text"
                name="categoria" 
                placeholder="Categoría" 
                id="categoria" 
                value={this.props.valoresForm.categoria} required>
                </input>
                <button onClick={this.handleClick} className="button">Crear</button>
            </form>

        </div>

        
    </div>
          );
  }
}
  
  export default Formulario;
  