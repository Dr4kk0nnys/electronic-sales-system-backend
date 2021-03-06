import axios from "axios";

it('should successfully remove a new client', async () => {

    /* Note: Creating a new client */
    await axios({
        url: 'http://localhost:8080/clients/',
        method: 'POST',
        data: {
            client_name: 'Client name',
            phone_number: '+00 (00) 0 0000-0000',
            cpf: '000.000.000-00',
            client_address: 'Client address street 134, b'
        }
    });

    const response = await axios({
        url: 'http://localhost:8080/clients/',
        method: 'DELETE',
        params: {
            id: 1
        }
    })

    expect(response.status).toBe(200);
});
