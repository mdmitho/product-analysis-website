import React from 'react';

const CustomerReviews = (props) => {
    const {name,img,review,rating}=props.coment
  
    return (
        <div>


            <div className="col">
    <div className="card">
        <div className="d-flex">
      <div className="mt-4 ms-5">
      <img src={img} className=" img" alt="" />
      </div>
      <div className="mt-5 ms-3">
      <h6><small className='color'>{name}</small></h6>
      <p><small className='color'>Rating : {rating}</small></p>
      </div>
        </div>
        <div className="card-body">
          
            <p><small className='color'>Review</small> : {review}</p>
            
        </div>
    </div>
</div>

        </div>
    );
};

export default CustomerReviews;