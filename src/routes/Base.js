import { Router } from "express";
import UserRouter from "./users/Users.js";

const router = new Router();

router.get('/', (req, res) => {
    res.send('Oi tudo bem!');
});

router.use(UserRouter);

export default router;