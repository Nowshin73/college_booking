import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

const MyCollege = () => {
  const [collegeDetails] = useState({
    name: 'XYZ College',
    image: 'https://i.ibb.co/NjXLXqX/image.png',
    // Add other college details here
    // ...
  });

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{collegeDetails.name}</h1>
      <img src={collegeDetails.image} alt={collegeDetails.name} className="w-32 h-32 mb-4" />
      {/* Display other college details here */}
      {/* ... */}
      <h2 className="text-xl font-bold my-4">Reviews</h2>
      <div>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))
        )}
      </div>
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default MyCollege;
