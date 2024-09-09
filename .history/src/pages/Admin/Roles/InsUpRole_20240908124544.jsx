const InsUpRole = ()=>{
    return(<div className="row">
    <div className="col-md-4">
        <form action="Create" method="post" enctype="multipart/form-data">

            <div className="form-group">
                <div style="display:flex">
                    <div>
                      CategoryId
                    </div>
                    <div>*</div>
                </div>
                <div className="col-md-10">
                    @if (ViewBag.Items == null)
                    {
                        @Html.DropDownListFor(model => model.CategoryId, optionsNone, "Chưa có thể loại nào được tạo", new { @class = "form-control" })
                    }
                    else
                    {
                        @Html.DropDownListFor(model => model.CategoryId, ViewBag.Items as IEnumerable<SelectListItem>, "Chọn thể loại", new { @class = "form-control" })
                    }
                    @Html.ValidationMessageFor(model => model.CategoryId, "", new { @class = "text-danger" })
                </div>
            </div>
            <div className="form-group">
                <div style="display:flex">
                    <div>
                        @Html.LabelFor(model => model.Title, new { @class = "control-label col-md-2" })
                    </div>
                    <div>*</div>
                </div>
                <div className="col-md-10">
                    @Html.EditorFor(model => model.Title, new { htmlAttributes = new { @class = "form-control" } })
                    @Html.ValidationMessageFor(model => model.Title, "", new { @class = "text-danger" })
                </div>
            </div>
            <div className="form-group">
                @Html.LabelFor(model => model.ShortIntroduction, new { @class = "control-label col-md-2" })
                <br>
                <div className="col-md-10">
                    @Html.EditorFor(model => model.ShortIntroduction, new { htmlAttributes = new { @class = "form-control" } })
                    @Html.ValidationMessageFor(model => model.ShortIntroduction, "", new { @class = "text-danger" })
                </div>
            </div>
            <div className="form-group">
                <div style="display:flex">
                    <div>
                        @Html.LabelFor(model => model.Content, new { @class = "control-label col-md-2" })
                    </div>
                    <div>*</div>
                </div>
                <div className="col-md-10">
                    @* <textarea id="editor"></textarea> *@
                    @Html.TextAreaFor(model => model.Content, new { @class = "form-control", @id = "editor" })
                    @Html.ValidationMessageFor(model => model.Content, "", new { @class = "text-danger" })
                </div>
            </div>
            <div className="form-group">
                @Html.LabelFor(model => model.Picture, new { @class = "control-label col-md-2" })
                <br>
                <div className="col-md-10">
                    <img id="preview" src="@Url.Content(ViewBag.Anh==null?"~/Admin/img/avatar1.jpg":"~/Upload/images/"+ViewBag.Anh)" className="rounded-circle" height="40" width="40" />

                    @Html.EditorFor(model => model.NewsImages, new { htmlAttributes = new { @class = "custom-file mt-3 mb-3" } })
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value="Tạo" className="btn btn-primary" />
            </div>
        </form>
        <script>
            ClassicEditor
                .create(document.querySelector('#editor'), {

                })
                .then(editor => {
                    window.editor = editor;
                })
                .catch(err => {
                    console.log(err.stack);
                });
        </script>
    </div>
</div>

<div>
    <a href="~/Admin/NewsAdmin"><i className="fa-solid fa-left-long"></i> Quay trở lại</a>
</div>
);
}

export default InsUpRole;