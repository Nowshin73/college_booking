import React, { useEffect, useState } from "react";

const AdmissionForm = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [colleges, setColleges] = useState([]);

  const [candidate, setCandidate] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    sscYear: "",
    sscRoll: "",
    sscGpa: "",
    sscGroup: "",
    hscYear: "",
    hscRoll: "",
    hscGpa: "",
    hscGroup: "",
    permanentAddress: "",
    presentAddress: "",
    guardian: "",
    monthlyIncome: "",
  });


  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, []);

  const handleCollegeClick = (collegeId) => {
    setSelectedCollege(collegeId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedCollege) return alert("Please select a college");

  const selectedCollegeData = colleges.find(
    (clg) => clg.id === selectedCollege
  );

  const applicationData = {
    userId: user?.uid,
    userEmail: user?.email,
    collegeName: selectedCollegeData?.collegename,
    appliedDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    candidateDetails: candidate,
  };

  try {
    const res = await fetch("http://localhost:5000/admissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    const data = await res.json();

    console.log("Submitted:", data);

    Swal.fire({
      icon: "success",
      title: "Application Submitted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

  } catch (error) {
    console.error("Submission Error:", error);
  }
};

const inputClass =
  "p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full bg-white";


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center p-8">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8">

        {/* Title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-indigo-700">🎓 College Admission Form</h1>
          <p className="text-gray-500">Select a college and submit your details</p>
        </div>

        {/* College Selection */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Choose a College</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colleges.map((college) => (
              <div
                key={college.id}
                onClick={() => handleCollegeClick(college.id)}
                className={`p-3 text-center rounded-lg border-2 cursor-pointer transition shadow-sm hover:shadow-md ${selectedCollege === college.id
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
                  }`}
              >
                <p className="font-semibold">{college.collegename}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Candidate Form */}
        {selectedCollege && (
          <div className="mt-8 bg-indigo-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold text-indigo-700 mb-4">
              Admission Application
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input name="name" value={candidate.name} onChange={handleChange} placeholder="Candidate Name" className={inputClass} />
              <input name="fatherName" value={candidate.fatherName} onChange={handleChange} placeholder="Father's Name" className={inputClass} />
              <input name="motherName" value={candidate.motherName} onChange={handleChange} placeholder="Mother's Name" className={inputClass} />

              <input name="sscYear" value={candidate.sscYear} onChange={handleChange} placeholder="SSC Examination Year" className={inputClass} />
              <input name="sscRoll" value={candidate.sscRoll} onChange={handleChange} placeholder="SSC Roll Number" className={inputClass} />
              <input name="sscGpa" value={candidate.sscGpa} onChange={handleChange} placeholder="SSC GPA (Out of 5)" className={inputClass} />

              <select name="sscGroup" value={candidate.sscGroup} onChange={handleChange} className={inputClass}>
                <option value="">SSC Group</option>
                <option>Science</option>
                <option>Commerce</option>
                <option>Arts</option>
              </select>

              <input name="hscYear" value={candidate.hscYear} onChange={handleChange} placeholder="HSC Examination Year" className={inputClass} />
              <input name="hscRoll" value={candidate.hscRoll} onChange={handleChange} placeholder="HSC Roll Number" className={inputClass} />
              <input name="hscGpa" value={candidate.hscGpa} onChange={handleChange} placeholder="HSC GPA (Out of 5)" className={inputClass} />

              <select name="hscGroup" value={candidate.hscGroup} onChange={handleChange} className={inputClass}>
                <option value="">HSC Group</option>
                <option>Science</option>
                <option>Commerce</option>
                <option>Arts</option>
              </select>

              <input name="permanentAddress" value={candidate.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className={inputClass} />
              <input name="presentAddress" value={candidate.presentAddress} onChange={handleChange} placeholder="Present Address" className={inputClass} />

              <input name="guardian" value={candidate.guardian} onChange={handleChange} placeholder="Guardian Name" className={inputClass} />
              <input name="monthlyIncome" value={candidate.monthlyIncome} onChange={handleChange} placeholder="Monthly Income (BDT)" className={inputClass} />
            </form>

            <button
              onClick={handleSubmit}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow"
            >
              Submit Application
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdmissionForm;
