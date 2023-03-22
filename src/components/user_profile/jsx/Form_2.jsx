import React,{useState} from 'react'
import "../css/form_1.css"


// category section




import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';




import bride_img from "../Images/gm/Rectangle 141.png"

const Form_2 = ({page, setpage}) => {

    const [open, setOpen] = React.useState(true);


    

    


    const handleClick = () => {
        setOpen(!open);
    };



    const [checked, setChecked] = useState([]);



    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

  return (
    <>

        <div className="Form_1">
           
        

        {/* coding the mid part */}



        



        {/* coding the main Form part */}



        <div className="personal_form">
            <div className="personal_form_left">
                <img src={bride_img} alt="" srcset="" />


            </div>

            <div className="personal_form_right">
                <p className="form_heading">

                    Grow your business with SHRI Photography 
                </p>

                <p className="form_heading_2nd">
                   Category Photography

                </p>


                <form action="#" className='main_personal_form'>

                  





                    {/* category section */}




                    <List 
                                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                               
                            >


                                <ListItemButton   onClick={handleClick}>
                                    
                                    <ListItemText className='main_personal_form_cat' primary="Categories"  />
                                    {open ?  <ExpandMore />:    <ExpandLess  />}
                                </ListItemButton>
                                <Collapse in={!open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>



                                        {
                                            console.log(checked)
                                        }



                                        <List dense  sx={{ width: '100%', maxWidth: '99%', bgcolor: 'background.paper' }}>
                                            {['Wedding Photography', 'Pre-Wedding Shoots', 'Cinematography', 'Candid Photography','Birthday Shoot'].map((value) => {
                                                const labelId = `checkbox-list-secondary-label-${value}`;
                                                return (
                                                    <ListItem  className='main_personal_form_cat' sx={{border:'1px solid black',}}
                                                        key={value}
                                                        secondaryAction={
                                                            <Checkbox
                                                                edge="end"
                                                                onChange={handleToggle(value)}
                                                                checked={checked.indexOf(value) !== -1}
                                                                inputProps={{ 'aria-labelledby': labelId }}
                                                            />
                                                        }
                                                        disablePadding
                                                    >
                                                        <ListItemButton style={{ fontSize: '28px', fontWeight: '600' }}>

                                                            <ListItemText id={labelId} primary={` ${value}`} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>





                                    </List>
                                </Collapse>
                            </List>


                            <textarea name="address" id="" placeholder='Your business address' cols="10" rows="5"></textarea>





                    <div className="changing_btns">

                    

                    <input type="submit" onClick={()=>{setpage((currPage)=>currPage-1)}} value="Previous" className='Submit_form_button' />

                    <input type="submit" onClick={()=>{setpage((currPage)=>currPage+1)}} value="Continue"  className='Submit_form_button continue' />

                    </div>

                   




                </form>
            </div>
        </div>







        </div>


    </>
  )
}

export default Form_2