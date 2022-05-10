/** @format */
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateDiary() {
  const [data, setData] = useState({
    review: "",
    description: "",
    date: new Date(),
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
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
        url: "/api/v1/diary/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Create</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Review :</label>
          <input
            type="text"
            name="review"
            required
            className="form-control"
            value={data.review}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description :</label>
          <input
            type="text"
            name="description"
            required
            className="form-control"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date :</label>
          <div>
            <DatePicker
              name="date"
              selected={data.date}
              onChange={(newDate) =>
                setData({
                  ...data,
                  date: newDate,
                })
              }
            />
          </div>
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Create"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateDiary;
