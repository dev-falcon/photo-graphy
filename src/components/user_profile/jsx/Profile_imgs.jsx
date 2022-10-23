import React, { Component } from "react";
import Slider from "react-slick";
import "../css/Main_profile.css"
import CardData from "./CardData"


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    const renderCard=(card,index)=>{

      return(

        <div className="images_part" key={index}>

        <div className="single_image">
          <img src={card.imgPart} alt="img" srcset="" />
        </div>

        </div>

        




      )
    };



    return (
      <div>
        
        <Slider {...settings}>
         

            {CardData.map(renderCard)}


        </Slider>
      </div>
    );
  }
}