import {NewContactTest} from "./newContactTest";
import {GetAContactTest} from "./getAContactTest";
import {GetContactsTest} from "./getContactsTest";

export function ApiTestSuite(props) {

	return (
			<div>
				<h2>Tests:</h2>
				<ul>
					<NewContactTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
					<GetAContactTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
					<GetContactsTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
				</ul>
			</div>
	);
}
