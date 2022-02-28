import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slides.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AMD3 from '../Images/amd3.webp';
import AMD5 from '../Images/amd5.webp';
import AMD7 from '../Images/amd7.webp';
import AMD9 from '../Images/amd9.webp';
import I3 from '../Images/i3.png';
import I5 from '../Images/i5.png';
import I7 from '../Images/i7.png';
import I9 from '../Images/i9.png';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "blue", fontSize: "30px" }} />
    </div>
  )
}
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "blue", fontSize: "30px" }} />
    </div>
  )
}

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
}

const Card = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="itemImages"
        src={props.item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "16px", padding: "1px 0", color: "orange" }}>{props.info1}</p>
      <p style={{ fontSize: "14px", padding: "1px 0", color: "gray" }}>{props.info2}</p>
      <p style={{ fontSize: "14px", padding: "1px 0", color: "gray" }}>{props.info3}</p>
    </div>
  )
}

const Slides2 = () => {
  return (
    <div style={{ margin: "0px" }} className="carousel">
      <Slider {...carouselProperties}>
        <Card item={AMD3} info1="AMD Ryzen 3" info2="hello" info3="hello"></Card>
        <Card item={AMD5} info1="AMD Ryzen 5" info2="hello" info3="hello"></Card>        
        <Card item={AMD7} info1="AMD Ryzen 7" info2="hello" info3="hello"></Card>
        <Card item={AMD9} info1="AMD Ryzen 9" info2="hello" info3="hello"></Card>
        <Card item={I3} info1="Intel i3" info2="hello" info3="hello"></Card>
        <Card item={I5} info1="Intel i5" info2="hello" info3="hello"></Card>
        <Card item={I7} info1="Intel i7" info2="hello" info3="hello"></Card>        
        <Card item={I9} info1="Intel i9" info2="hello" info3="hello"></Card>
      </Slider>
    </div>
  )
}

export default Slides2