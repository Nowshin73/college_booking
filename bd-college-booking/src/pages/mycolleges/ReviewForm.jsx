import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState({
    username: '',
    comment: '',
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = () => {
    // Save review to local storage or API
    // For simplicity, we'll just log the review for now
    console.log(review);
    addReview(review);
    // Clear the form fields
    setReview({ username: '', comment: '', rating: 5 });
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Add a Review</h3>
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="username"
          value={review.username}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 border rounded"
        />
        {/* Add other input fields for comment and rating */}
        {/* ... */}
      </form>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
      