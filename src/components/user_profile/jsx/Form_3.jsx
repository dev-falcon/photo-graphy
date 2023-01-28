import React, { useEffect, useState } from 'react'
import "../css/form_3.css"




import Chip from '@mui/material/Chip';



const Form_3 = () => {


    




// handling the gig title and gig description

const [title, settitle] = useState("");

const [desc, setdesc] = useState("");

const [wordcount_title, setwordcount_title] = useState(0)

const [wordcount_desc, setwordcount_desc] = useState(0)



const changeHandler=(e)=>{
    
    const limit =50;
    settitle(e.target.value.slice(0,limit));

    
}



const changeHandler_desc=(e)=>{
  
    const limit=300;
    setdesc(e.target.value.slice(0,limit));
}

useEffect(() => {
    // array of words
   setwordcount_title(title.length);

   

   setwordcount_desc(desc.length);






  
  }, [title][desc]);


//  //  //  //  //


    

const [basic_name, setbasic_name] = useState("");

const [standard_name, setstandard_name] = useState("");

const [premium_name, setpremium_name] = useState("");

const [basic_category, setbasic_category] = useState([]);

const [standard_category, setstandard_category] = useState([]);


const [premium_category, setpremium_category] = useState([]);




//  for basic packages

const handleDelete_basic = (basic_category) => () => {
    setbasic_category((chips) => chips.filter((chip) => chip.id !== basic_category.id));
  };

//   for standard packages

const handleDelete_standard=(standard_category)=>()=>{

    setstandard_category((chips)=>
    chips.filter((chip)=>
    chip.id !==standard_category.id ));

};


const handleDelete_premium=(premium_category)=>()=>{

    setpremium_category((chips)=>
    chips.filter((chip)=>
    chip.id !==premium_category.id ));

};







  return (
    <>
<hr />

<div className="packages_section">
    Packages
</div>

<hr />


<section className='package_section'>




{/* basic section */}







<div className="package_heading">
    Basic
</div>
<div className="package_heading_desc">
    Tell us the basic packages that you provide
</div>


<form action="#" className='profile_information_1'>


<div className="Profile_info_basic">



<div className="fst_package_section_1">



<label htmlFor="Services"className='services'>Services *</label>

<div className="input_cover">

<input type="text" placeholder='Type services (E.G. Traditional Photography)' value={basic_name} 

onChange={e=>setbasic_name(e.target.value)}

 /> 



<button
  

    
    onClick={(e)=>{
        e.preventDefault();

        if (basic_name.trim().length == 0) {
      alert('invalid input ');

        }else{

       

        setbasic_name(" ");
        setbasic_category([
            ...basic_category,
            {id:basic_category.length+1,
            name:basic_name}
        ]);
    }
    }}
>Add</button>

</div>


</div>






<div className='selected_category'>

    <ul>
        {basic_category.map(cat=>(

            <li
            key={cat.id}>

           <Chip
              
              label={cat.name}
              onDelete={cat.label === ' ' ? undefined : handleDelete_basic(cat)}
            />

         

            </li>


        ))}
    </ul>
</div>






<div className="fst_package_section_2">



<label htmlFor="Services" className='set_price'>Set Price *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the price for basic package' /> 



</div>





</div>






<div className="fst_package_section_3">



<label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the delivery time of project (E.G. 1 Week)' /> 

</div>





</div>





</div>


<hr />





































{/* standard section */}



<div className="package_heading_standard">
    Standard
</div>


<div className="package_heading_desc">
    Tell us the standard packages that you provide
</div>








<div className="Profile_info_standard">



<div className="fst_package_section_1">



<label htmlFor="Services"className='services'>Services *</label>

<div className="input_cover">
<input type="text" placeholder='Type services (E.G. Traditional Photography)'  value={standard_name}
    onChange={e=>setstandard_name(e.target.value)}
/> 

<button onClick={(e)=>{
        e.preventDefault();

if(standard_name.trim().length == 0)
{
    alert('invald input');
}
   else{
        setstandard_name(" ");
        setstandard_category([
            ...standard_category,
            {id:standard_category.length+1,
            name:standard_name}
        ]);
        }
    }}



>Add</button>

</div>

</div>





<div className='selected_category'>

    <ul>
        {standard_category.map(cat=>(

            <li
            key={cat.id}>

           <Chip
              
              label={cat.name}
              onDelete={cat.label === ' ' ? undefined : handleDelete_standard(cat)}
            />

         

            </li>


        ))}
    </ul>
</div>





<div className="fst_package_section_2">



<label htmlFor="Services" className='set_price'>Set Price *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the price for standard package'    /> 

</div>





</div>






<div className="fst_package_section_3">



<label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the delivery time of project (E.G. 1 Week)' /> 

</div>





</div>





</div>


<hr />













{/* Premium Section */}












<div className="package_heading_premium">
    Premium
</div>


<div className="package_heading_desc">
    Tell us the premium packages that you provide
</div>








<div className="Profile_info_premium">



<div className="fst_package_section_1">



<label htmlFor="Services"className='services'>Services *</label>

<div className="input_cover">
<input type="text" placeholder='Type services (E.G. Traditional Photography)'  value={premium_name} 
onChange={e=>setpremium_name(e.target.value)} /> 

<button  onClick={(e)=>{
        e.preventDefault();

        if (premium_name.trim().length == 0) {
               
               alert('invalid input ');

        }else{
        
        setpremium_name(" ");
        setpremium_category([
            ...premium_category,
            {id:premium_category.length+1,
            name:premium_name}
        ]);

        }
    }}

>Add</button>

</div>

</div>



<div className='selected_category'>

    <ul>
        {premium_category.map(cat=>(

            <li
            key={cat.id}>

           <Chip
              
              label={cat.name}
              onDelete={cat.label === ' ' ? undefined : handleDelete_premium(cat)}
            />

         

            </li>


        ))}
    </ul>
</div>





<div className="fst_package_section_2">



<label htmlFor="Services" className='set_price'>Set Price *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the price for premium package' /> 

</div>





</div>






<div className="fst_package_section_3">



<label htmlFor="Services " className='delivery_time'>Project delivery time *</label>

<div className="input_cover">
<input type="text" placeholder='Enter the delivery time of project (E.G. 1 Week)' /> 

</div>





</div>





</div>


<hr />






{/* gig section */}






<div className="fst_package_section_4">



<label htmlFor="Services " className='delivery_time'>Gig Title*</label>

<div className="input_cover">

<textarea name="" id=""  rows="4" 


value={title}
onChange={changeHandler}

placeholder='I will do something i am really good at (e.g. I will do beautiful wedding photography professionally)' >


</textarea>


</div>


</div>
{/* <span>word limit 50</span> */}



<span className='word_limit'>word limit {wordcount_title}/50</span>
<hr />















{/* gig desc */}








<div className="fst_package_section_5">



<label htmlFor="Services " className='delivery_time'>Gig Description*</label>

<div className="input_cover">

<textarea name="" id=""  rows="4"

value={desc}

onChange={changeHandler_desc}

placeholder='Give a detail description of yourself !!!' >


</textarea>
{/* <span>word limit 300</span> */}

</div>

</div>



<span className='word_limit'>word limit {wordcount_desc}/300</span>







<div className="submit_btn">

    <button >
        Save And Continue
    </button>
</div>


<hr />




</form>

</section>


    </>
  )
}

export default Form_3