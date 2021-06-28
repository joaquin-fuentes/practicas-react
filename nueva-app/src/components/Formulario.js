import React, {Component} from "react"
import "./css/formulario.css"

class Formulario extends Component  {
    handleChange= (e) => {
        console.log({
            name: e.target.name,
            value:e.target.value})
    }
    handleClick= (e) => {
        console.log("El botón fue presionado")
    }


    render (){ 
    return (
    <div className="section-creacion-producto">
        <div className="contenedor-formulario">
            <h2>Crear producto</h2>
            <form className="form-crear-producto" action="">
                <input onChange={this.handleChange} className="input" type="file" id="src-file" name="src-file" placeholder="imagen" required />
                <input onChange={this.handleChange} className="input" type="text" name="nombre" placeholder="Nombre del producto" required/>
                <input onChange={this.handleChange} className="input" type="number" name="precio" placeholder="Precio" required/>
                <select  onChange={this.handleChange} className="input" name="categoria" id="categoria" required>
                    <option className="option" disabled selected value="">Categoría</option>
                    <option className="option"  value="Exterior">Exterior</option>
                    <option className="option"  value="Correr">Correr</option>
                    <option className="option"  value="Gym">Gym</option>
                    <option className="option"  value="Tenis">Tenis</option>
                </select>
                <button onClick={this.handleClick} className="button">Crear</button>
            </form>

        </div>

        
    </div>
          );
  }
}
  
  export default Formulario;
  