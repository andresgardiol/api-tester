import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";

export default function GetContactsTestUI(props) {

	return (
			<ListItem>
				<ListItemButton >
					<Avatar sx={{bgcolor: "red"}} aria-label="recipe">
						{props.contact.nombre[0]}
					</Avatar>
					<ListItemText sx={{paddingLeft: "10px"}} primary={props.contact.nombre} secondary={`Nro: ${props.contact.celular}`}/>
				</ListItemButton>
			</ListItem>
	)
}
