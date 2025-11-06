
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>View Items</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/appointments" style={styles.link}>Appointments</Link></li>
        <li><Link to="/doctor" style={styles.link}>Doctor</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#40b544',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  title: {
    margin: 0,
    fontSize: '20px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default NavBar;
