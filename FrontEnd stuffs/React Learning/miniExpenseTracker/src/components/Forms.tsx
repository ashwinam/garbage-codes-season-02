const Forms = () => {
  return (
    <>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Clicked");
        }}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input type="number" className="form-control" id="amount" />
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Categories
          </label>
          <select
            id="categories"
            className="form-select"
            aria-label="Default select example"
            defaultValue={"default"}
          >
            <option value="default" disabled hidden>
              Select Category
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
