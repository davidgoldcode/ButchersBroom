require("dotenv").config();

const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";
// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/butchersbroom.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
