import React from 'react'
import "./Wedding.css"

// Wedding photography

import wedding_1 from "../images/wedding-1.png";

import wedding_2 from "../images/wedding-2.png";

import wedding_3 from "../images/wedding-3.png";

import wedding_4 from "../images/wedding-4.png";

import wedding_5 from "../images/wedding-5.png";



// 
import group_1 from "../images/Group 21.png";
import group_2 from "../images/Group 22.png";

// album img

import album_img from "../images/pexels-jonathan-borba-3014856.png";
import Slider from './Categories/Slider';



import {  Deluxe,Elegent, Royal, Elegent_opt, Royal_opt, Deluxe_opt, Wedding_price} from "./Categories/Wedding_catg"




function Wedding() {
    return (
        <>

            <Slider />


            <div className="main-wedding-photography">

                <h3 className="wedding-photography-heading">
                    Wedding Photography
                </h3>


                <div className="wedding-photography">

                    <div className="photography-row">

                        <img src={wedding_1} alt="" className="row-1" />
                        <img src={wedding_2} alt="" className="row-1" />
                        {/* <img src={wedding_3} alt="" className="row-1" /> */}

                    </div>

                    <div className="photography-row">

                        <img src={wedding_3} alt="" className="row-1 " />
                        <img src={wedding_4} alt="" className="row-2 ffst" />



                    </div>

                    <div className="photography-row">
                        <img src={wedding_5} alt="" className="row-3 ssnd" />
                    </div>


                </div>

            </div>





            {/* <Slider /> */}


            {/* services section */}

            <div className="services-section">




                <div className="service-title">
                    <h3 className="service-heading">
                        Elegent
                    </h3>
                </div>



                <div className="wedding-card">

                    <div className="card-img">

                        <img src={group_1} alt="" srcset="" />

                    </div>

                    <div className="card-details">
                        <h2 className="card-title">
                            ELEGENT
                        </h2>

                        <div className="card-data">
                            <ul className="ul-data">

                                {
                                    Elegent.map(packs => <li className='li-data'>
                                        {packs}
                                    </li>
                                    )
                                }

                                <h4 className='output'>
                                Output 
                            </h4>

                            {
                                    Elegent_opt.map(packs => <li className='li-data'>
                                        {packs}
                                    </li>
                                    )
                                }


                                


                            </ul>
                        </div>

                        <div className="card-priceing">
                            <span className="price">{Wedding_price.Elegent}</span>

                            <button className='book-now'>Book Now</button>
                        </div>
                    </div>

                </div>










                {/* 2nd service part */}
                {/* 2nd service part */}
                {/* 2nd service part */}
                {/* 2nd service part */}





                <div className="service-title">
                    <h3 className="service-heading">
                        Deluxe
                    </h3>
                </div>



                <div className="wedding-card even">

                    <div className="card-img">

                        <img src={group_2} alt="" srcset="" />

                    </div>

                    <div className="card-details">
                        <h2 className="card-title">
                            DELUXE
                        </h2>

                        <div className="card-data">
                            <ul className="ul-data">
                                {
                                    Deluxe.map((pack,index) => {return <li className='li-data' key={index}>
                                       
                                            {pack}
                                        </li>
                                    })
                                }

                                <h4 className='output'>
                                Output 
                            </h4>

                            {
                                    Deluxe_opt.map(packs => <li className='li-data'>
                                        {packs}
                                    </li>
                                    )
                                }
                            </ul>

                           
                        </div>

                        <div className="card-priceing">
                            <span className="price">Rs. 22000</span>

                            <button className='book-now'>Book Now</button>
                        </div>
                    </div>

                </div>








                {/* 3rd service part */}
                {/* 3rd service part */}
                {/* 3rd service part */}
                {/* 3rd service part */}



























                <div className="service-title">
                    <h3 className="service-heading">
                        Royal
                    </h3>
                </div>



                <div className="wedding-card">

                    <div className="card-img">

                        <img src={group_1} alt="" srcset="" />

                    </div>

                    <div className="card-details">
                        <h2 className="card-title">
                            Royal
                        </h2>

                        <div className="card-data">
                        <ul className="ul-data">
                                {
                                    Royal.map((packs,index) => { return <li className='li-data' key={index}>
                                        
                                            {packs}
                                        </li>
                                    })
                                }

                                <h4 className='output'>
                                Output 
                            </h4>

                            {
                                    Royal_opt.map(packs => <li className='li-data'>
                                        {packs}
                                    </li>
                                    )
                                }
                            </ul>
                        </div>

                        <div className="card-priceing">
                            <span className="price">Rs. 35000</span>

                            <button className='book-now'>Book Now</button>
                        </div>
                    </div>

                </div>














            </div>





            {/* Album section Starts here */}
            {/* Album section Starts here */}
            {/* Album section Starts here */}




            <div className="album-section">


                <div className="album-heading-part">
                    <h3 className="album-heading">
                        Album
                    </h3>
                </div>


                <div className="album-card-part">
                    <div className="album-card">

                        <img className='album-card' src={album_img} alt="" srcset="" />

                        <button className='book-album'>Book Now</button>

                    </div>
                    <div className="album-card">

                        <img className='album-card' src={album_img} alt="" srcset="" />

                        <button className='book-album'>Book Now</button>

                    </div>
                    <div className="album-card">

                        <img className='album-card' src={album_img} alt="" srcset="" />
                        <button className='book-album'>Book Now</button>

                    </div>
                </div>



                {/* <div className="album">
                    <div className="album-img" style={{ backgroundImage: `url(${album_img})` }}>

                    </div>
                    <button className='book-album'>Book Now</button>


                </div>

                <div className="album">
                    <div className="album-img" style={{ backgroundImage: `url(${album_img})` }}>

                    </div>
                    <button className='book-album'>Book Now</button>


                </div>


                <div className="album">
                    <div className="album-img" style={{ backgroundImage: `url(${album_img})` }}>

                    </div>
                    <button className='book-album'>Book Now</button>


                </div> */}

            </div>















            {/*  




        <div className="wedding-card">

            <div className="card-img">

            <img src={group_1} alt="" srcset="" />

            </div>

        <div className="card-details">
            <h2 className="card-title">
                ELEGENT
            </h2>

            <div className="card-data">
                <ul className="ul-data">
                    <li className="li-data">
                        Traditional Photo
                    </li>

                    <li className="li-data">
                        Traditional Photo
                    </li>

                    <li className="li-data">
                        Traditional Photo
                    </li>

                    <li className="li-data">
                        Traditional Photo
                    </li>

                    <li className="li-data">
                        Traditional Photo
                    </li>
                </ul>
            </div>

            <div className="card-priceing">
                <span className="price">Rs. 16000</span>

                <button className='book-now'>Book Now</button>
            </div>
        </div>

        </div>




 */}






        </>
    )
}

export default Wedding