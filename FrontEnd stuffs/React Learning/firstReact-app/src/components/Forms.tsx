import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Forms = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
    age: z
      .number({ invalid_type_error: "Age field is required" })
      .min(18, { message: "Age must be at least 18." }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: FieldValues) => {
    console.log(data);
  };

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  //   const person = {
  //     name: "",
  //     age: 0,
  //   };

  //   const handleForms = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) person.name = nameRef.current.value;
  //     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            // register function second argument we can pass html attributes as a object
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />

          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
