// import { PrismaClient } from "@prisma/client";
import mysql from 'mysql2/promise';

// const prisma = new PrismaClient();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'app',
    password: 'Beezus5263',
    database: 'site'
});

export default async function handler(req, res) {
    const [rows] = await pool.query('SELECT * FROM bday');
    res.status(200).json(rows);
}

// export default async function handler(req, res) {
//     const users = await prisma.user.findMany();
//     res.status(200).json(users);
// }