const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "55.55.55.5",
    user: "root",
    database: "node_db"
  }
});

module.exports = db;
