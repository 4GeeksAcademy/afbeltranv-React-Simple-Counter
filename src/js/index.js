//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


const cronometro()=>{
let segundos=0;
let decaSegundos=0;
let hectoSegundos=0;
let kiloSegundos=0;
let megaSegundos=0;
let gigaSegundos=0;

if (segundos<9){
 segundos++;
} else{
    segundos=0
    decaSegundos++;
}
if (decaSegundos==10){
    decaSegundos=0;
    hectoSegundos++;

}

}
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
