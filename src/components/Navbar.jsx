import React from 'react';
import './Navbar.css'; // Optional: Add custom styles here.

export default function DashboardNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                {/* Logo Section */}
                <a className="navbar-brand" href="/dashboard">
                    <img src="./1.jpeg" alt="HealthTrack Logo" className="d-inline-block align-text-top" style={{ width: '40px', marginRight: '10px' }} />
                     Admin
                </a>
                <img src="./a" alt="" />

                {/* Toggler for Mobile View */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Users.jsx">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reports">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/settings">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
