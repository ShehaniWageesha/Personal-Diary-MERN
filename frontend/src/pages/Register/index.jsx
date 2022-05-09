/** @format */
import React, { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3333",
        url: "/api/v1/user/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Register Your Account</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Username :</label>
          <input
            type="text"
            name="username"
            required
            className="form-control"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email Address :</label>
          <input
            type="text"
            name="email"
            required
            className="form-control"
            value={data.email}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password :</label>
          <input
            type="password"
            name="confirm"
            required
            className="form-control"
            value={data.confirm}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Register User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterUser;
