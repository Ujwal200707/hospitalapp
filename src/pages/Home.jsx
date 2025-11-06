import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: "center", marginTop: 60 }}>
    <h1>Welcome to the Doctors page</h1>
    <Link to="/doctor" style={{ textDecoration: 'none' }}>
      <div style={{
        display: 'inline-block',
        padding: '20px 40px',
        marginTop: 40,
        backgroundColor: '#40b544',
        color: '#fff',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 18,
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s'
      }}>
        Doctor Appointment
      </div>
    </Link>
  </div>
);

export default Home;
