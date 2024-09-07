import { useState, useEffect } from "react";
import "../../../assets/js/jquery-3.3.1.min.js";
import "../../../assets/js/bootstrap.min.js";
import "../../../assets/js/main.js";

const Users = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user/users")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setData(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
      });
  });

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Table #9</h2>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr style={{ textTransform: "uppercase" }}>
                <th scope="col">
                  <label className="control control--checkbox">
                    <input type="checkbox" className="js-check-all" />
                    <div className="control__indicator"></div>
                  </label>
                </th>
                <th scope="col">User Id</th>
                <th scope="col">Category</th>
                <th scope="col">Username</th>
                <th scope="col">Age</th>
                <th scope="col">Avatar</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.userId}>
                  <th scope="row">
                    <label className="control control--checkbox">
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                  </th>
                  <td>{item.userId}</td>
                  <td>{item.categoryId}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>{item.avatar}</td>
                  <td>{item.avatar}</td>
                  <td>{item.avatar}</td>
                  <td>{item.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
