import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(review);
    addReview(review);

    setReview({ username: "", comment: "", rating: 5 });
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 mt-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4">
        ✍️ Add Your Review
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="username"
            value={review.username}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Review
          </label>
          <textarea
            name="comment"
            value={review.comment}
            onChange={handleChange}
            placeholder="Write your feedback about the college..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Rating
          </label>
          <select
            name="rating"
            value={review.rating}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          >
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Bad</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
