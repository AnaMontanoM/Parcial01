import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const blusa = "blusa";
  const pantalon = "pantalon";
  
	return (
		<div className="App">
			<div className="card">
				<h2>Producto:</h2>
			</div>
			<div className="Select">
        <select name = "select" id="SelectP">
        <option value = {blusa} selected>{blusa}</option>
        <option value = {pantalon} >{pantalon}</option>
        <select/>
        <div/>
        <div className = "card">
          <button OnClick={() => Agregar()}>Agregar</button>
          <button OnClick={() => Listar()}>Listar</button>
        </div>
        <div className = "table">
          <table>
            <thread>
              <th colspan ="2">
                <td>Producto</td>
                <td>Precio</td>

              </th>

            </thread>
          </table>
        </div>	
		</div>
	);
}

export default App;
