import moment from "moment";

const Roles = () => {
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
                  <td>
                    {item.avatar ? (
                      <img
                        src={`../src/assets/images/${item.avatar}`}
                        alt=""
                        width={50}
                        style={{ borderRadius: "50%" }}
                      />
                    ) : (
                      "No avatar"
                    )}
                  </td>
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
                  <td>{item.roles.roleName}</td>
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
