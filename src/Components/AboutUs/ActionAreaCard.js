import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Vinedos from "./Vinedos.jpg";
import "./ActionCard.css";

function ActionAreaCard({theme}) {
  return (
    <div className={theme}>
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="gif"
          height="140"
          width="400px"
          image={Vinedos}
          alt="green iguana"
        />
        <img src={Vinedos} alt="Vinedos"></img>
        <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
            A tribute to the art of patience.
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            Vineyards. The home to one of the oldest and most respected arts: the vilticulture. 
            These lands are dedicated to the cultivation of vine: a plant that gives life to a
            wide variety of grapes and, in the same way, to the production of one of humanity's 
            most emblematic elixirs: wine.
            From the hills of Tuscana to the vast plains of Mendoza (Argentina), vineyards
            are not only a testimony of the connection between a man and the land, but also 
            a tribute to the art of patiencie and care.             
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ActionAreaCard;
