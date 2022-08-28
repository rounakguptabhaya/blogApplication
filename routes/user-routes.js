import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller';

const router = express.Router();

router.get("/alluser",getAllUser);

router.post("/signup", signup);

router.post("/login", login);

export default router;