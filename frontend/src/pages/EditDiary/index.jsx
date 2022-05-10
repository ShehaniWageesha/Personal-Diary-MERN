/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function EditDiary() {
  const { id } = useParams();
  const [diary, setDiary] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempDiary = await getData(id);
      setDiary(tempDiary);
      console.log(JSON.stringify(tempDiary));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/diary/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setDiary({
      ...diary,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(diary));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/diary/" + id,
        data: diary,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000/list");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(diary);
  if (!diary) {
    return <>Loading the data</>;
  }

  return (
    <div>
      
      <h3>Edit Diary</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Review :</label>
          <input
            type="text"
            name="review"
            defaultValue={diary.review}
            required
            className="form-control"
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
            defaultValue={diary.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date :</label>
          <div>
            <DatePicker
              name="date"
              value={format(new Date(diary.date), "yyyy-MM-dd")}
              onChange={(newDate) =>
                setDiary({
                  ...diary,
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
            value="Edit"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditDiary;
