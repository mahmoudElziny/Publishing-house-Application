import { Router  } from "express";

import * as specialEndPoints from "./specialEndPoints.controller.js";

const router = Router();

router.get("/retrievingAllBooksAndAuthors", specialEndPoints.retrievingAllBooksAndAuthors);
router.get("/filterBooksByTitleOrAuthor", specialEndPoints.filterBooksByTitleOrAuthor);
router.get("/filterAuthorsByNameOrBio", specialEndPoints.filterAuthorsByNameOrBio);
router.get("/retrievingAuthorAndHisBooks", specialEndPoints.retrievingAuthorAndHisBooks);




export default router;