import React, { useState } from "react";
import ComponentApp from "./ComponentApp";

const FirstApp = ({ value }) => {
	const [counter, setCounter] = useState(0);
	const handleAdd = () => {
		setCounter(counter + 1);
	};
	const handleSubstract = () => {
		setCounter(counter - 1);
	};
	const handleReset = () => {
		setCounter(0);
	};

	return (
		<>
			<h1> Counter </h1>
			<span className=""> {counter} </span>
			<hr />
			<button onClick={() => handleAdd()}> +1 </button>
			<button onClick={() => handleSubstract()}> -1 </button>
			<button onClick={() => handleReset()}> 0 </button>
		</>
	);
};

export default FirstApp;
