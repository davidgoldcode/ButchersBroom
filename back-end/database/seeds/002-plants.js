exports.seed = function (knex) {
  return knex("plants").insert([
    {
      name: "Rosetta",
      species: "Rose",
      frequency: 1,
      user_id: 1,
      notes: "Needs TLC",
      last_watered: "2020-03-03",
    },
    {
      name: "Nick",
      species: "Butchers Broom",
      frequency: 1,
      user_id: 1,
      notes: "Got at farmers market",
      last_watered: "2020-03-03",
    },
    {
      name: "Pao",
      species: "Daisy",
      frequency: 2,
      user_id: 1,
      notes: "Need to find somebody to water while on vacation",
      last_watered: "2020-03-03",
    },
  ]);
};
