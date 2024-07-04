import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form.formData);

  return (
    <div>
        <h1>Summary</h1>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <input type="submit" onClick={()=>{navigate("/")}} />
    </div>
  );
};

export default Summary;
