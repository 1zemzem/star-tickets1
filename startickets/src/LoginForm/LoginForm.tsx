import React from "react";
import { useForm } from "react-hook-form";

import "./LoginForm.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="form">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input
            {...register("firstName", { required: "! this line is required" })}
            placeholder="Ivan"
          />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...register("lastName", { required: "! this line is required" })}
            placeholder="Ivanov"
          />
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "! this line is required" })}
            placeholder="koko1049@gmail.com"
            type="email"
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "! this line is required",
              minLength: {
                value: 6,
                message: "6 simbols minimum required",
              },
            })}
            placeholder="6 simbols minimum"
            type="password"
          />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
};
