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
                {data.map((item) => (
                  <div key={item.userId}>
                    <th scope="col">Order</th>
                    <th scope="col">Sales</th>
                    <th scope="col">Description</th>
                    <th scope="col">Support</th>
                  </div>
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
                  <td>1392</td>
                  <td>Sales Pitch - 2019</td>
                  <td>
                    Far far away, behind the word mountains
                    <small className="d-block">
                      Far far away, behind the word mountains
                    </small>
                  </td>
                  <td>+63 983 0962 971</td>
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
