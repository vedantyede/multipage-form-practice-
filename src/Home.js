import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="submit"
        value="Form"
        onClick={() => {
          navigate("/page1");
        }}
      />
    </div>
  );
};

export default Home;
