import { deleteClientBy } from "controllers/database/client/delete";
import { Router } from "express";
const router = Router();

router.delete('/', async (req, res) => {
    const client = await deleteClientBy.id(req.body.id);

    return res.status(200).send({ client });
});

export { router as deleteClient };