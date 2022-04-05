import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useReviews from '../../hooks/useReviews';
import Home from '../Home/Home';
import './Reviews.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  // const [reviews, setReviews] = useState([]);

  // // load json data
  // useEffect(() => {
  //   fetch('reviews.json')
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  return (
    <div className="container">
      <div className="review-wrapper mt-5">
        <div className="row ">
          {reviews.map((review) => (
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
                <p className='rating'>
                <Rating className='me-2'
                  initialRating={review.rating}
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                  readonly
                ></Rating>({review.rating})
                </p>
                <p>{review.review}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
