import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  // Form Submition redict to Feed Page
  let navgate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    setTimeout(function () {
      window.alert("Registeration Successfull");
      navgate("/");
    }, 2000);
  };

  // Get form Data in Console
  let [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    let data = { [name]: value };
    setInputData({ ...inputData, ...data });
    console.log(data);
  };

  // Store Form Data in MongoDB
  const { name, email, password, confirmPassword } = inputData;
  const postData = async () => {
    const res = await fetch("/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
    if (!res) {
      window.alert("Register Successfull");
    }
  };

  return (
    <>
      <section className="w-full h-screen bg-[#f3f3f3] flex justify-center items-center px-4 sm:px-0">
        <div className="form_wrapper w-full sm:w-[500px] h-96 bg-white rounded-sm py-8">
          <h1 className="text-2xl font-semibold text-center">Register</h1>
          <form
            method="POST"
            className="px-4 sm:px-8 py-2 sm:py-4 text-center"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={inputData.username}
              onChange={handleInputs}
              className="outline-none w-full sm:w-96 block border-2 border-gray-200 my-3 rounded-sm px-2 py-1 mx-auto"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputData.confirmPassword}
              onChange={handleInputs}
              className="outline-none w-full sm:w-96 block border-2 border-gray-200 my-3 rounded-sm px-2 py-1 mx-auto"
            />
            <input
              type="submit"
              value="Sign Up"
              className="px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-500"
              onClick={postData}
            />
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <NavLink to={`/`} className={`text-blue-400 underline`}>
              Log In
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default Register;
