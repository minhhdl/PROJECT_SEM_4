import { useState, useEffect } from "react";

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
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Table #9</h2>

        <div className="table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col">
                  <label className="control control--checkbox">
                    <input type="checkbox" className="js-check-all" />
                    <div className="control__indicator"></div>
                  </label>
                </th>
                {columns.map((col, index) => (
                  <th
                    scope="col"
                    key={index}
                    style={{ textTransform: "uppercase" }}
                  >
                    {col}
                  </th>
                ))}
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
                  <td>
                    <ul className="persons">
                      <li>
                        <a href="#">
                          <img
                            src="images/person_1.jpg"
                            alt="Person"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/person_2.jpg"
                            alt="Person"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/person_3.jpg"
                            alt="Person"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/person_4.jpg"
                            alt="Person"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="images/person_5.jpg"
                            alt="Person"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                    </ul>
                  </td>
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
