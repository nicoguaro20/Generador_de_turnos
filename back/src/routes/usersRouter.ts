import { Router } from "express";
import { getAllUsers, getUserById, register, login } from "../controllers/usersControllers";

const usersRouter: Router = Router();
usersRouter.get("/", getAllUsers);
usersRouter.get("/:id",getUserById);
usersRouter.post("/register",register);
usersRouter.post("/login", login);

export default usersRouter;