import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Trainer from "./Trainer";
import { Navigate, useNavigate } from "react-router";
import useQuery from "../hooks/useQuery";

const getTrainers = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/trainers");
  return data;
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const navigate = useNavigate();

  const { data: trainers = [] } = useQuery(getTrainers);

  return (
    <Slider {...settings}>
      {trainers.map((item) => (
        <Trainer {...item} key={item.id} />
      ))}
    </Slider>
  );
};

export default Carousel;
