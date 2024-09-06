import React, { useState } from "react";
import Navbarcopy from "../components/Navbar/Navbarcopy";

// Sample data including prescriptions and patient photos
const dummyHospitals = [
  {
    id: 1,
    name: "AIIMS Delhi",
    patients: [
      {
        id: 1,
        name: "Aditya Nair",
        age: 32,
        date: "2024-08-10",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Sneha Das",
        age: 28,
        date: "2024-09-12",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
      },
      {
        id: 3,
        name: "Vikas Sharma",
        age: 47,
        date: "2024-07-25",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 4,
        name: "Anjali Menon",
        age: 27,
        date: "2024-06-15",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/25.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Hings Hospital",
    patients: [
      {
        id: 5,
        name: "Rohit Jain",
        age: 42,
        date: "2024-09-05",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
      },
      {
        id: 6,
        name: "Priyanka Reddy",
        age: 34,
        date: "2024-08-20",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        id: 7,
        name: "Karan Singh",
        age: 51,
        date: "2024-07-14",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
      },
      {
        id: 8,
        name: "Lavanya Bansal",
        age: 29,
        date: "2024-06-22",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Urgency-aid Hospital",
    patients: [
      {
        id: 9,
        name: "Vikram Khanna",
        age: 48,
        date: "2024-07-08",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/48.jpg",
      },
      {
        id: 10,
        name: "Pooja Deshmukh",
        age: 31,
        date: "2024-09-18",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/31.jpg",
      },
      {
        id: 11,
        name: "Sanjay Tiwari",
        age: 38,
        date: "2024-06-12",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/38.jpg",
      },
      {
        id: 12,
        name: "Megha Agarwal",
        age: 36,
        date: "2024-07-18",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/36.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Fellis Healthcare",
    patients: [
      {
        id: 13,
        name: "Arjun Kapoor",
        age: 50,
        date: "2024-09-25",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      {
        id: 14,
        name: "Kavya Rao",
        age: 33,
        date: "2024-06-19",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
      },
      {
        id: 15,
        name: "Sunil Shetty",
        age: 45,
        date: "2024-08-02",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 16,
        name: "Reema Iyer",
        age: 30,
        date: "2024-07-22",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/30.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Grit-India Hospitals",
    patients: [
      {
        id: 17,
        name: "Nikhil Verma",
        age: 37,
        date: "2024-08-09",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
      },
      {
        id: 18,
        name: "Aditi Sinha",
        age: 41,
        date: "2024-07-30",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/41.jpg",
      },
      {
        id: 19,
        name: "Prakash Rao",
        age: 43,
        date: "2024-09-03",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
      },
      {
        id: 20,
        name: "Sonia Chawla",
        age: 27,
        date: "2024-06-25",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/27.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "GEU Hospital",
    patients: [
      {
        id: 21,
        name: "Ravi Bhatia",
        age: 35,
        date: "2024-07-11",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 22,
        name: "Seema Kohli",
        age: 29,
        date: "2024-08-27",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
      },
      {
        id: 23,
        name: "Nitin Mehra",
        age: 47,
        date: "2024-09-09",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/47.jpg",
      },
      {
        id: 24,
        name: "Sushmita Roy",
        age: 34,
        date: "2024-06-30",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/34.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Ramvati Hospital",
    patients: [
      {
        id: 25,
        name: "Rakesh Thakur",
        age: 44,
        date: "2024-07-17",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/44.jpg",
      },
      {
        id: 26,
        name: "Shweta Kaul",
        age: 31,
        date: "2024-08-15",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/31.jpg",
      },
      {
        id: 27,
        name: "Kunal Pandey",
        age: 39,
        date: "2024-07-26",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/39.jpg",
      },
      {
        id: 28,
        name: "Alisha Singh",
        age: 30,
        date: "2024-09-12",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/30.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "North East Hospital",
    patients: [
      {
        id: 29,
        name: "Varun Dubey",
        age: 37,
        date: "2024-08-05",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
      },
      {
        id: 30,
        name: "Nisha Mehta",
        age: 34,
        date: "2024-07-20",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/34.jpg",
      },
      {
        id: 31,
        name: "Amit Kulkarni",
        age: 40,
        date: "2024-09-08",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/40.jpg",
      },
      {
        id: 32,
        name: "Rina Patel",
        age: 26,
        date: "2024-06-18",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/26.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Ahem Modi Hospital",
    patients: [
      {
        id: 33,
        name: "Abhishek Gupta",
        age: 49,
        date: "2024-08-03",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/49.jpg",
      },
      {
        id: 34,
        name: "Shalini Raj",
        age: 29,
        date: "2024-09-10",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
      },
      {
        id: 35,
        name: "Manish Kumar",
        age: 52,
        date: "2024-07-29",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
      },
      {
        id: 36,
        name: "Meenal Yadav",
        age: 32,
        date: "2024-08-17",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Apollo Hospital",
    patients: [
      {
        id: 37,
        name: "Harsh Chatterjee",
        age: 35,
        date: "2024-07-21",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
      },
      {
        id: 38,
        name: "Renu Sharma",
        age: 36,
        date: "2024-06-26",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/36.jpg",
      },
      {
        id: 39,
        name: "Naveen Jain",
        age: 42,
        date: "2024-08-11",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
      },
      {
        id: 40,
        name: "Kiran Dhawan",
        age: 28,
        date: "2024-07-16",
        status: "Pending",
        photo: "https://randomuser.me/api/portraits/women/28.jpg",
      },
    ],
  },
];

const PharmacyPage = () => {
  const [expandedHospitalId, setExpandedHospitalId] = useState(null);

  const handleToggle = (id) => {
    setExpandedHospitalId(expandedHospitalId === id ? null : id);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbarcopy />
      <h1 className="bg-gradient-to-br from-yellow-500 via-red-600 to-orange-300 p-8 rounded-lg text-2xl font-extrabold text-white text-center mb-6">
        Pharmacy Page
      </h1>
      {dummyHospitals.map((hospital) => (
        <div
          key={hospital.id}
          className="bg-white shadow-md rounded-lg mb-6 border border-blue-200"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition duration-200 ease-in-out"
            onClick={() => handleToggle(hospital.id)}
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {hospital.name}
            </h2>
            <span className="text-blue-600 font-medium">
              {expandedHospitalId === hospital.id ? "Hide" : "Show"} Patients
            </span>
          </div>
          {expandedHospitalId === hospital.id && (
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hospital.patients.map((patient) => (
                <div
                  key={patient.id}
                  className="border border-blue-300 rounded-lg p-4 bg-blue-50 shadow-sm"
                >
                  <div className="flex justify-center mb-4">
                    <img
                      src={patient.photo}
                      alt={patient.name}
                      className="w-32 h-40 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center">
                    {patient.name}
                  </h3>
                  <p className="text-sm text-blue-600 mb-2 text-center">
                    Age: {patient.age}
                  </p>
                  <p className="text-sm text-blue-600 mb-2 text-center">
                    Appointment Date: {patient.date}
                  </p>
                  <div className="bg-blue-100 p-3 rounded-md">
                    <h4 className="font-medium text-blue-700">Prescription:</h4>
                    <ul className="list-disc list-inside text-sm text-blue-600 mt-2">
                      <li>Medication A - 1 Tablet Daily</li>
                      <li>Medication B - Benadryl Syrup with Warm Water</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PharmacyPage;
