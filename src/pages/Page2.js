import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate("/page3");
  };

  return (
    <div>
      <h1>Page 2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" {...register("email")} />
        <input type="text" placeholder="phone" {...register("phone")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Page2;
