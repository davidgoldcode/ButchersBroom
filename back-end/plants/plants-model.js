const db = require("../connection.js");

module.exports = {
  getAll,
  getBy,
  add,
  edit,
  remove,
  getById,
};

function getAll(user_id) {
  return db("plants").where({ user_id });
}

function getBy(info) {
  return db("plants").where(info).orderBy("id");
}

function getById(id) {
  return db("plants").where({ id }).first();
}

async function add(details) {
  try {
    const [id] = await db("plants").insert(details, "id");
    return getById(id);
  } catch (error) {
    throw error;
  }
}

function remove(id) {
  return getById(id).del();
}

function edit(id, details) {
  return getById(id).update(details);
}
