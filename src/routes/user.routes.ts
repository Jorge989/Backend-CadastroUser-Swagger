import { Router } from "express";
import { ensureAuthenticated } from "../modules/users/middlewares/ensureAuthenticated";
import { listCategoriesController } from "../modules/users/UseCase/llistUsers";
import { registerUserController } from "../modules/users/UseCase/RegisterUser";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  return registerUserController.handle(request, response);
});

userRoutes.get("/", ensureAuthenticated, (req, res) => {
  return listCategoriesController.handle(req, res);
});
export { userRoutes };
