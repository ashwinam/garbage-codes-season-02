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
    </div>
  );
}

export default Display;
