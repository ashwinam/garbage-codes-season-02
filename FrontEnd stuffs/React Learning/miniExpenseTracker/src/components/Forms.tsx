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
          <label htmlFor="description" className="form-label fs-4">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            className="form-control form-control-lg"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label fs-4">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter Amount"
            className="form-control form-control-lg"
            id="amount"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label fs-4">
            Categories
          </label>
          <select
            id="categories"
            className="form-select form-select-lg"
            aria-label="Default select example"
            defaultValue={"default"}
          >
            <option value="default" disabled hidden>
              Select Category
            </option>
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
