import { Client } from "models/client";
import { database } from "services/databaseConnection";
import { getKeysMap } from "utils/database/keysMap";

const getClientBy = {
    any: async (parameters: Record<string, unknown>): Promise<Client | Client[]> => {

        const keysMap = getKeysMap(parameters);

        return (await database.query(
            `SELECT * FROM clients WHERE ${keysMap};`,
            Object.values(parameters)
        )).rows;
    },

    id: async (id: number): Promise<Client> => {
        return (await database.query(
            `SELECT * FROM clients WHERE id = $1`,
            [id]
        )).rows[0];
    }
}



export { getClientBy };