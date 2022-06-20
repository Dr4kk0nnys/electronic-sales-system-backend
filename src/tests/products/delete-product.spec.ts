import axios from "axios";

it('should successfully remove a new product', async () => {

    /* Note: Creating a new product */
    await axios({
        url: 'http://localhost:8080/products/',
        method: 'POST',
        data: {
            product_name: 'New product name',
            product_quantity: 10,
            intake_date: new Date().toISOString(),
            due_date: new Date().toISOString()
        }
    });

    const response = await axios({
        url: 'http://localhost:8080/products/',
        method: 'DELETE',
        params: {
            id: 1
        }
    })

    expect(response.status).toBe(200);
});
