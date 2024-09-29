const InsUpCateBook = () => {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <form action="">
        <label htmlFor="name">Category name</label>
        <div className="col-md-4">
          <input type="text" className="form-control" id="name" required />
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
