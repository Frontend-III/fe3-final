import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

const CardO = ({ odontologo }) => {
	return (
		<>
			<Card sx={{ width: 300, height: 400 }}>
				<CardHeader title={odontologo.name} subheader={odontologo.username} />
				<CardMedia
					component="img"
					height="194"
					image="https://media.revistagq.com/photos/5ca5fd6e3492a940f5bf1bf0/1:1/w_511,h_511,c_limit/doctor_mike_gq_5080.jpg"
					alt="Paella dish"
				/>

				<CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					<Button variant="contained" color="primary">
						Details
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default CardO;
