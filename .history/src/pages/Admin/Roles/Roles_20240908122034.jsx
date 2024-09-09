import moment from "moment";
import { useState, useEffect } from "react";

const Roles = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/role/roles")
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
  }, []);

  return (
    <div className="content">
      <div className="container">
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
                <th scope="col">Role ID</th>
                <th scope="col">Role name</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated at</th>
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
                  <td>{item.roleId}</td>
                  <td>{item.roleName}</td>
                  <td>
                    {item.createdAt
                      ? moment(item.createdAt, "DD/MM/yyyy").format(
                          "DD/MM/yyyy"
                        )
                      : "Not created yet"}
                  </td>
                  <td>
                    {item.updatedAt
                      ? moment(item.updatedAt, "DD/MM/yyyy").format(
                          "DD/MM/yyyy"
                        )
                      : "Not updated yet"}
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

export default Roles;
