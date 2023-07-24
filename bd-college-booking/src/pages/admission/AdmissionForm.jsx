import React, { useState } from 'react';

const AdmissionForm = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prevCandidate) => ({ ...prevCandidate, [name]: value }));
  };

  const handleSubmit = () => {
    // Save candidate data to local storage or API
    // For simplicity, we'll just log the data for now
    console.log(candidate);
  };

  // Sample college names data
  const collegeNames = [
    { id: 1, name: 'College A' },
    { id: 2, name: 'College B' },
    { id: 3, name: 'College C' },
    // Add more college names as needed
  ];

  const [candidate, setCandidate] = useState({
    name: '',
    subject: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    image: '',
  });

  const handleCollegeClick = (collegeId) => {
    setSelectedCollege(collegeId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admission Form</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* College names */}
        {collegeNames.map((college) => (
          <div
            key={college.id}
            className={`p-2 border rounded cursor-pointer ${
              selectedCollege === college.id ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleCollegeClick(college.id)}
          >
            {college.name}
          </div>
        ))}
      </div>

      {selectedCollege && (
        <form className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="name"
            value={candidate.name}
            onChange={handleChange}
            placeholder="Candidate Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="subject"
            value={candidate.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={candidate.email}
            onChange={handleChange}
            placeholder="Candidate Email"
            className="p-2 border rounded"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={candidate.phoneNumber}
            onChange={handleChange}
            placeholder="Candidate Phone Number"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            value={candidate.address}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={candidate.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="p-2 border rounded"
          />
          <input
            type="url"
            name="image"
            value={candidate.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="p-2 border rounded"
          />
        </form>
      )}

      {selectedCollege && (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default AdmissionForm;
