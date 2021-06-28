import './App.css';
import Header from "./components/Header" 
import Titulo from "./components/Titulo" 
import Categorias from "./components/Categorias"  
import Main from "./components/Main" 
import Footer from "./components/Footer" 


function App() {
    return (
    <div className="app">
      <Header/>
      <Titulo/>
      <div className="categorias-main">
          <Categorias/>
          <Main/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
