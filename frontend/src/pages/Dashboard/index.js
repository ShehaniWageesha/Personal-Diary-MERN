/** @format */
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="DashMain" style={{ 
      backgroundImage: `url("../50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg")` 
    }}>
      <div className="backgroundH">
        <div className="transpBox">
          <p><strong>#PersonalDiaryApp</strong></p>
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

export default Dashboard;
