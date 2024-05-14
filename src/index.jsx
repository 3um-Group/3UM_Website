import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client"

import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Home from './pages/Home'
import HomeContainer from "./pages/HomeContainer";

const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Home />}>
        <Route index element={<HomeContainer />}/>
    </Route>
))




function App(){
    return(

        <RouterProvider router={router}/>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)