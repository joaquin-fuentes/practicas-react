import React, {Component} from "react";
import Formulario from "../components/Formulario"
import Producto from "../components/Producto"
import "./css/nuevoProducto.css"



class NuevoProducto extends Component {
    state = {
        form:{
            nombre:"",
            precio:"",
            imagen:"",
            categoria:"",
    }};
    handleChange = e => {
      this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
      });
    };
    render(){
        return (
            <React.Fragment>
                <div className="main-formulario-creacion">
                    <Formulario onChange={this.handleChange} valoresForm={this.state.form}/>
                    <div className="contenedor-producto">
                        <Producto 
                        nombre= {this.state.form.nombre}
                        precio= {this.state.form.precio}
                        imagen="https://d1di2lzuh97fh2.cloudfront.net/files/0b/0bf/450/0bfan9.png?ph=37e3c938fc"/>
                    </div>
                </div>
           
            </React.Fragment>
           
        )
    }
}

export default NuevoProducto