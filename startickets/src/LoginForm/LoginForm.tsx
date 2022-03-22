import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material"

import "./LoginForm.css"

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        name="firstName"
        control={control}
        defaultValue=""
      />
      <label>Last Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        name="firstName"
        control={control}
        defaultValue=""
      />

      <input type="submit" />
    </form>
  );
};