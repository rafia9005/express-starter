import express from "express";

// middleware
import { Auth } from "../middleware/middleware.js";

// controller
import { Login } from "../controller/auth/LoginController.js";
import { Register } from "../controller/auth/RegisterController.js";

const router = express.Router();

router.post("/login", Login)
router.post("/register", Register)


export default router;
