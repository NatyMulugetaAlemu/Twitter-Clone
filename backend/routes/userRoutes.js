import express from "express"
import { getMe, login, logout, signup } from "../controllers/authControllers.js"
import { protectRoute } from "../middleware/protectRoute.js"
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateProfile } from "../controllers/userController.js"

const router=express.Router()

router.get("/profile/:username",protectRoute,getUserProfile)
router.get("/suggested",protectRoute,getSuggestedUsers)
router.post("/follow/:id",protectRoute,followUnfollowUser)
router.post("/update",protectRoute,updateProfile)

export default router