import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate("/summary");
  };

  return (
    <div>
      <h1>Page 3</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="education" {...register("education")} />
        <input type="text" placeholder="certificates" {...register("certificates")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Page3;
