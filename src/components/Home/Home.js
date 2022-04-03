import React from 'react';
// import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Reviews from '../Reviews/Reviews';
import Salider from '../Salider/Salider';
import useLaptop from '../Hooks/useLaptop';

const Home = () => {
    const [coments, setComent]=useLaptop()
    console.log(coments);
    return (
        <div>
            <Salider></Salider>
            {
                coments.map(coment => <Reviews
                    key={coment.id}
                    coment={coment}
                    ></Reviews>)
            }
        </div>
    );
};

export default Home;