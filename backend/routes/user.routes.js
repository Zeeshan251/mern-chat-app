import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
// import { login, logout, signup } from '../controllers/auth.controller.js';

import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();


router.get('/', protectRoute, getUsersForSidebar)




export default router;