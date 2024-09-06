'use client';
import React, { useState } from 'react';
import { WobbleCard } from "../compenents/wobble-card";

// Dummy data for patient bookings with Indian names
const dummyBookings = [
  { id: 1, name: "Aditya Nair", age: 32, date: "2024-08-10", status: "Pending" },
  { id: 2, name: "Sneha Das", age: 28, date: "2024-09-12", status: "Pending" },
  { id: 3, name: "Vikas Sharma", age: 47, date: "2024-07-25", status: "Pending" },
  { id: 4, name: "Anjali Menon", age: 27, date: "2024-06-15", status: "Pending" },
  { id: 5, name: "Rohit Jain", age: 42, date: "2024-09-05", status: "Pending" },
  { id: 6, name: "Priyanka Reddy", age: 34, date: "2024-08-20", status: "Pending" },
  { id: 7, name: "Karan Singh", age: 51, date: "2024-07-14", status: "Pending" },
  { id: 8, name: "Lavanya Bansal", age: 29, date: "2024-06-22", status: "Pending" },
  { id: 9, name: "Vikram Khanna", age: 48, date: "2024-07-08", status: "Pending" },
  { id: 10, name: "Pooja Deshmukh", age: 31, date: "2024-09-18", status: "Pending" },
  { id: 11, name: "Sanjay Tiwari", age: 38, date: "2024-06-12", status: "Pending" },
  { id: 12, name: "Megha Agarwal", age: 36, date: "2024-07-18", status: "Pending" },
  { id: 13, name: "Arjun Kapoor", age: 50, date: "2024-09-25", status: "Pending" },
  { id: 14, name: "Kavya Rao", age: 33, date: "2024-06-19", status: "Pending" },
  { id: 15, name: "Sunil Shetty", age: 45, date: "2024-08-02", status: "Pending" },
  { id: 16, name: "Reema Iyer", age: 30, date: "2024-07-22", status: "Pending" },
  { id: 17, name: "Nikhil Verma", age: 37, date: "2024-08-09", status: "Pending" },
  { id: 18, name: "Aditi Sinha", age: 41, date: "2024-07-30", status: "Pending" },
  { id: 19, name: "Prakash Rao", age: 43, date: "2024-09-03", status: "Pending" },
  { id: 20, name: "Sonia Chawla", age: 27, date: "2024-06-25", status: "Pending" },
  { id: 21, name: "Ravi Bhatia", age: 35, date: "2024-07-11", status: "Pending" },
  { id: 22, name: "Seema Kohli", age: 29, date: "2024-08-27", status: "Pending" },
  { id: 23, name: "Nitin Mehra", age: 47, date: "2024-09-09", status: "Pending" },
  { id: 24, name: "Sushmita Roy", age: 34, date: "2024-06-30", status: "Pending" },
  { id: 25, name: "Rakesh Thakur", age: 44, date: "2024-07-17", status:  "Pending" },
  { id: 27, name: "Kunal Pandey", age: 39, date: "2024-07-26", status: "Pending" },
  { id: 28, name: "Alisha Singh", age: 30, date: "2024-09-12", status: "Pending" },
  { id: 29, name: "Varun Dubey", age: 37, date: "2024-08-05", status: "Pending" },
  { id: 30, name: "Nisha Mehta", age: 34, date: "2024-07-20", status: "Pending" },
  { id: 31, name: "Amit Kulkarni", age: 40, date: "2024-09-08", status: "Pending" },
  { id: 32, name: "Rina Patel", age: 26, date: "2024-06-18", status: "Pending" },
  { id: 33, name: "Abhishek Gupta", age: 49, date: "2024-08-03", status: "Pending" },
  { id: 34, name: "Shalini Raj", age: 29, date: "2024-09-10", status: "Pending" },
  { id: 35, name: "Manish Kumar", age: 52, date: "2024-07-29", status: "Pending" },
  { id: 36, name: "Meenal Yadav", age: 32, date: "2024-08-17", status: "Pending" },
  { id: 37, name: "Harsh Chatterjee", age: 35, date: "2024-07-21", status: "Pending" },
  { id: 38, name: "Renu Sharma", age: 36, date: "2024-06-26", status: "Pending" },
  { id: 39, name: "Naveen Jain", age: 42, date: "2024-08-11", status: "Pending" },
  { id: 40, name: "Kiran Dhawan", age: 28, date: "2024-07-16", status: "Pending" }
  //... (other bookings)
];

const ReceptionistPage = () => {
  const [bookings, setBookings] = useState(dummyBookings);

  // Function to approve a booking
  const handleApprove = (id) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: "Approved" } : booking
      )
    );
  };

  // Function to reject a booking
  const handleReject = (id) => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status: "Rejected" } : booking
      )
    );
  };

  return (
    <div className="p-3 bg-white min-h-screen">
      <div className="bg-gradient-to-br from-yellow-500 via-red-600 to-orange-300 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
          Receptionist Dashboard
        </h1>
      </div>
      
      {/* Grid layout for Wobble Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full mt-6">
        {bookings.map((booking) => (
          <WobbleCard
            key={booking.id}
            containerClassName="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-gray-800">
                {booking.name} (ID: {booking.id})
              </h2>
              <p className="text-sm text-gray-500">Age: {booking.age}</p>
              <p className="text-sm text-gray-500">Booking Date: {booking.date}</p>
              <p className={`font-bold text-sm ${booking.status === 'Approved' ? 'text-green-500' : booking.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                Status: {booking.status}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(booking.id)}
                  disabled={booking.status !== "Pending"}
                  className={`px-4 py-2 rounded-lg ${booking.status === "Pending" ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(booking.id)}
                  disabled={booking.status !== "Pending"}
                  className={`px-4 py-2 rounded-lg ${booking.status === "Pending" ? 'bg-red-500 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                >
                  Reject
                </button>
              </div>
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default ReceptionistPage;
