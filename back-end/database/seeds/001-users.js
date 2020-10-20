exports.seed = function (knex) {
  return knex("users").insert([
    { username: "David", password: "password", email: "david@aol.com" },
    { username: "John", password: "password123", email: "john@aol.com" },
    { username: "Nick", password: "pass", email: "nick@aol.com" },
  ]);
};
