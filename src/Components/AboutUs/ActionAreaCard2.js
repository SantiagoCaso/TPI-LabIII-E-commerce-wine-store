import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Bodega from "./bodega-de-vinos.jpg";
import "./AboutUs.css";

function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="gif"
          height="140"
          width="400px"
          image={Bodega}
          alt="green iguana"
        />
        <img src={Bodega} className="img-carousel"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Barricas de roble
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los vinos se almacenan en lugares especialmente diseñados para
            preservar y mejorar sus cualidades con el tiempo. Las bodegas son el
            corazón de este proceso, ya que ofrecen un entorno controlado de
            temperatura, humedad y oscuridad. Tanto las bodegas subterráneas
            como las modernas salas de almacenamiento están destinadas a
            proteger los vinos de las fluctuaciones climáticas y la luz solar.
            El envejecimiento en barricas de roble en estas bodegas añade
            profundidad y complejidad a los vinos, permitiendo que desarrollen
            sus sabores y aromas distintivos antes de estar listos para ser
            disfrutados por los amantes del vino.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard2;
