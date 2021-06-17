import Carousel from "react-bootstrap/Carousel";
import trip from "../../assets/images/annie-spratt-qyAka7W5uMY-unsplash.jpg";
import hotel from "../../assets/images/paul-postema-mr0Dp231IEw-unsplash.jpg";
import restaurant from "../../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import schedule from "../../assets/images/sonja-langford-eIkbSc3SDtI-unsplash.jpg";
import budget from "../../assets/images/rupixen-com-pbgYcq3_Zx0-unsplash.jpg";
import "./CarouselCustom.scss";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const CarouselCustom = () => {
  return (
    <Carousel className = "h-100" indicators ={false} nextIcon = {<span><IoIosArrowDropright size= {40}/></span>} prevIcon = {<span><IoIosArrowDropleft size= {40}/></span>}>
      <Carousel.Item>
        <img className="d-block " src={trip} alt="trip" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={hotel} alt="hotel" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={restaurant} alt="restaurant" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={schedule} alt="schedule" />
      
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={budget} alt="budget" />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselCustom;
