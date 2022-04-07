import {useEffect, useState} from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Collapse,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography
} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {NewContactTestUI} from "./newContactTestUI";

function ExpandMoreIcon() {
	return null;
}

export function NewContactTest(props) {
	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState(true);
	const [newContact, setNewContact] = useState({});
	const [error, setError] = useState(false);

	const handleChange =
			(panel) => (event, isExpanded) => {
				setExpanded(isExpanded ? panel : false);
			};

	const handleClick = () => {
		setOpen(!open);
	};
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
				})
				.catch(error => {
					setError(true);
				});
	}, []);

	return (
			<div>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						{error ? <ErrorOutlineIcon sx={{color: "red"}}/> : <CheckCircleOutlineSharpIcon color="success"/>}
					</ListItemIcon>
					<ListItemText primary="Crear contacto"/>
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
							<Typography sx={{color: 'text.secondary'}}> API base url: {`${props.apiBaseUrl}/contacto`}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								API base url: {`${props.apiBaseUrl}/contacto`}
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
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
										'Authorization': `Bearer ${props.apiKey}`
									}
								}, null, 2)}</pre>
								<strong>Body:</strong>
								<pre>{JSON.stringify({
									nombre: 'John Doe',
									celular: 123456789
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
								<pre>{JSON.stringify(newContact, null, 2)}</pre>
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
								<NewContactTestUI newContact={newContact}/>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Collapse>
			</div>
	);
}
