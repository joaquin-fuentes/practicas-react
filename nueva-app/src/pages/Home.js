import React,{Component} from 'react';
import './css/home.css';
import Titulo from "../components/Titulo" 
import Categorias from "../components/Categorias"  
import ProductoList from "../components/ProductoList"
import "../components/css/producto.css"
import "../components/css/main.css"


class App extends Component {
  state={
    data: [
      {
        imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
        nombre: "Zapatilla Blanca",
        precio: 200,
        categoria: "exterior",
        id:1
      },
      {
        imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/37/372/450/372mig.png?ph=37e3c938fc",
        nombre: "Zapatilla Rosa",
        precio: 300 ,
        categoria: "tenis",
        id:2
      },
      {
        imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/3s/3sd/450/3sdptz.png?ph=37e3c938fc",
        nombre: "Zapatilla Azul",
        precio: 240 ,
        categoria: "gym",
        id:3
      },
      {
        imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/0b/0bf/450/0bfan9.png?ph=37e3c938fc",
        nombre: "Zapatilla violeta",
        precio: 280 ,
        categoria: "correr",
        id:4
      },
      
    ]
  }
  render(){
    return (
    <div className="app">
      <Titulo/>
      <div className="categorias-main">
          <Categorias/>
          <ProductoList productos={this.state.data}/>
      </div>
      
    </div>
  );
 }
}

export default App;
