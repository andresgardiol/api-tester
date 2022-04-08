import {useState} from "react";
import {ApiTestSuite} from "../components/apiTestSuite";
import {
	AppBar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton, Paper,
	TextField,
	Toolbar,
	Typography
} from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';

export default function Home() {

	const [apiBaseUrl, setApiBaseUrl] = useState(null);
	const [apiKey, setApiKey] = useState(null);

	function handleSubmit() {
		return event => {
			event.preventDefault();
			setApiBaseUrl(null);
			setApiKey(null);
			setApiBaseUrl(event.target.apiBaseUrl.value);
			setApiKey(event.target.apiKey.value);
		};
	}

	return (
			<Box sx={{flexGrow: 1}}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{mr: 2}}
						>
						</IconButton>
						<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
							Contacts API Tester App
						</Typography>
					</Toolbar>
				</AppBar>

				<Card sx={{minWidth: 275}}>
					<CardContent>
						<Typography variant="h5" component="div">
							Configuración inicial
						</Typography>
						<Typography sx={{mb: 1.5}} color="text.secondary">
							Ingresa la URL base de tu API y el token JWT.
						</Typography>
					</CardContent>
					<form onSubmit={handleSubmit()}>
						<CardActions>
							<TextField name="apiBaseUrl" id="outlined-basic" label="URL base" variant="outlined" />
							<TextField name="apiKey" id="outlined-basic" label="token JWT" variant="outlined"/>
						</CardActions>
						<CardActions>
							<Button type="submit" size="small" variant="contained" endIcon={<BugReportIcon/>}>Iniciar</Button>
						</CardActions>
					</form>
				</Card>

				{apiBaseUrl && apiKey &&
						<Card style={{marginTop: "20px"}}>
							<CardContent style={{backgroundColor: "#dcdcdc"}}>
								<Typography variant="h5" component="div">
									Pruebas
								</Typography>
								<Typography sx={{mb: 1.5}} color="text.secondary">
									Prueba las funcionalidades de la API.
								</Typography>
								<ApiTestSuite apiBaseUrl={apiBaseUrl} apiKey={apiKey}/>
							</CardContent>
						</Card>
				}
			</Box>
	);
}

