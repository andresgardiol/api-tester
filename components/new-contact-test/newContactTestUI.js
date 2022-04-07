import {Avatar, Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";


function MoreVertIcon() {
	return null;
}

export function NewContactTestUI(props) {

	return (
			<Card sx={{maxWidth: 345}}>
				<CardHeader
						avatar={
							<Avatar sx={{bgcolor: "red"}} aria-label="recipe">
								{props.newContact.nombre && props.newContact.nombre[0]}
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon/>
							</IconButton>
						}
						title={props.newContact.nombre}
						subheader={`Nro: ${props.newContact.celular}`}
				/>
				<CardContent>
					{props.newContact.direccion &&
							<Typography variant="body2" color="text.secondary">
								Direccion: Calle {props.newContact.direccion.calle} - Número {props.newContact.direccion.numero}
							</Typography>
					}
				</CardContent>
			</Card>
	);
}
