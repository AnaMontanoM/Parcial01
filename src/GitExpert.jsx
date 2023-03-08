import React, { useState } from "react";
// import Tablita from "./components/Tablita";

export const GitExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const [category, setCategory] = useState("");

	const onAddCategory = () => {
		setCategories((list) => [...list, category]);

		setCategory("");
	};

	const onSetCategory = (evt) => {
		setCategory(evt.target.value);
	};

	return (
		<>
			<h1>Digita tu compra con su valor</h1>

			<input
				type="text"
				value={category}
				onChange={(event) => onSetCategory(event)}
			/>

			<button onClick={() => onAddCategory()}>
				Añadir tu compra al carrito
			</button>

			<ol>
				{categories.map((category, key) => {
					return <li key={key}>{category}</li>;
				})}
			</ol>
		</>
	);
};

export default GitExpertApp;
