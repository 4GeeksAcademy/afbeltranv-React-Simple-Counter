//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
    
let segundos=0;
let decaSegundos=0;
let hectoSegundos=0;
let kiloSegundos=0;
let megaSegundos=0;
let gigaSegundos=0;


setInterval(function(){
    if (segundos<9){
        segundos++;
    } else{
        segundos=0;
        decaSegundos++;
    }
    if (decaSegundos>9){ 
        hectoSegundos++;
        decaSegundos=0;       

    }
    if (hectoSegundos>9){
        kiloSegundos++;
        hectoSegundos=0;
    }
    if (kiloSegundos>9){
        megaSegundos++;
        kiloSegundos=0;
    }
    if (megaSegundos>9){
        gigaSegundos++;
        megaSegundos=0;
    }
    if (gigaSegundos>9){
        segundos=0;
        decaSegundos=0;
        hectoSegundos=0;
        kiloSegundos=0;
        megaSegundos=0;
        gigaSegundos=0;        
    }
    // console.log(segundos, decaSegundos, hectoSegundos, kiloSegundos, megaSegundos, gigaSegundos);
    ReactDOM.render(<Home uno={segundos} dos={decaSegundos} tres={hectoSegundos} cuatro={kiloSegundos} cinco={megaSegundos} seis={gigaSegundos}/>, document.querySelector("#app"));}, 1000);
//render your react application

