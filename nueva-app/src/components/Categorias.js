import React from "react"
import "./css/categorias.css"
import {Link} from "react-router-dom"

function Categorias() {
    return (
          <nav className="nav-categorias">
              <ul className="list-categorias">
                  <li className="list-categorias-li-titulo">Categorías</li>
                  <li className="list-categorias-li"><Link className="link" to="/"> Todos los productos </Link></li>
                  <li className="list-categorias-li"><Link className="link" to="/zapatillas-exterior"> Zapatillas de exterior </Link></li>
                  <li className="list-categorias-li"><Link className="link" to="/zapatillas-correr"> Zapatillas para correr </Link></li>
                  <li className="list-categorias-li"><Link className="link" to="/zapatillas-gym"> Zapatillas Gym </Link></li>
                  <li className="list-categorias-li"><Link className="link" to="/zapatillas-tenis"> Zapatillas Tenis </Link></li>
              </ul>
          </nav>
          );
  }
  
  export default Categorias;
  