import Carousel from "react-bootstrap/Carousel";
import ActionAreaCard from "./ActionAreaCard";
import ActionAreaCard2 from "./ActionAreaCard2";
import ActionAreaCard3 from "./ActionAreaCard3";
import { useContext } from "react";
import ThemeContext from "../Theme/useContext";

function UncontrolledExample() {
  const theme = useContext(ThemeContext);

  return (
    <Carousel className={theme}>
      <Carousel.Item className={theme}>
        <ActionAreaCard />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ActionAreaCard2 />
        <Carousel.Caption>{/* tituo  */}</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ActionAreaCard3 />
        <Carousel.Caption>{/* tituo  */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function AboutUs({ theme }) {
  return (
    <div className={theme}>
      <div className="div-container-card">
        <UncontrolledExample />
      </div>
    </div>
  );
}

export default AboutUs;
