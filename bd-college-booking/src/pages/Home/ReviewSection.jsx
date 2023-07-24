import React from 'react';

const ReviewSection = ({ collegeName, reviews }) => {
  return (
    <div className="py-8 px-8 bg-slate-50">
      <h2 className="text-2xl font-bold mb-4">Reviews for {collegeName}</h2>
      <div className='flex flex-wrap '>
      {reviews.map((review, index) => (
        <div key={index} className="border shadow-lg rounded-lg  p-4 mb-4 ">
          <p className="text-lg font-semibold mb-2">{review.username}</p>
          <p className="text-gray-600 mb-2">{review.comment}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 flex">{Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 fill-current ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 1l2.928 6.236 6.144.898-4.454 4.74 1.049 6.126-5.667-3.14-5.666 3.14 1.048-6.126L.928 8.134 7.071 7.236 10 1z" />
              </svg>
            ))}</span>
            <span className="ml-2 text-gray-600">{review.rating}</span>
          </div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default ReviewSection;
