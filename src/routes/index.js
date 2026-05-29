import { Router } from "express";
import { router as userRouter } from "./users.routes.js";
import {router as ReviewRouter} from "./reviews.routes.js"

export const router = Router();

router.use("/users", userRouter);

router.use("reviews",reviewRouter);
