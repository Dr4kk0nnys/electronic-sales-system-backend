import { Router } from "express";
const routes = Router();

/* Note: Routes */
import { createClient } from "./client/create";
import { deleteClient } from "./client/delete";
import { getClient } from "./client/get";
import { updateClient } from "./client/update";

import { createProduct } from "./product/create";
import { deleteProduct } from "./product/delete";
import { getProduct } from "./product/get";
import { updateProduct } from "./product/update";

/* Note: Using routes */
routes.use('/clients', [getClient, createClient, updateClient, deleteClient]);
routes.use('/products', [getProduct, createProduct, updateProduct, deleteProduct]);

export { routes }