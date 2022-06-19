import { Client } from "models/client";
import { database } from "services/databaseConnection";

const deleteClientBy = {
    id: async (id: number): Promise<Client> => {
        return (await database.query(
            `DELETE FROM clients WHERE id = $1 RETURNING *;`,
            [id]
        )).rows[0];
    }
}

export { deleteClientBy };