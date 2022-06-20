# Clients

<details>
<summary>SQL</summary>

<br>

```sql
CREATE TABLE clients ( id SERIAL PRIMARY KEY, client_name VARCHAR(255), cpf VARCHAR(255), phone_number VARCHAR(255), client_address VARCHAR(255) );

CREATE UNIQUE INDEX clients_cpf_indexation ON users (cpf);
```

</details>

```sql
                                        Table "public.clients"
     Column     |          Type          | Collation | Nullable |               Default               
----------------+------------------------+-----------+----------+-------------------------------------
 id             | integer                |           | not null | nextval('clients_id_seq'::regclass)
 client_name    | character varying(255) |           |          | 
 cpf            | character varying(255) |           |          | 
 phone_number   | character varying(255) |           |          | 
 client_address | character varying(255) |           |          | 
Indexes:
    "clients_pkey" PRIMARY KEY, btree (id)
```

# Products

<details>
<summary>SQL</summary>

<br>

```sql
CREATE TABLE products ( id SERIAL PRIMARY KEY, product_name VARCHAR(255), product_quantity INTEGER, intake_date VARCHAR(255), due_date VARCHAR(255) );
```

</details>

```sql
                                         Table "public.products"
      Column      |          Type          | Collation | Nullable |               Default                
------------------+------------------------+-----------+----------+--------------------------------------
 id               | integer                |           | not null | nextval('products_id_seq'::regclass)
 product_name     | character varying(255) |           |          | 
 product_quantity | integer                |           |          | 
 intake_date      | character varying(255) |           |          | 
 due_date         | character varying(255) |           |          | 
Indexes:
    "products_pkey" PRIMARY KEY, btree (id)
```