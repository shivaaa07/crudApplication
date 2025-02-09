import { Router } from "express";
import {
  allUser,
  deletedUser,
  registerUser,
  singleUser,
  updateUserDetails,
} from "../controllers/user.controller.js";

const router = Router();

// Home Routers
router.route("/allUser").get(allUser);
// Register User Router
router.route("/register").post(registerUser);
// Find Single User Router
router.route("/singleUser/:id").get(singleUser);
// Update User Details Router
router.route("/updateDetails/:id").patch(updateUserDetails);
// Delete Single User
router.route("/deleteUser/:id").patch(deletedUser);

export default router;
