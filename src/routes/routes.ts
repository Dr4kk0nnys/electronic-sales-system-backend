import { Router } from "express";
const routes = Router();

/* Note: Routes */
import { createClient } from "./client/create";
import { getClient } from "./client/get";

/* Note: Using routes */
routes.use('/clients', createClient);
routes.use('/clients', getClient);


export { routes }