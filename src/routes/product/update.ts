import { Router } from "express";
const router = Router();

import { getProductBy } from "controllers/database/product/get";
import { updateProductsBy } from "controllers/database/product/update";

router.put('/', async (req, res) => {

    const { id } = req.body;
    const product = await getProductBy.id(id);

    if (!product) return res.status(400).send('Product not found');

    /* Note: Removing id so it won't interferer with update */
    delete req.body.id;
    delete product['id'];

    /* Note: Assigning new product to old product */
    for (const key of Object.keys(product)) {
        req.body[key] ? product[key] = req.body[key] : null;
    }

    /* Note: Updating the product */
    await updateProductsBy.id(id, product);

    return res.status(200).send({ product });

});

export { router as updateProduct };