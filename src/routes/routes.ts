import { Router } from "express";
const routes = Router();

/* Note: Routes */
import { createClient } from "./client/create";
import { deleteClient } from "./client/delete";
import { getClient } from "./client/get";
import { updateClient } from "./client/update";

/* Note: Using routes */
routes.use('/clients', [getClient, createClient, updateClient, deleteClient]);

export { routes }