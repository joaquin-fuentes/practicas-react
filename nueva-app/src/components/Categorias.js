import React from "react"
import "./css/categorias.css"

function Categorias() {
    return (
          <nav className="nav-categorias">
              <ul className="list-categorias">
                  <li className="list-categorias-li-titulo">Categorías</li>
                  <li className="list-categorias-li">Todos los productos</li>
                  <li className="list-categorias-li">Zapatillas para exterior</li>
                  <li className="list-categorias-li">Zapatillas para correr</li>
                  <li className="list-categorias-li">Zapatillas gym</li>
                  <li className="list-categorias-li">Zapatillas tenis</li>
              </ul>
          </nav>
          );
  }
  
  export default Categorias;
  