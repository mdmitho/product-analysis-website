import React from 'react';
import './Coment.css'

const Cometn = (props) => {

    const {name,img,review,rating}=props.coment
    console.log(props);
    

    return (
     

<div className="">

<div className="col">
    <div className="card">
        <img src={img} className=" img" alt="" />
        <div className="card-body">
            <h6><small className='color'>Name</small> : {name}</h6>
            <p><small className='color'>Review</small> : {review}</p>
            <p><small className='color'>Rating : {rating}</small></p>
        </div>
    </div>
</div>



</div>

      
    );
};

export default Cometn;