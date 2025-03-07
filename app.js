const express = require("express");
require("dotenv").config();
const { Pool } = require('pg');
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const path = require("node:path");
const allMessages = require("./routes/allMessages")
const fs = require("fs");
const pg = require("pg");

const app = express();
const PORT = 5432;
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", allMessages)

// const pool = new Pool({
//     host: PGHOST,
//     database: PGDATABASE,
//     username: PGUSER,
//     password: PGPASSWORD,
//     port: 5432,
//     ssl: {
//       require: true,
//     },
//   });

// async function getPgVersion() {
//   const client = await pool.connect();
//   try {
//     const result = await client.query('SELECT version()');
//     console.log(result.rows[0]);
//     }finally {
//       client.release();
//     }
//   }
// getPgVersion();  
app.listen(PORT,"0.0.0.0", () => {
  
});
