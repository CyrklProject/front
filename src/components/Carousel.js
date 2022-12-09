import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePickerS from '../Pages/Calendar';
import './Carousel.css';

export default function ControlledCarousel() {
  return (
    <Carousel className="carousel--container">
      <Carousel.Item className="carousel--item">
        <Carousel.Caption className="carousel--caption">
          <DatePickerS />
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <DatePickerS />
          <p>2eme</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Carousel.Caption>
          <DatePickerS />
          <p>3eme</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
