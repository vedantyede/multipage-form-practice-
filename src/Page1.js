import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "./formSlice";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate("/page2");
  };

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="firstName" {...register("firstName")} />
        <input type="text" placeholder="lastName" {...register("lastName")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Page1;
