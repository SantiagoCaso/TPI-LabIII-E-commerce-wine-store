import Carousel from "react-bootstrap/Carousel";
import ActionAreaCard from "./ActionAreaCard";
import ActionAreaCard2 from "./ActionAreaCard2";
import ActionAreaCard3 from "./ActionAreaCard3";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
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

function AboutUs() {
  return (
    <div className="div-container-card">
      <UncontrolledExample />
    </div>
  );
}

export default AboutUs;
