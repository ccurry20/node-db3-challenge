const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("schemes as s")
    .join("steps as st")
    .select("s.scheme_name", "st.step_number", "st.instructions")
    .where("scheme_id", id);
}

function add(userData) {
  return db("schemes").insert(userData);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
