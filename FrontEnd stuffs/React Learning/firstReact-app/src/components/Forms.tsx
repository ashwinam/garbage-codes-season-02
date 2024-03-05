import { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

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
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />

          {errors.name?.type === "required" && (
            <p className="text-danger">The Field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              The Charater at least 3 charactor long
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
