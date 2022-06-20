import { Router } from "express";
const router = Router();

import { getProductBy } from "controllers/database/product/get";

router.get('/', async (req, res) => {
    const product = await getProductBy.any(req.query);

    if (!product) return res.status(400).send('Product not found');

    return res.status(200).send({ product });
})

export { router as getProduct };