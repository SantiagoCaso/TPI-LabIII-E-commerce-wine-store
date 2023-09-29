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
        <CardContent style={{ marginBottom: "30px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Oak barrels
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wines are stored in places specially designed for conserve and
            improve its quaility over time. The wineries are the heart of this
            process, as they offer a controlled environment of temperature,
            humidity and darkness. Both, the underground cellars as moderns
            storage rooms, are intended to protect wines from weather
            fluctuactions and sunlight. Aging in oak barrels in the wineries,
            adds depth and complexity to the wines, allowing them to develop
            their distinctive flavors and scent before they are ready to be
            enjoyed by wine lovers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard2;
