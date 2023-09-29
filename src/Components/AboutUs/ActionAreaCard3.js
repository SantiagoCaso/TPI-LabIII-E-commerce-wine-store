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
        <CardContent style={{ marginBottom: "30px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Wine lovers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The distribution of wine is an essential process that connects the
            production with wine lovers around the world. One of our priority is
            to ensure that wines reach customers efficiently and in the best
            possible conditions. This process plays a crucial role in the
            promotion and availability of a wide range of wines, from deep reds
            to refreshing whites and elegant sparkling wines.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard3;
