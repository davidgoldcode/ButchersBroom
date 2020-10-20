exports.up = function (knex) {
  return (
    knex.schema
      // Users Table
      .createTable("users", (users) => {
        users.increments();

        users.string("username", 128).notNullable().unique();
        users.string("email", 128).notNullable().unique();
        users.string("password", 128).notNullable();
      })
      // Plant Table
      .createTable("plants", (plant) => {
        plant.increments();

        plant.string("name", 256).notNullable().unique();
        plant.string("species", 256).notNullable();
        plant.integer("frequency", 256);
        plant.date("last_watered");
        // connect plant with the user that created it
        plant
          .integer("user_id")
          .unsigned()
          .references("users.id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
