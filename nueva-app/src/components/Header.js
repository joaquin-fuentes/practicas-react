import React from "react"
import "./css/header.css"

function Header() {
    return (
            <header className="header-home">
                <h2 className="titulo-header">Zapatillas pensadas para tí</h2>
                <nav className="nav-header">
                    <ul className="nav-list">
                        <li className="nav-list-li-titulo">Inicio</li>
                        <li className="nav-list-li">Crear Producto</li>
                        <li className="nav-list-li">Sobre nosotros</li>
                        <li className="nav-list-li">Contacto</li>
                        <li className="nav-list-li">Carrito</li>
                    </ul>
                </nav>
            </header>
          );
  }
  
  export default Header;
  