import React from "react";

const Tablita = (props) => {
	const { datosProductos } = props;

	if (!Array.isArray(datosProductos)) {
		return;
	}

	let total = 0;

	return (
		<table>
			<thead>
				<tr>
					<th>Producto</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				{datosProductos.map((producto, index) => {
					total += producto.precio;
					return (
						<tr key={index}>
							<td>{producto.producto}</td>
							<td>{producto.precio}</td>
						</tr>
					);
				})}
				<tr>
					<td>Total</td>
					<td>{total}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Tablita;
