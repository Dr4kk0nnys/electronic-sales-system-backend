import { createClient } from "controllers/database/client/create";
import { Router } from "express";
import { Client } from "models/client";
const router = Router();

router.post('/', async (req, res) => {
    try {
        const client = await createClient.byDefault(req.body);
        return res.status(200).send({ client });
    } catch (e) {
        return res.status(400).send('Unable to create client.: \n' + e);
    }
})

export { router as createClient };