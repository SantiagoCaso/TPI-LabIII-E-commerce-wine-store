import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaPlus } from "react-icons/fa";
import "./AboutUs.css";

function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FaPlus />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En medio de filas ordenadas de cepas de vid, cada estación cuenta
            una historia única. La primavera despierta la viña con un estallido
            de hojas frescas y brotes llenos de promesa. El cálido beso del
            verano baña las uvas en un sol cariñoso, permitiéndoles madurar
            lentamente su sabor distintivo. El otoño trae consigo la cosecha,
            cuando las manos cuidadosas seleccionan con esmero cada racimo,
            capturando la esencia de la tierra y el clima en cada fruto. Incluso
            el invierno, con su descanso temporal, es esencial para el ciclo
            vital de la viña, preparándola para un nuevo ciclo de crecimiento.
            <br></br>
            <br></br>
            Los viñedos no solo representan la habilidad del viticultor para
            transformar la naturaleza en una obra maestra embotellada, sino que
            también son un reflejo de la región y el terruño en el que crecen.
            Cada viñedo tiene su propio carácter, influenciado por el tipo de
            suelo, la altitud, el clima y la pasión del equipo que cuida de él.
            Los visitantes que recorren las filas de vides pueden saborear la
            esencia misma de la tierra, capturada en cada sorbo de vino.
            <br></br>
            <br></br>Ya sea por la elegancia de un vino tinto envejecido en
            roble, la frescura de un blanco aromático o la efervescencia de un
            espumante celebratorio, los viñedos nos invitan a explorar una
            cultura que se ha arraigado en la historia humana durante milenios.
            Con cada botella descorchada, se abre un portal a la tierra, al
            clima y a la pasión que dan vida a esta antigua tradición. Los
            viñedos son mucho más que simples extensiones de tierra; son
            testigos del arte, la ciencia y la dedicación que convergen en cada
            gota de vino, compartiendo con el mundo un pedazo de la tierra en la
            que florecen.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BasicAccordion;
