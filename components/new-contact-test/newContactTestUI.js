import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

function MoreVertIcon() {
	return null;
}

function FavoriteIcon() {
	return null;
}

function ShareIcon() {
	return null;
}

export function NewContactTestUI(props) {

	return (
			<Card sx={{maxWidth: 345}}>
				<CardHeader
						avatar={
							<Avatar sx={{bgcolor: "red"}} aria-label="recipe">
								J
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
					<Typography variant="body2" color="text.secondary">
						Direccion: Calle {props.newContact.direccion.calle} - Numero {props.newContact.direccion.numero}
					</Typography>
				</CardContent>
			</Card>
	);
}
