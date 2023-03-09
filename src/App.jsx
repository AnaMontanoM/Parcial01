import React, { useState } from "react";
import "./App.css";
import productos from "./Productos/Producto";
import Tablita from "./componentes/Tablita";

function App() {
	const [products, setProducts] = useState(productos);
	const [listProducts, setListProducts] = useState(null);
	const [listaCarrito, setListCarrito] = useState([]);
	const [mostrarTabla, setMostrarTabla] = useState(false);

	const agregarTabla = () => {
		if (listProducts) {
			setListCarrito([...listaCarrito, listProducts]);
			setListProducts(null);
		}
	};

	const cambiarInput = (event) => {
		const selectedIndex = event.target.selectedIndex;
		const selectedProduct = products[selectedIndex];
		setListProducts(selectedProduct);
	};

	const mostrarTablaHandler = () => {
		setMostrarTabla(true);
	};

	return (
		<div className="App">
			<div>
				<h1>Agrega tu compra</h1>
				<select name="select" onChange={cambiarInput}>
					{products.map((product, index) => {
						return (
							<option key={index} value={product}>
								{product.producto}: valor = {product.precio}
							</option>
						);
					})}
				</select>
			</div>
			<div>
				<button onClick={agregarTabla}>Agregar</button>
				<button onClick={mostrarTablaHandler}>Listar</button>
			</div>
			{mostrarTabla && <Tablita datosProductos={listaCarrito} />}
		</div>
	);
}

export default App;
