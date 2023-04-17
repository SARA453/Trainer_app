import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Class from "./Class";
import { Navigate, useNavigate } from "react-router";
import useQuery from "../hooks/useQuery";
import { axiosInstance } from "../util/axiosInstance";

const getClasses = async () => {
  const { data } = await axiosInstance.get("/api/v1/classes");
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

  const { data: classes = [] } = useQuery(getClasses);

  return (
    <Slider {...settings}>
      {classes.map((item) => (
        <Class
          {...item}
          key={item.id}
          onClick={() => navigate(`/classes/${item.id}`)}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
