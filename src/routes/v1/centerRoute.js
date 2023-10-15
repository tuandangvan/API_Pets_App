import express from "express";
import { centerController } from "~/controllers/centerController";


const router = express.Router();
router.post("/add-center", centerController.createInfoForCenter);
router.post("/update-center", centerController.updateCenter);
export const centerRoute = router;
