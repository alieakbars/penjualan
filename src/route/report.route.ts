import { NextFunction,Router } from "express";
import * as controller from "../controller/report.controller";

const router = Router();

router.get("/products", controller.getAll);
router.post("/products", controller.insertData);
router.put("/products/:id", controller.updateData);
router.delete("/products/:id", controller.deleteData);


export default router;