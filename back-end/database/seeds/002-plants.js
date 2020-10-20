exports.seed = function (knex) {
  return knex("plants").insert([
    {
      name: "Rosetta",
      species: "Rose",
      frequency: 1,
      user_id: 1,
      last_watered: "2020-03-03",
    },
    {
      name: "Nick",
      species: "Butchers Broom",
      frequency: 1,
      user_id: 1,
      last_watered: "2020-03-03",
    },
    {
      name: "Pao",
      species: "Daisy",
      frequency: 2,
      user_id: 1,
      last_watered: "2020-03-03",
    },
  ]);
};
