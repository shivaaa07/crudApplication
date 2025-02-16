import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const LoggedIn = () => {
  // Redirect to Feedback Page
  let navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    window.alert("Login Successfull");
    navigate("/feedback");
  };

  // Get Input Value
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    let res = { [name]: value };
    setInputData({ ...inputData, ...res });
    console.log(res);
  };

  // API Call
  const { email, password } = inputData;
  const logIn = async () => {
    const response = await fetch("/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response;
    console.log(data.status);
    // if (data.status === 404 || !data) {
    //   console.log("Login Fail");
    // } else {
    //   console.log("Login Successfull");
    //   navigate("/feedback");
    // }
  };

  return (
    <>
      <section className="w-full h-screen bg-[#f3f3f3] flex justify-center items-center px-4 sm:px-0">
        <div className="form_wrapper w-full sm:w-[500px] h-96 bg-white rounded-sm py-8">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form
            method="POST"
            className="px-4 sm:px-8 py-2 sm:py-4 text-center"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="email"
              placeholder="email"
              value={inputData.email}
              onChange={handleInputs}
              className="outline-none w-full sm:w-96 block border-2 border-gray-200 my-3 rounded-sm px-2 py-1 mx-auto"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputData.password}
              onChange={handleInputs}
              className="outline-none w-full sm:w-96 block border-2 border-gray-200 my-3 rounded-sm px-2 py-1 mx-auto"
            />

            <input
              type="submit"
              value="Login"
              className="px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-500"
              onClick={logIn}
            />
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <NavLink to={`/register`} className={`text-blue-400 underline`}>
              Create Account
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoggedIn;
