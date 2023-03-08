import React from "react";
import GitExpertApp from "../GitExpertApp";

const Tablita = (GitExpertApp) => {
	return <Table>{props.value}</Table>;
};

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => (
		// Correcto! La key debería ser especificada dentro del array.
		<ListItem key={number.toString()} value={number} />
	));
	return <ul>{listItems}</ul>;
}

export default Tablita;
