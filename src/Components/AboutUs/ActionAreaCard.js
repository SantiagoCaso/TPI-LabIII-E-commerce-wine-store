import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Vinedos from "./Vinedos.jpg";

function ActionAreaCard() {
  return (
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Un tributo al arte de la paciencia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los viñedos, lugares donde la naturaleza y la tradición se
            entrelazan en una danza armoniosa, son el hogar de una de las artes
            más antiguas y respetadas: la viticultura. Estas extensiones de
            tierra cultivada se dedican al cultivo de la vid, una planta que da
            vida a una amplia variedad de uvas, y a su vez, a la producción de
            uno de los elixires más emblemáticos de la humanidad: el vino. Desde
            las colinas ondulantes de la Toscana hasta las vastas llanuras de la
            región de Mendoza en Argentina, los viñedos no solo son un
            testimonio de la conexión entre el ser humano y la tierra, sino
            también un tributo al arte de la paciencia y el cuidado meticuloso.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
