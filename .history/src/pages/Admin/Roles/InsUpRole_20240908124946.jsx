const InsUpRole = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <form action="Create" method="post" encType="multipart/form-data">
          <div className="form-group">
            <div style={{ display: "flex" }}>
              <div>CategoryId</div>
              <div>*</div>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div className="form-group">
            <div style="display:flex">
              <div></div>
              <div>*</div>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div className="form-group">
            <br />
            <div className="col-md-10"></div>
          </div>
          <div className="form-group">
            <div style="display:flex">
              <div></div>
              <div>*</div>
            </div>
            <div className="col-md-10">
              @* <textarea id="editor"></textarea>
            </div>
          </div>
          <div className="form-group">
            <br />
            <div className="col-md-10"></div>
          </div>
          <div className="form-group">
            <input type="submit" value="Tạo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsUpRole;
