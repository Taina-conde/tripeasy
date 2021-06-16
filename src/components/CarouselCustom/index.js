import Carousel from "react-bootstrap/Carousel";
import trip from "../../assets/images/annie-spratt-qyAka7W5uMY-unsplash.jpg";
import hotel from "../../assets/images/paul-postema-mr0Dp231IEw-unsplash.jpg";
import restaurant from "../../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import schedule from "../../assets/images/sonja-langford-eIkbSc3SDtI-unsplash.jpg";
import budget from "../../assets/images/rupixen-com-pbgYcq3_Zx0-unsplash.jpg";

const CarouselCustom = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={trip} alt="trip" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hotel} alt="hotel" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={restaurant} alt="restaurant" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={schedule} alt="schedule" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={budget} alt="budget" />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselCustom;
