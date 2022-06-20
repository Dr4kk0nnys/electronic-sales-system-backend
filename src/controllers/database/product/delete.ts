import { Product } from "models/product";
import { database } from "services/databaseConnection";

const deleteProductBy = {
    id: async (id: number): Promise<Product> => {
        return (await database.query(
            `DELETE FROM products WHERE id = $1 RETURNING *;`,
            [id]
        )).rows[0];
    }
}

export { deleteProductBy };