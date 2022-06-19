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
    }
}



export { getClientBy };