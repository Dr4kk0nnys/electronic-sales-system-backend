# Clients

<details>
<summary>SQL</summary>

<br>

```sql
CREATE TABLE clients ( id SERIAL PRIMARY KEY, name VARCHAR(255), cpf VARCHAR(255), phone_number VARCHAR(255), address VARCHAR(255) );

CREATE UNIQUE INDEX clients_cpf_indexation ON users (cpf);
```

</details>

```sql
                                       Table "public.clients"
    Column    |          Type          | Collation | Nullable |               Default               
--------------+------------------------+-----------+----------+-------------------------------------
 id           | integer                |           | not null | nextval('clients_id_seq'::regclass)
 name         | character varying(255) |           |          | 
 cpf          | character varying(255) |           |          | 
 phone_number | character varying(255) |           |          | 
 address      | character varying(255) |           |          | 
Indexes:
    "clients_pkey" PRIMARY KEY, btree (id)

```