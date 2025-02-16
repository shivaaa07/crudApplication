import { User } from "../models/registerUser.model.js";

// Register User Controller
const registerUserController = async (req, res, next) => {
  try {
    // Get All Field form Frontend by User
    const { name, email, password, confirmPassword } = req.body;
    // Ensure all fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }
    // Check User Already Exist or Not
    const exitUser = await User.findOne({ email });
    if (exitUser) {
      return res.status(404).json({ message: "User Already Exist" });
    }
    // Created User are Store in MongoDB
    const user = await User.create({
      name,
      email,
      password,
      confirmPassword,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -confirmPassword"
    );

    res
      .status(200)
      .json({ message: "User Register Successfully", createdUser });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Login Controller
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Check user fill all field or Not
    if (!email || !password) {
      return res
        .status(401)
        .json({ error: "Please Fill all the required input!" });
    }
    // Check user in MongoDB
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(404).json({ message: "User Not Found" });
    }
    // Check email and password field are correct
    if (password !== existUser.password) {
      return res
        .status(401)
        .json({ message: "Email or Password are incorrect" });
    }
    res.status(200).json({ message: "Login Successfull", existUser });
  } catch (error) {
    console.log("Internal Server Error", error);
    throw error;
  }
};

// All User Find
const allUser = async (req, res) => {
  try {
    const allUserData = await User.find();
    res.status(200).json(allUserData);
  } catch (error) {
    console.log("Internal Server Error", error);
    throw error;
  }
};

// Feedback Controller
const feedback = async (req, res) => {
  try {
  } catch (error) {
    console.log("Internal Server Error", error);
    throw error;
  }
};

export { registerUserController, allUser, login };
