import Carousel from "react-bootstrap/Carousel";
import ActionAreaCard from "./ActionAreaCard";
import ActionAreaCard2 from "./ActionAreaCard2";
import ActionAreaCard3 from "./ActionAreaCard3";
import { useContext } from "react";
import { ThemeContext } from "../Theme/useContext";
import { useNavigate } from "react-router-dom";

function UncontrolledExample() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div>
      <h3 onClick={() => navigate("/products")}>
        Click here and go to <samp id="text-red">products</samp> to see wines
      </h3>
      <Carousel className={theme}>
        <Carousel.Item className={theme}>
          <ActionAreaCard />
          <Carousel.Caption>{}</Carousel.Caption>
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
    </div>
  );
}

function AboutUs() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <div className="div-container-card">
        <UncontrolledExample />
      </div>
    </div>
  );
}

export default AboutUs;
