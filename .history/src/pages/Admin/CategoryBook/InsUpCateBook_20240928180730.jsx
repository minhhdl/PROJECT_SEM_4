const InsUpCateBook = () => {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <form action="">
        <div className="col-md-4">
          <input type="text" className="form-control" />
        </div>
        <br />
        <p>Category name</p>
        <div className="col-md-4">
          <input type="text" className="form-control" />
        </div>
        <br />
        <div className="col-md-4">
          <button className="btn btn-danger">Create</button>
        </div>
      </form>
    </div>
  );
};

export default InsUpCateBook;
