import React from 'react';
import img from '../images/colin-rex-434213.jpg';

const Home = () => {
    return (
        <div>
            <div>Home</div>
            <img className="responsive-img" src={img} />
        </div>
    );
};

export default Home;