import ComponentApp from "../ComponentApp";
import FirstApp from "../FirstApp";
import GitExpertApp from "../GitExpertApp";

const Tablita = [1, 2, 3, 4, 5];
const doubled = Tablita.map((number) => number * 2);
console.log(doubled);

const Tabla1 = [1, 2, 3, 4, 5];
const listItems = Tabla.map((number) => <li>{number}</li>);

<ul>{listItems}</ul>;

function ListItem(props) {
	// No hay necesidad de especificar la key aquí:
	return <li>{props.value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => (
		// La key debería ser especificada dentro del array.
		<ListItem key={number.toString()} value={number} />
	));
	return <ul>{listItems}</ul>;
}
