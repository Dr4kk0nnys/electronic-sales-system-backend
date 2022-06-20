import { Router } from "express";
const router = Router();

import { deleteProductBy } from "controllers/database/product/delete";

router.delete('/', async (req, res) => {
    const product = await deleteProductBy.id(req.body.id);

    return res.status(200).send({ product });
});

export { router as deleteProduct };