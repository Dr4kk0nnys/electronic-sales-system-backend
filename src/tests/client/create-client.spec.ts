import axios from "axios";

it('should successfully create a new client', async () => {

    const response = await axios({
        url: 'http://localhost:8080/clients/',
        method: 'POST',
        data: {
            name: 'Client name',
            phone_number: '+00 (00) 0 0000-0000',
            cpf: '000.000.000-00',
            address: 'Client address street 134, b'
        }
    });

    expect(response.status).toBe(200);

});
