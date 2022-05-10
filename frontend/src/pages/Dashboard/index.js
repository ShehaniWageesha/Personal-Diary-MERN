/** @format */
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="DashMain" style={{ 
      backgroundImage: `url("/frontend/src/app/background.jpg")` 
    }}>
      <div className="backgroundH">
        <div className="transpBox">
          <h1><strong>#PersonalDiaryApp</strong></h1>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div>
          <Link to="/login" className="nav-link">
            <h3>Sign In</h3>
          </Link>
        </div>
        <div>
          <Link to="/register" className="nav-link">
            <h3>Sign Up</h3>
          </Link>
        </div>
      </div>
    </div>  
  );
}

export default Dashboard;
