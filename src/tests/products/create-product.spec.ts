import axios from "axios";

it('should successfully create a new product', async () => {

    const response = await axios({
        url: 'http://localhost:8080/products/',
        method: 'POST',
        data: {
            product_name: 'New product name',
            product_quantity: 10,
            intake_date: new Date().toISOString(),
            due_date: new Date().toISOString()
        }
    });

    expect(response.status).toBe(200);

});
