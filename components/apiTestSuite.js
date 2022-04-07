import {NewContactTest} from "./new-contact-test/newContactTest";
import {GetAContactTest} from "./getAContactTest";
import {GetContactsTest} from "./getContactsTest";
import {List} from "@mui/material";


export function ApiTestSuite(props) {

	return (
			<List>
				<NewContactTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
				<GetAContactTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
				<GetContactsTest apiBaseUrl={props.apiBaseUrl} apiKey={props.apiKey}/>
			</List>
	);
}
