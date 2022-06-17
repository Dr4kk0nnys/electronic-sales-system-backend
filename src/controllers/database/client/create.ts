import { Client } from "models/client";
import { database } from "services/databaseConnection";
import { anonymousKeysMap, createKeysMap } from "utils/database/keysMap";

const createClient = {
    byDefault: async (client: Client) => {

        const keysMap = createKeysMap(client);
        const valuesMap = anonymousKeysMap(client);

        return (await database.query(
            `INSERT INTO clients(${keysMap}) VALUES(${valuesMap}) RETURNING *;`,
            Object.values(client)
        )).rows[0];
    }
}



export { createClient };