import  mysql2 from "mysql2/promise";


export const pool = mysql2.createPool({
    host:"nozomi.proxy.rlwy.net",
    port:38793,
    database:"railway",
    user:"root",
    password:"UaHyCCVLaQyPcYmFpzxaUDbkccfVTYNG"
});

