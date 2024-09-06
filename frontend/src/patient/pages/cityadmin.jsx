import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbarcopy from '../components/Navbar/Navbarcopy';
import { HoverBorderGradient } from '../components/ui/pageheadings';
import { BackgroundGradient } from '../components/ui/gradient';

// Dummy data for hospitals and patients
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
        }
      
];

const CityAdminPage = () => {
  const [expandedHospitalId, setExpandedHospitalId] = useState(null);

  // Function to toggle the expanded state of a hospital
  const toggleExpand = (hospitalId) => {
    setExpandedHospitalId((prevId) => (prevId === hospitalId ? null : hospitalId));
  };

  return (
    <div className="bg-red-50 min-h-screen">
      <Navbarcopy />
      
      <div className="flex justify-center items-center">
        <BackgroundGradient
          containerClassName="p-8 rounded-lg"
          animate={true}
        >
          <HoverBorderGradient
            containerClassName="rounded-half"
            as="button"
            className="text-3xl bg-blue-400 text-white flex items-center space-x-2"
          >
            <AceternityLogo />
            <span>City Admin Dashboard</span>
          </HoverBorderGradient>
          
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
    
          </motion.h1>
        </BackgroundGradient>
      </div>
    
      <div className="space-y-8">
        {dummyHospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white rounded-lg shadow-lg border border-red-300">
            {/* Hospital Header */}
            <div 
              className="flex justify-between items-center cursor-pointer bg-blue-400 text-white p-4 rounded-t-lg" 
              onClick={() => toggleExpand(hospital.id)}
            >
              <h2 className="text-xl font-semibold">{hospital.name}</h2>
              <button className="text-yellow-100 hover:text-yellow-300 font-medium">
                {expandedHospitalId === hospital.id ? "Collapse" : "Expand"}
              </button>
            </div>

            {/* Expandable Patient Details */}
            {expandedHospitalId === hospital.id && (
              <div className="mt-4 px-4 py-6">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-md">
                    <thead className="bg-red-700 text-white">
                      <tr>
                        <th className="py-3 px-5 border-b border-red-500 text-center">Photo</th>
                        <th className="py-3 px-5 border-b border-red-500 text-center">Patient ID</th>
                        <th className="py-3 px-5 border-b border-red-500 text-center">Name</th>
                        <th className="py-3 px-5 border-b border-red-500 text-center">Age</th>
                        <th className="py-3 px-5 border-b border-red-500 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospital.patients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-red-100 transition-colors">
                          <td className="py-3 px-5 border-b border-gray-200 text-center">
                            <img 
                              src={patient.photo} 
                              alt={patient.name} 
                              className="w-16 h-20 object-cover rounded-lg mx-auto"
                            />
                          </td>
                          <td className="py-3 px-5 border-b border-gray-200 text-center">{patient.id}</td>
                          <td className="py-3 px-5 border-b border-gray-200 text-center">{patient.name}</td>
                          <td className="py-3 px-5 border-b border-gray-200 text-center">{patient.age}</td>
                          <td 
                            className={`py-3 px-5 border-b border-gray-200 text-center font-semibold ${patient.status === 'Accepted' ? 'text-green-700' : 'text-red-600'}`}
                          >
                            {patient.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CityAdminPage;
