import { Router } from "express";
const routes = Router();

/* Note: Routes */
import { createClient } from "./client/create";

/* Note: Using routes */
routes.use('/clients', createClient);

export { routes }