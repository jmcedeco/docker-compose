import  mysql2 from "mysql2/promise";


export const pool = mysql2.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASS
});

