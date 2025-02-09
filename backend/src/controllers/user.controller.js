import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Register } from "../models/registerUser.model.js";

// All User Data Router
const allUser = async (req, res, next) => {
  try {
    const allUserData = await Register.find();
    res.status(200).json(allUserData);
  } catch (error) {
    console.error("Error :", error);
    throw error;
  }
};

// Register User Router
const registerUser = async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(404).json({
        message: "Password do not Match",
      });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 10);

    // create the user in database
    const user = await Register.create({
      userName,
      email,
      password: hash,
      confirmPassword: hash,
    });

    // Generate JWT Token
    const token = jwt.sign({ email }, process.env.JWT_SECRETKEY);

    // set JWT token in a cookie
    res.cookie("JWT_TOEKN", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV || "production",
      sameSite: "Strict",
    });

    res.status(201).json({
      message: "User Registration Successfull",
      user,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Find Single User
const singleUser = async (req, res, next) => {
  try {
    // Extract ID from Router Params
    const { id } = req.params;

    console.log("User ID :", id);

    // check user provide user ID or not
    if (!id) {
      return res.status(400).json({
        message: "User ID is Required",
      });
    }

    const user = await Register.findById(id);

    // Check User id found in Database
    if (!user) {
      res.status(404).json({
        message: "User Not Found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Updated Single User Details
const updateUserDetails = async (req, res, next) => {
  try {
    // Get Id from Route
    const { id } = req.params;
    if (!id) {
      return res.status(401).json({
        message: "User ID is Required",
      });
    }

    // Get Updated user Details from request body
    const updatedData = req.body;

    const user = await Register.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(404).json({
        message: "User Not Found",
      });
    }

    res.status(200).json({ message: "User Updated Successfully", user });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// Delete Single User
const deletedUser = async (req, res, next) => {
  try {
    // get user ID by Route Params
    const { id } = req.params;

    // Check user Provide ID no not
    if (!id) {
      return res.status(404).json({
        message: "User ID is Required",
      });
    }

    const user = await Register.findByIdAndDelete(id);

    res.status(200).json({
      message: "User Deleted Successfull",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { allUser, registerUser, singleUser, updateUserDetails, deletedUser };
