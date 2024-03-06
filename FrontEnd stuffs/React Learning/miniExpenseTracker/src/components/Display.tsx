function Display() {
  return (
    <div className="mt-5">
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        defaultValue={"all-categories"}
      >
        <option value={"all-categories"}>All Categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <div className="mb-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Caegory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>
                <button className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
