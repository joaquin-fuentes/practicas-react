import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NuevoProducto from "../pages/NuevoProducto"
import Home from "../pages/Home"
import Layout from "./Layout"
import NotFound from "../pages/NotFound"


function App (){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/crear-producto" component={NuevoProducto} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )

}

export default App