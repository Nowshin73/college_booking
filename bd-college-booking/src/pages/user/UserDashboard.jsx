import React from "react";
import user from "./User.json";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">

      {/* Page Title */}
      <div className="mb-8 bg-white/80 backdrop-blur rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold text-indigo-800">🎓 My Dashboard</h1>
        <p className="text-gray-600">
          Track your admissions, exams, results & research submissions.
        </p>
      </div>

      {/* Applied Colleges */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 shadow rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-5 border-b border-indigo-300 pb-2">
          Applied Colleges
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.applied_colleges.map((college) => (
            <div key={college.college_id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 border-l-4 border-indigo-500">
              
              <img
                src={college.clgimage}
                alt={college.college_name}
                className="h-40 w-full object-cover rounded-md"
              />

              <div className="mt-3 space-y-1">
                <h3 className="text-lg font-bold text-gray-800">{college.college_name}</h3>
                <p className="text-sm text-gray-500">Admission Date: {college.admission_date}</p>

                <p className="text-sm">
                  Status:
                  <span
                    className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${
                      college.status === "passed"
                        ? "bg-green-200 text-green-800"
                        : college.status === "failed"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {college.status}
                  </span>
                </p>

                {!college.fee_paid && (
                  <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg shadow">
                    💳 Pay Application Fee
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Exams */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 shadow rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-purple-800 mb-5 border-b border-purple-300 pb-2">
          Upcoming Exams
        </h2>

        <div className="space-y-3">
          {user.applied_colleges
            .filter((c) => c.exam_date)
            .map((college) => (
              <div key={college.college_id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                <div>
                  <p className="font-semibold text-gray-800">{college.college_name}</p>
                  <p className="text-sm text-gray-500">Exam Date: {college.exam_date}</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm shadow">
                  📄 Download Admit Card
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Exam Results */}
      <section className="bg-gradient-to-r from-green-100 to-teal-100 shadow rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-5 border-b border-green-300 pb-2">
          Exam Results
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {user.applied_colleges.map((college) => (
            <div key={college.college_id} className="p-4 rounded-lg bg-white shadow-md border-l-4 border-green-500">
              <p className="font-semibold text-gray-800">{college.college_name}</p>
              <p className="text-sm text-gray-600">
                Marks: <span className="font-bold text-indigo-700">{college.marks}</span> / {college.total_marks}
              </p>
              <p className="text-sm">
                Result:
                <span className={college.status === "passed" ? "text-green-700 font-bold ml-2" : "text-red-700 font-bold ml-2"}>
                  {college.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Merit List */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 shadow rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-5 border-b border-yellow-300 pb-2">
          Merit List
        </h2>

        <div className="space-y-3">
          {user.applied_colleges.map((college) => (
            <div key={college.college_id} className="p-4 bg-white rounded-lg shadow-md flex justify-between border-l-4 border-yellow-500">
              <div>
                <p className="font-semibold text-gray-800">{college.college_name}</p>
                <p className="text-sm text-gray-600">
                  Rank: {college.rank} / Called Students: {college.called_students}
                </p>
              </div>
              <span className={`font-semibold ${college.status === "passed" ? "text-green-700" : "text-red-700"}`}>
                {college.status === "passed" ? "🎉 Selected" : "❌ Not Selected"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Research */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-5 border-b border-blue-300 pb-2">
          Submit Research Paper
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <input type="file" className="border border-indigo-300 p-2 rounded w-full md:w-auto bg-white"/>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow">
            📤 Submit Research
          </button>
        </div>
      </section>

    </div>
  );
};

export default UserDashboard;
