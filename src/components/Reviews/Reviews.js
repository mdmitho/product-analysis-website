import React, { useState } from 'react';
import useLaptop from '../Hooks/useLaptop';
import Coment from '../Coment/Cometn';



const Reviews = () => {
    const [coments,setComents]=useLaptop()

 
    return (
       
     
        <div>
            <h1 className='mt-5 text-center color'>Customer Reviews</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 rounded-pill">
      {
        coments.map(coment => 
             <Coment
             key={coment.id}
             coment={coment}>

             </Coment>
            )
      }
      </div>
          
        </div>
    );
};

export default Reviews;