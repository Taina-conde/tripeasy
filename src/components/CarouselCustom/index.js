import Carousel from "react-bootstrap/Carousel";
import hotel from "../../assets/images/paul-postema-mr0Dp231IEw-unsplash.jpg";

const CarouselCustom = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hotel}
          alt="hotel"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt=""
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt=""
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselCustom;
