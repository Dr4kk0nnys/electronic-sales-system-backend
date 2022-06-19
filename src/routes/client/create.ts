import { Router } from "express";
const router = Router();

import { createClientBy } from "controllers/database/client/create";

router.post('/', async (req, res) => {
    try {
        const client = await createClientBy.default(req.body);
        return res.status(200).send({ client });
    } catch (e) {
        return res.status(400).send('Unable to create client.: \n' + e);
    }
})

export { router as createClient };