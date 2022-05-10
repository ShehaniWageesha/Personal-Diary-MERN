import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import { format } from "date-fns";

function DiariesList() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempDiary = await getData();
      setDiary(tempDiary);
      console.log(JSON.stringify(tempDiary));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:3333/api/v1/diary/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeDiary = (_id) => {
    try {
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/diary/" + _id, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
          },
        });
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link
        to={RoutePaths.create}
        style={{
          color: "blue",
          textDecoration: "none",
          fontWeight: "bold",
          float: "right"
        }}
      >
        Create
      </Link>
      <br></br>
      <br></br>
      <h3>Diaries</h3>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Review</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {diary.map((item) => (
            <tr key="{item._id}">
              <td>{item.review}</td>
              <td>{item.description}</td>
              <td>{format(new Date(item.date), "yyyy-MM-dd")}</td>
              <td>
                <Link
                  to={`${RoutePaths.edit}${item._id}`}
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit |{" "}
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => removeDiary(item._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiariesList;
