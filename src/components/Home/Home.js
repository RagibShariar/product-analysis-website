import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BannerImage from '../../Assets/Images/Cool-Water-For-Men-125-ml-EDT.jpg';
import useReviews from '../../hooks/useReviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='container '>
            <div className="row align-items-center mt-5 mb-5">
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
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2 className='mb-4 mt-4 text-center'>What Our Client's Says</h2>
                    {/* <h1>{reviews.length}</h1> */}
                </div>
            </div>
            <div className="row mb-3">
          {reviews.slice(0,3).map((review) => (
            <div className="col-md-4">
              <div className="single-review mb-4" key={review.id}>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid review-thumb me-3 mb-3"
                    src={review.img}
                    alt=""
                  />
                  <h5 className="">{review.name}</h5>
                </div>
                <p>{review.review}</p>
                <p className='rating'>Ratings: {review.rating}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
            <div className="col-md-12 text-center">
            <Link
        className='text-center mb-5 see-more-reviews-btn'
        to={'/reviews'}
      >See More Reviews</Link>
            </div>
        </div>
        </div>
    );
};

export default Home;