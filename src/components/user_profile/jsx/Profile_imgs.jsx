import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import CardData from '../../avinash/wedding/Categories/CardData'
import RightArrowIcon from '../assets/right-arrow.png';
import LeftArrowIcon from '../assets/left-arrow.png';




const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};




const Profile_imgs = () => {

  return (

    <>



<ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>




{CardData.map((item) => (
    <Box
        key={item.id}
       
        // m="0 10px"
    >

    {/* {item.imgPart } */}

        

    </Box>

))}



</ScrollMenu>

    </>
  )


}



export default Profile_imgs;