import { Product } from "models/product";
import { database } from "services/databaseConnection";
import { getKeysMap } from "utils/database/keysMap";

const getProductBy = {
    any: async (parameters: Record<string, unknown>): Promise<Product | Product[]> => {

        const keysMap = getKeysMap(parameters);

        return (await database.query(
            `SELECT * FROM products WHERE ${keysMap};`,
            Object.values(parameters)
        )).rows;
    },

    id: async (id: number): Promise<Product> => {
        return (await database.query(
            `SELECT * FROM products WHERE id = $1`,
            [id]
        )).rows[0];
    }
}



export { getProductBy };