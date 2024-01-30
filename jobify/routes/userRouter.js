import { Router } from "express";
import { UpdateUser, getAppilcationStats, getCurrentUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();


router.get('/current-user',getCurrentUser);
router.post('/admin/app-stats',[authorizePermissions('admin'),getAppilcationStats]);
router.patch('/update-user',validateUpdateUserInput,UpdateUser);

export default router