import React from 'react';
import BannerImage from '../../Assets/Images/Cool-Water-For-Men-125-ml-EDT.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className="row align-items-center mt-5">
                <div className="col-md-6">
                    <div className="banner-text">
                        <h1>Davidoff Cool Water <span>For Men</span></h1>
                        <p>Experience Cool Water Eau de Toilette from Davidoff. Discover the original marine fragrance for men, inspired by the freshness of the ocean. Cool Water, the aromatic essence of masculine vitality, power and seduction.</p>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="banner-img">
                        <img className='img-fluid' src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;