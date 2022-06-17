import { Client } from 'pg';

const database = new Client({
    host: '127.0.0.1',
    user: 'dr4kk0nnys',
    port: 5432,
    password: '',
    database: 'electronic_sales_system'
});

export { database };