import { Product } from "models/product";
import { database } from "services/databaseConnection";
import { getKeysMap } from "utils/database/keysMap";

const updateProductsBy = {
    id: async (id: number, product: Product) => {

        const keysMap = getKeysMap(product, ', ');
        const keysLength = Object.keys(product).length + 1;

        await database.query(
            `UPDATE products SET ${keysMap} WHERE id = $${keysLength};`,
            [...Object.values(product), id]
        )
    }
}

export { updateProductsBy };