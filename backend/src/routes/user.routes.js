import { Router } from "express";
import {
  allUser,
  login,
  registerUserController,
} from "../controllers/user.controller.js";

const router = Router();

// Home Routers
router.route("/allUser").get(allUser);
// Register User Router
router.route("/register").post(registerUserController);
// Login User Router
router.route("/login").post(login);
// Update User Details Router
// router.route("/updateDetails/:id").patch(updateUserDetails);
// Delete Single User
// router.route("/deleteUser/:id").patch(deletedUser);

export default router;
