import React, { Component } from "react";
import Slider from "react-slick";
import CardData from "./CardData"
import "./Slider.css"



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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

      <div className="main-card" key={index}>
          <div className="catg-card-img">
              <img src={card.imgPart} alt="img" srcset="" />
          </div>

          <div className="card-text">
              <p>
                  {card.text}
              </p>
          </div>
      </div>



  )
}






    return (
      <div>
        <h2 className="heading">
          Categories
        </h2>

        <Slider {...settings} >

       

        
        {CardData.map(renderCard)}

          
        </Slider>
      </div>
    );
  }
}