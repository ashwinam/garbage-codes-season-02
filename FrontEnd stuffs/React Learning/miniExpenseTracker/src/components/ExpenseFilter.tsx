interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      defaultValue={""}
      onChange={(e) => onSelectedCategory(e.target.value)}
    >
      <option value={""}>All Categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
