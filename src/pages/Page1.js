import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateFormData } from "../store/formSlice";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: "", lastName: "" } });

  console.log("errors state", errors);

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate("/page2");
    console.log("data ", data);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>First Name:</h4>
        <input
          type="text"
          placeholder="firstName"
          {...register("firstName", {
            required: "This field required",
            minLength: { value: 3, message: "Minimun 3 character required" },
          })}
        />
        <pre>{errors.firstName?.message}</pre>
        <h4>Last Name:</h4>
        <input
          type="text"
          placeholder="lastName"
          {...register("lastName", {
            required: "This field required",
            minLength: { value: 3, message: "Minimun 3 character required" },
          })}
        />
        <pre>{errors.lastName?.message}</pre>
        <h4>Email:</h4>
        <input
          type="text"
          placeholder="email"
          {...register("email", {
            required: "This field required",
            minLength: { value: 6, message: "Minimun 6 character required" },
          })}
        />
        <pre>{errors.email?.message}</pre>
        <h4>Phone:</h4>
        <input
          type="text"
          placeholder="phone"
          {...register("phone", {
            required: "This field required",
            minLength: { value: 10, message: "Minimun 10 character required" },
          })}
        />
        <pre>{errors.phone?.message}</pre>
        <h4>Address:</h4>
        <input
          type="text"
          placeholder="address"
          {...register("address", {
            required: "This field required",
            minLength: { value: 10, message: "Minimun 10 character required" },
          })}
        />
        <pre>{errors.address?.message}</pre>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Page1;
