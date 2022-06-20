import { Router } from "express";
const router = Router();

import { createProductBy } from "controllers/database/product/create";

router.post('/', async (req, res) => {
    try {
        const product = await createProductBy.default(req.body);
        return res.status(200).send({ product });
    } catch (e) {
        return res.status(400).send('Unable to create product.: \n' + e);
    }
})

export { router as createProduct };