import express from "express";
import {body} from "express-validator";

const route = express.Router();

import {
  signupController,
  confirmEmailController,
  loginController,
  validateUserController,
  checkValidUserController,
  sendResetPasswordEmailController,
  resetPasswordController,
  userSignedInValidationController,
  getUserDetails,
  getDetailsFromId,
  updateUserDetails,
  addBookToCart,
  getAllCartBooks,
  removeBookFromCart
} from "../controllers/authController.js";
import {errorHandler} from "../utils/errorHandler.js";
import jwtAuth from "../middleware/jwtAuth.js";

route.post(
  "/signup",
  [
    body("userName")
      .trim()
      .isAlphanumeric()
      .isLength({min: 3, max: 20})
      .withMessage("minimum 3 characters and maximum 20 characters required"),
    body("name")
      .trim()
      .isLength({min: 3, max: 30})
      .withMessage("minimum 3 characters and maximum 20 characters required"),
    // body("lastName")
    //     .trim()
    //     .isLength({ min: 3, max: 20 })
    //     .withMessage("minimum 3 characters and maximum 20 characters required"),
    body("email")
      .trim()
      .normalizeEmail()
      .isEmail()
      .withMessage("please enter valid email"),
    body("password")
      .trim()
      .isStrongPassword()
      .withMessage("please enter strong password")
      .exists({checkFalsy: true})
      .withMessage("You must type a password"),
    body("confirmPassword")
      .exists({checkFalsy: true})
      .withMessage("You must type a confirmation password")
      .custom((value, {req}) => value === req.body.password)
      .withMessage("The passwords do not match"),
    // body("location")
    //     .isLength({ min: 3, max: 20 })
    //     .withMessage("minimum 3 characters and maximum 20 characters required")
  ],
  errorHandler,
  signupController
);

route.get("/verify-email/:id/:token", errorHandler, confirmEmailController);

route.post(
  "/login",
  [
    body("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("please enter valid email"),
    body("password").isStrongPassword().withMessage("invalid password"),
  ],
  errorHandler,
  loginController
);

route.post("/validate-user", errorHandler, validateUserController);

route.post("/token-check", errorHandler, checkValidUserController);

route.post(
  "/forget-password",
  [
    body("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("please enter valid email"),
  ],
  errorHandler,
  sendResetPasswordEmailController
);

route.post(
  "/reset-password/:token",
  [
    body("password")
      .trim()
      .isStrongPassword()
      .withMessage("please enter strong password")
      .exists({checkFalsy: true})
      .withMessage("You must type a password"),
    body("confirmPassword")
      .exists({checkFalsy: true})
      .withMessage("You must type a confirmation password")
      .custom((value, {req}) => value === req.body.password)
      .withMessage("The passwords do not match"),
  ],
  errorHandler,
  resetPasswordController
);

route.post("/verify-signin", errorHandler, userSignedInValidationController);
route.get("/user-details", errorHandler, jwtAuth, getUserDetails);
route.get("/:userId", errorHandler, getDetailsFromId);
route.post("/update-user/:userId", errorHandler, updateUserDetails);
route.post("/addCart/:userId", errorHandler, addBookToCart);
route.get("/get-cart/:userId", errorHandler, getAllCartBooks);
route.post("/bookDel/:userId",errorHandler, removeBookFromCart);

export default route;
