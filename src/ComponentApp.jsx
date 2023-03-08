import React from "react";
import { useState } from "react";

const categories = ["first category", "second category"];
const setCategory = () => {};

const ComponentApp = () => {
	const [category, setCategory] = useState("");

	const inputChange = (e) => {
		console.log(e.target.value);
		setCategory(e.target.value);
	};

	return (
		<>
			<h1>GitExpert</h1>
			<ol>
				{categories.map((category, key) => {
					return <li key={key}> {category}</li>;
				})}
			</ol>
			<input
				type="text"
				onChange={(e) => {
					inputChange(e);
				}}
			></input>
			<button onClick={() => setCategory()}> category </button>
		</>
	);
};

export default ComponentApp;
