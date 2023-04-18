import { Router } from "express";

const router = new Router();

router.get('/users', (req, res) => {
    const users = [
        {
            name: "João",
            email: "joao@gmail.com"
        },
        {
            name: "José",
            email: "jose@gmail.com"
        }
    ];
    res.json(users);
});

export default router;