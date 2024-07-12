import { Router } from "express";

import * as bookController from "./book.controller.js";

const router = Router();

router.post("/createBook", bookController.createBook);
router.get("/getAllBooks", bookController.getAllBooks);
router.get("/getBookById/:_id", bookController.getBookById);
router.patch("/updateBookById/:_id", bookController.updateBookById);
router.delete("/deleteBookById/:_id", bookController.deleteBookById);


export default router; 