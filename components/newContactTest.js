import {useEffect, useState} from "react";

export function NewContactTest(props) {
	const [newContact, setNewContact] = useState({});
	useEffect(() => {
		let request = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nombre: 'John Doe',
				celular: 123456789
			})
		};
		fetch(`${props.apiBaseUrl}/contacto`, request)
				.then(response => response.json())
				.then(data => {
					setNewContact(data);
				});
	}, []);

	return <li>
		<h3>Crear contacto</h3>
		<p>
			<strong>URL:</strong> {`${props.apiBaseUrl}/contacto`}
		</p>
		<p>
			<strong>Request:</strong>
			<p>Headers</p>
			<pre>{JSON.stringify({
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${props.apiKey}`
				}
			}, null, 2)}</pre>
			<p>Body</p>
			<pre>{JSON.stringify({
				nombre: 'John Doe',
				celular: 123456789
			}, null, 2)}</pre>
		</p>
		<p>
			<strong>Response:</strong>
			<p>Body</p>
			<pre>{JSON.stringify(newContact, null, 2)}</pre>
		</p>
	</li>;
}
