import express from "express";
import { petController } from "~/controllers/petController";


const router = express.Router();
router.post("/add", petController.createPet);
router.post("/update/:id", petController.updatePet);
router.get("/get-all-pets", petController.getAllPets);
// router.post("/get-users", userController.findUserByNamePhoneEmail); //find user by name or phone or email
// router.post("/change-infomation", userController.findUserByNamePhoneEmail); //find user by name or phone or email

export const petRoute = router;
