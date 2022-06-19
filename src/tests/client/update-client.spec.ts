import axios from "axios";

it('should successfully update a new client', async () => {

    /* Note: Creating a new client */
    await axios({
        url: 'http://localhost:8080/clients/',
        method: 'POST',
        data: {
            name: 'Client name',
            phone_number: '+00 (00) 0 0000-0000',
            cpf: '000.000.000-00',
            address: 'Client address street 134, b'
        }
    });

    const response = await axios({
        url: 'http://localhost:8080/clients/',
        method: 'PUT',
        params: {
            id: 1,
            name: 'New client name',
            phone_number: '+00 (00) 0 0000-0000',
            cpf: '111.111.111-11',
            address: 'Client address street 134, b'
        }
    })

    expect(response.status).toBe(200);

});
