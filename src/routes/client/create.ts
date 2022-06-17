import { Router } from "express";
import { Client } from "models/client";
const router = Router();

router.post('/', async (req, res) => {
    const client: Client = req.body;

})

export { router as createClient };