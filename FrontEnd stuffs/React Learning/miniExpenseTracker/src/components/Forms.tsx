import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description contain atleast 3 character[s]." })
    .max(20),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(0.1),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    errorMap: () => ({
      message: "Categories is required",
    }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onDataSubmit: (data: ExpenseFormData) => void;
}

const Forms = ({ onDataSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form action="" onSubmit={handleSubmit((data) => onDataSubmit(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            placeholder="Description"
            className="form-control form-control-lg"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label fs-4">
            Amount
          </label>
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Enter Amount"
            className="form-control form-control-lg"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
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
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
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
