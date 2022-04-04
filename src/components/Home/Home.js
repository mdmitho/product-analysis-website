import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import useLaptop from '../Hooks/useLaptop';
import './Home.css'
import Salider from '../Salider/Salider';
import Reviews from '../Reviews/Reviews';
import CustomLink from '../CustomLInk/CustomLink';



const Home = () => {
    const [coments,setComents]=useLaptop()
   
   
    return (
        <div>
            <Salider></Salider>
           <h1 className='text-center mt-5 mb-5 color'>Customer Reviews (3)</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 rounded-pill">
          {
               coments.slice(1,4).map(coment => <CustomerReviews
               key={coment.id}
               coment={coment}
               ></CustomerReviews>)
           }
          </div>
        <div className=" mt-5 text-center mb-5">
            <CustomLink to="/reviews" ><button className="review-btn">See All Reviews</button></CustomLink>
        </div>
        </div>
    );
};

export default Home;