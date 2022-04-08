import {useEffect, useState} from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary, CircularProgress,
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
	const [open, setOpen] = useState(false);
	const [newContact, setNewContact] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const handleChange =
			(panel) => (event, isExpanded) => {
				setExpanded(isExpanded ? panel : false);
			};

	const handleClick = () => {
		setOpen(!open);
	};

	let url = `${props.apiBaseUrl}/contacto`;
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
		fetch(url, request)
				.then(response => {
					if (response.status != 200) {
						setError(true);
					}
					return response.json();
				})
				.then(data => {
					setNewContact(data);
				})
				.catch(error => {
					setError(true);
				})
				.finally(() => {
					setLoading(false);
				});
	}, []);

	return (
			<div>
				<ListItemButton style={{backgroundColor: "#fff"}} onClick={handleClick}>
					<ListItemIcon>
						{loading ?
								<CircularProgress/> :
								error ?
										<ErrorOutlineIcon sx={{color: "red"}}/> :
										<CheckCircleOutlineSharpIcon color="success"/>
						}
					</ListItemIcon>
					<ListItemText primary="Test case: Crear contacto"/>
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
								API base url: {url}
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
								{error ? "Error" :
										<NewContactTestUI newContact={newContact}/>
								}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Collapse>
			</div>
	);
}
