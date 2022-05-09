/** @format */
import React, { useState } from "react";

function LoginUser() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  
  return (
    <div>
      <h3>Login</h3>
      <br></br>
      <form>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            required
            className="form-control"
            value={data.username}
          />
        </div>
        <div className="form-group">
          <label>Password :</label>
          <input
            type="password"
            name="password"
            required
            className="form-control"
            value={data.password}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginUser;
