import { useForm } from "react-hook-form";

interface Props {
  onDataSubmit: (data: any) => void;
}

const Forms = ({ onDataSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form action="" onSubmit={handleSubmit((data) => onDataSubmit(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">
            Description
          </label>
          <input
            {...register("description", { required: true, minLength: 3 })}
            id="description"
            type="text"
            placeholder="Description"
            className="form-control form-control-lg"
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">Description is required.</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">
              Description is atleast 3 characters long.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label fs-4">
            Amount
          </label>
          <input
            type="number"
            {...register("amount", { required: true })}
            placeholder="Enter Amount"
            className="form-control form-control-lg"
            id="amount"
          />
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label fs-4">
            Categories
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="form-select form-select-lg"
            aria-label="Default select example"
            defaultValue={""}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.categories?.type === "required" && (
            <p className="text-danger">Catoegories is required.</p>
          )}
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
