import {useEffect, useState} from "react";
import {
	Accordion, AccordionDetails,
	AccordionSummary,
	Collapse, List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import GetContactsTestUI from "../get-contact-test/getContactsTestUI";

function ExpandMoreIcon() {
	return null;
}

export function GetContactsTest(props) {
	const [contacts, setContacts] = useState([]);
	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState(true);
	const [error, setError] = useState(false);

	const handleChange =
			(panel) => (event, isExpanded) => {
				setExpanded(isExpanded ? panel : false);
			};

	const handleClick = () => {
		setOpen(!open);
	};


	let url = `${props.apiBaseUrl}/contactos`;
	useEffect(() => {
		let request = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${props.apiKey}`
			}
		};
		fetch(url, request)
				.then(response => response.json())
				.then(data => {
					setContacts(data);
				})
				.catch(error => {
					setError(true);
				});
	}, []);

	return (
			<div style={{marginTop: "10px"}}>
				<ListItemButton style={{backgroundColor: "#fff"}} onClick={handleClick}>
					<ListItemIcon>
						{error ? <ErrorOutlineIcon sx={{color: "red"}}/> : <CheckCircleOutlineSharpIcon color="success"/>}
					</ListItemIcon>
					<ListItemText primary="Test case: Obtener contactos"/>
					{open ? <ExpandLess/> : <ExpandMore/>}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
						<AccordionSummary
								expandIcon={<ExpandMoreIcon/>}
								aria-controls="panel1bh-content"
								id="panel1bh-header">
							<Typography sx={{width: '33%', flexShrink: 0}}>
								<strong>URL:</strong>
							</Typography>
							<Typography sx={{color: 'text.secondary'}}> API base url: {url}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								API base url: {url}`}
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
						<AccordionSummary
								expandIcon={<ExpandMoreIcon/>}
								aria-controls="panel2bh-content"
								id="panel2bh-header"
						>
							<Typography sx={{width: '33%', flexShrink: 0}}>
								<strong>Request:</strong>
							</Typography>
							<Typography sx={{color: 'text.secondary'}}>
								Headers and body of the request
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<strong>Headers:</strong>
								<pre>{JSON.stringify({
									method: 'GET',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': `Bearer ${props.apiKey}`
									}
								}, null, 2)}</pre>
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
						<AccordionSummary
								expandIcon={<ExpandMoreIcon/>}
								aria-controls="panel2bh-content"
								id="panel2bh-header"
						>
							<Typography sx={{width: '33%', flexShrink: 0}}>
								<strong>Response:</strong>
							</Typography>
							<Typography sx={{color: 'text.secondary'}}>
								Response body
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<strong>Body:</strong>
								<pre>{JSON.stringify(contacts, null, 2)}</pre>
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
						<AccordionSummary
								expandIcon={<ExpandMoreIcon/>}
								aria-controls="panel2bh-content"
								id="panel2bh-header">
							<Typography sx={{width: '33%', flexShrink: 0}}>
								<strong>UI:</strong>
							</Typography>
							<Typography sx={{color: 'text.secondary'}}>
								Componente gráfico usando los datos
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<List sx={{ width: '100%', maxWidth: 360}}>
									{contacts.contactos &&
											contacts.contactos.map(contact => (
													<GetContactsTestUI key={contact.id} contact={contact}/>
											))
									}
								</List>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Collapse>
			</div>
	)
			;
}
