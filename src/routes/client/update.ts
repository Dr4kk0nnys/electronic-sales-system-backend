import { Router } from "express";
const router = Router();

import { getClientBy } from "controllers/database/client/get";
import { updateClientsBy } from "controllers/database/client/update";

router.put('/', async (req, res) => {

    const { id } = req.body;
    const client = await getClientBy.id(id);

    if (!client) return res.status(400).send('Client not found');

    /* Note: Removing id so it won't interferer with update */
    delete req.body.id;
    delete client['id'];

    /* Note: Assigning new client to old client */
    for (const key of Object.keys(client)) {
        req.body[key] ? client[key] = req.body[key] : null;
    }

    console.log({ client, body: req.body });

    /* Note: Updating the client */
    await updateClientsBy.id(id, client);

    return res.status(200).send({ client });

});

export { router as updateClient };