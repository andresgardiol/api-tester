import {useEffect, useState} from "react";

export function GetAContactTest(props) {
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

	const [contact, setContact] = useState({});
	useEffect(() => {
		let request = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${props.apiKey}`
			}
		};
		fetch(`${props.apiBaseUrl}/contacto/${newContact.id}`, request)
				.then(response => response.json())
				.then(data => {
					setContact(data);
				});
	}, [newContact]);


	return <li>
		<h3>Obtener 1 contacto</h3>
		<p>
			<strong>URL:</strong> {`${props.apiBaseUrl}/contacto/${newContact.id}`}
		</p>
		<p>
			<strong>Request:</strong>
			<p>Headers</p>
			<pre>{JSON.stringify({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${props.apiKey}`
				}
			}, null, 2)}</pre>
		</p>
		<p>
			<strong>Response:</strong>
			<p>Body</p>
			<pre>{JSON.stringify(contact, null, 2)}</pre>
		</p>
	</li>;
}
