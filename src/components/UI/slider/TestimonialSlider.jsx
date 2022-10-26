import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Tasty Treat is a food delivery app I have used it heavily,
          It has a great user interface and there are so many restaurants listed in it.Now it really saves my time . Tasty Treat gives a great user experience and gives us live tracking of your food and also I can see my delivery agent history, it builds trust and the more effective thing is I get my food at home without any searching of restaurants since I have to travel a lot."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Satvik Sharma</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "It is the best application I am using from last two years for ordering online food. I am totally satisfied with this with minimum time I get my food on my door step. It is very easy to use this application and can pay online with different methods.Most of the time I stay out of hometown and I do not have to worry about food because Tasty treat takes care of that. I can order food during night whenever I am working late and don't feel like cooking anything. I can order healthy food as well whenever I am on my diet."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Manvi Malhotra</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "This Food Ordering Application has many choices of Restaurants in it. Almost all good Restaurants in my city are present in this application that is Tasty Treat. The user interface is also very nice and easy to use. It saves the time and we can enjoy the delicious food while sitting in the home . And also I would like to thank Tasty Treat for its good service too."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Prabhakar Gupta</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
