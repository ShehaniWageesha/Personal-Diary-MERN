/** @format */

import React, { Component } from 'react';
import "../../components/Navbar/sideNav.css"
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <div className="DashMain">
        <div className="backgroundH">
          <div  className="transpBox">
            <p><strong>Personal Diary App</strong></p>
          </div>
        </div>
        <div>
          <div>
            <Link to="/login" className="nav-link">
              <h6>Sign In</h6>
            </Link>
          </div>
          <div>
            <Link to="/create" className="nav-link">
              <h6>Sign Up</h6>
            </Link>
          </div>
        </div>
      </div>  
      
    );
  }
}

export default Dashboard;
