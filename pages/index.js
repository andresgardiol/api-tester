import {useState} from "react";
import {ApiTestSuite} from "../components/apiTestSuite";

export default function Home() {

	const [apiBaseUrl, setApiBaseUrl] = useState('');
	const [apiKey, setApiKey] = useState('');

	return (
			<div className="ContactsTesterApp">
				<header>
					Contacts API Tester App
					<form onSubmit={(event => {
						event.preventDefault();
						setApiBaseUrl(event.target.apiurl.value);
						setApiKey(event.target.apikey.value);
					})}>
						<input name="apiurl" type="string" placeholder="Ingresa la url de tu API" required/>
						<input name="apikey" type="string" placeholder="Ingresa el token JWT de tu API" required/>
						<button type="submit">Iniciar test</button>
					</form>
				</header>
				{apiBaseUrl && apiKey &&
						<ApiTestSuite apiBaseUrl={apiBaseUrl} apiKey={apiKey}/>
				}
			</div>
	);
}

