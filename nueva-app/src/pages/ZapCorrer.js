import React,{Component} from 'react';
import './css/home.css';
import Titulo from "../components/Titulo" 
import Categorias from "../components/Categorias"  
import ProductoList from "../components/ProductoList"
import "../components/css/producto.css"
import "../components/css/main.css"


class App extends Component {

  constructor (props){
    super(props)
      console.log("1- constructor")
      this.state={
        data:[]
      }
  }
  componentDidMount(){
    console.log("3- componentDidMount")
    this.timeoutId = setTimeout(()=>{
      this.setState({
        data: [
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:1
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:2
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:3
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:4
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:5
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:6
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:7
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:8
          },
          {
            imagen: "https://d1di2lzuh97fh2.cloudfront.net/files/2h/2hi/450/2hi4ls.png?ph=37e3c938fc",
            nombre: "Zapatilla Blanca",
            precio: 200,
            categoria: "exterior",
            id:1
          },
          
        ]
      })
    },200)
  }
  componentDidUpdate(prevProps, prevState){
    console.log("5- componentDidUpdate")
    console.log({
      prevProps: prevProps,
      prevState: prevState
    })
    console.log({
      prevProps: this.props,
      prevState: this.state
    })

  }
  componentWillUnmount(){
    console.log("6. componentWillUnmount")
    clearTimeout(this.timeoutId)
  }

  render(){
    console.log("2/4- render")

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
