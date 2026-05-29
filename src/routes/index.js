import { Router } from "express";
import { router as userRouter } from "./users.routes.js";
import { router as productRouter } from "./products.router.js";

export const router = Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
