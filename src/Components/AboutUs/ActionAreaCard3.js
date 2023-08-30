import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./AboutUs.css";
import Vinos from "./distribucion de vino.jpg";

function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="gif"
          height="140"
          width="400px"
          image={Vinos}
          alt="green iguana"
        />
        <img src={Vinos} alt="Vinos" className="img-carousel"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Los amantes del vino
          </Typography>
          <Typography variant="body2" color="text.secondary">
            La distribución del vino es un proceso esencial que conecta la
            producción de las bodegas con los amantes del vino en todo el mundo.
            Aseguranos que los vinos lleguen a los clientes de manera eficiente
            y en las mejores condiciones posibles es nuestra prioridad. Este
            proceso juega un papel crucial en la promoción y disponibilidad de
            una amplia gama de vinos, desde los tintos profundos hasta los
            refrescantes blancos y los elegantes espumosos.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard3;
