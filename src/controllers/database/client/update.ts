import { Client } from "models/client";
import { database } from "services/databaseConnection";
import { getKeysMap } from "utils/database/keysMap";

const updateClientsBy = {
    id: async (id: number, client: Client) => {

        const keysMap = getKeysMap(client, ', ');
        const keysLength = Object.keys(client).length + 1;

        await database.query(
            `UPDATE clients SET ${keysMap} WHERE id = $${keysLength};`,
            [...Object.values(client), id]
        )
    }
}

export { updateClientsBy };