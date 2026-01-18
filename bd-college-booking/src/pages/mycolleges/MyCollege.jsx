import React, { useState } from 'react';
import user from "../user/User.json";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const MyCollege = () => {
  const selectedColleges = user.applied_colleges.filter(
    (college) => college.status === "passed"
  );

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div className="container  font-serif  md:p-6 flex flex-col w-full  justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">
        My Selected Colleges 🎓
      </h1>

      {selectedColleges.length === 0 ? (
        <p className="text-gray-500">You have not been selected in any college yet.</p>
      ) : (
        <div className="md:w-[80vw] grid  gap-6">
          {selectedColleges.map((college) => (
            <div key={college.college_id} className="bg-white shadow rounded-xl p-4">
              <img
                src={college.clgimage}
                alt={college.college_name}
                className="w-full h-40 md:h-52 object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-3 text-gray-800">
                {college.college_name}
              </h2>

              {/* Reviews */}
              <h3 className="font-semibold mt-3 text-gray-700">Reviews</h3>
              {reviews
                .filter((r) => r.collegeId === college.college_id)
                .map((review, index) => (
                  <Review key={index} review={review} />
                ))}

              {/* Add Review */}
              <ReviewForm collegeId={college.college_id} addReview={addReview} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollege;
