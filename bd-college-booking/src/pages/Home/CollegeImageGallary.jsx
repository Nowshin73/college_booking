import React from "react";

const CollegeImageGallery = () => {
  // Dummy data for illustration purposes
  const collegeImages = [
    "image_url_1.jpg",
    "image_url_2.jpg",
    "image_url_3.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">College Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collegeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`College Graduate Group ${index + 1}`}
            className="w-full h-40 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeImageGallery;
