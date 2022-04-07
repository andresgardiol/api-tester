import {useEffect, useState} from "react";

export function GetContactsTest(props) {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		let request = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${props.apiKey}`
			}
		};
		fetch(`${props.apiBaseUrl}/contactos`, request)
				.then(response => response.json())
				.then(data => {
					setContacts(data);
				});
	}, []);

	return <li>
		<h3>Obtener contactos</h3>
		<p>
			<strong>URL:</strong> {`${props.apiBaseUrl}/contactos`}
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
			<p>Body</p>
			<pre>{JSON.stringify({
				nombre: 'John Doe',
				celular: 123456789
			}, null, 2)}</pre>
		</p>
		<p>
			<strong>Response:</strong>
			<p>Body</p>
			<pre>{JSON.stringify(contacts, null, 2)}</pre>
		</p>
	</li>;
}
