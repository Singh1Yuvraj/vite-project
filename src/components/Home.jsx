import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';



export default function Home() {
  return (
    <>
    <div className="container">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="card-container">
        {/* Card 1 - Users Management */}
        <Link to="/users" className="card text-white bg-primary">
          <div className="card-body">
            <div className="card-image-container">
              <img
                src="path-to-your-image.jpg" // Replace with the actual image path
                alt="Users"
                className="card-image"
              />
            </div>
            <h5 className="card-title">Users Management</h5>
          </div>
        </Link>

        {/* Card 2 - Trainer Management */}
        <Link to="/trainers" className="card text-white bg-success">
          <div className="card-body">
            <div className="card-image-container">
              <img
                src="path-to-your-image.jpg" // Replace with the actual image path
                alt="Trainers"
                className="card-image"
              />
            </div>
            <h5 className="card-title">Trainer Management</h5>
          </div>
        </Link>

        {/* Card 3 - Reports */}
        <Link to="/reports" className="card text-white bg-warning">
          <div className="card-body">
            <div className="card-image-container">
              <img
                src="../assets/download.png" // Replace with the actual image path
                alt="Reports"
                className="card-image"
              />
            </div>
            <h5 className="card-title">Reports</h5>
          </div>
        </Link>

        {/* Card 4 - Settings */}
        <Link to="/settings" className="card text-white bg-danger">
          <div className="card-body">
            <div className="card-image-container">
              <img
                src=".//" // Replace with the actual image path
                alt="Settings"
                className="card-image"
              />
            </div>
            <h5 className="card-title">Settings</h5>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}
