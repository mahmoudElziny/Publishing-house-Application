import { Router } from "express";

import * as authorControler from "./author.controller.js";

const router = Router();

router.post("/createAuthor", authorControler.createAuthor);
router.get("/getAllAuthors", authorControler.getAllAuthors);
router.get("/getAuthorById/:_id", authorControler.getAuthorById);
router.patch("/updateAuthorById/:_id", authorControler.updateAuthorById);
router.delete("/deleteAuthorById/:_id", authorControler.deleteAuthorById);



export default router; 