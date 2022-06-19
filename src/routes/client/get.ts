import { Router } from "express";
const router = Router();

import { getClientBy } from "controllers/database/client/get";

router.get('/', async (req, res) => {
    const client = await getClientBy.any(req.query);

    if (!client) return res.status(400).send('Client not found');

    return res.status(200).send({ client });
})

export { router as getClient };