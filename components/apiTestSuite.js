import {NewContactTest} from "./new-contact-test/newContactTest";
import {GetAContactTest} from "./get-contact-test/getAContactTest";
import {GetContactsTest} from "./get-contacts-test/getContactsTest";
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
