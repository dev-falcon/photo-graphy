import React from 'react'
import '../css/Vendors_page.css'
import Card_vendor from './Card_vendor';
import imagev from '../images/imagev.jpg'

import Reviews from '../../user_profile/jsx/Reviews';



const sampleData = [
    { 
      imgsrc: imagev, 
      vname: "Vaibhav", 
      location: "Raipur", 
      price: "20,000", 
      ppd: "20,000" 
    }, 
    { 
      imgsrc: imagev,
      vname: "Vaibhav",
      location: "Raipur",
      price: "20,000",
      ppd: "20,000"
    },
    {
      imgsrc: imagev,
      vname: "Vaibhav",
      location: "Raipur",
      price: "20,000",
      ppd: "20,000" 
    },
    {
      imgsrc: imagev,
      vname: "Vaibhav",
      location: "Raipur",
      price: "20,000",
      ppd: "20,000"
    },
    {
      imgsrc: imagev,
      vname: "Vaibhav",
      location: "Raipur",
      price: "20,000",
      ppd: "20,000"
    },
    {
      imgsrc: imagev,
      vname: "Vaibhav",
      location: "Raipur",
      price: "20,000",
      ppd: "20,000"
    },
  ];

export const Vendors_page = () => {
  return (
    <>



<div>

<div className="vendors-heading">
            <h3>
                Wedding Photography

            </h3>

            <p>
                Showing 45 Vendors around you
            </p>
        </div>

       
      <div className="vendors_section">

        <div className="vendor_cards">

        {sampleData.map((data) => (
          <Card_vendor
            imgsrc={data.imgsrc}
            vname={data.vname}
            location={data.location}
            price={data.price}
            ppd={data.ppd}
            className="vendor__cards_card"
          />
        ))}
        </div>
      </div>

      <div className="revws">
        <Reviews    />
      </div>
    </div>


    </>
  )
}
