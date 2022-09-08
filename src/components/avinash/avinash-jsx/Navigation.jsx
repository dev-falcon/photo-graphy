import React, {useState } from 'react'
import Drawer from '../avinash-jsx/Drawer'
import Navbar from '../avinash-jsx/Navbar'

function Navigation() {

    const [isOpen, setisOpen] = useState(false)

    const [drawer, setdrawer]=useState(false)


    const toggleDrawer=()=>{
        setisOpen(!isOpen);
    }

    const offDrawer = ()=>{
        setisOpen(!isOpen);
    }

   



  return (
    <>

        {isOpen &&  <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} drawer={drawer} offDrawer={offDrawer} /> }

       
        <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />

    </>
  )
}

export default Navigation