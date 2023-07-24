import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="bg-gray-100 p-4 rounded my-2">
      <p className="font-bold">{review.username}</p>
      <p>{review.comment}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default Review;
