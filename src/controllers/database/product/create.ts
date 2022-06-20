import { Product } from "models/product";
import { database } from "services/databaseConnection";
import { anonymousKeysMap, createKeysMap } from "utils/database/keysMap";

const createProductBy = {
    default: async (product: Product): Promise<Product> => {

        const keysMap = createKeysMap(product);
        const valuesMap = anonymousKeysMap(product);

        return (await database.query(
            `INSERT INTO products(${keysMap}) VALUES(${valuesMap}) RETURNING *;`,
            Object.values(product)
        )).rows[0];
    }
}



export { createProductBy };