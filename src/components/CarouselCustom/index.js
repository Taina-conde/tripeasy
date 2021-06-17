import Carousel from "react-bootstrap/Carousel";
import trip from "../../assets/images/annie-spratt-qyAka7W5uMY-unsplash.jpg";
import hotel from "../../assets/images/paul-postema-mr0Dp231IEw-unsplash.jpg";
import restaurant from "../../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import schedule from "../../assets/images/sonja-langford-eIkbSc3SDtI-unsplash.jpg";
import budget from "../../assets/images/rupixen-com-pbgYcq3_Zx0-unsplash.jpg";
import "./CarouselCustom.scss";

const CarouselCustom = () => {
  return (
    <Carousel className = "h-100">
      <Carousel.Item>
        <img className="d-block " src={trip} alt="trip" />
        <Carousel.Caption>
          <h3>Manage your trips</h3>
          <p>TripEasy helps you manage your trips so you can have a stress free well-deserved vacation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={hotel} alt="hotel" />
        <Carousel.Caption>
          <h3>Accomodation</h3>
          <p>Find your ideal accomodation in your destination and manage your bookings.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={restaurant} alt="restaurant" />

        <Carousel.Caption>
          <h3>Taste the best food in town</h3>
          <p>TripEasy helps you find and make reservations in the most recommended restaurants in your destination</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={schedule} alt="schedule" />
        <Carousel.Caption>
          <h3>Daily Schedule</h3>
          <p>We automatically save your flight, accomodation and restaurant reservations details in your daily schedule so you won't miss anything</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={budget} alt="budget" />

        <Carousel.Caption>
          <h3>Stay on budget</h3>
          <p> You can scan your receipts or enter other expenses to track how much you are spending</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselCustom;
