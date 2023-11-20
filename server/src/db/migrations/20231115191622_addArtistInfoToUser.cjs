/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.table("users", (table) => {
    table.string("name").notNullable();
    table.string("location").notNullable();
    table.string("style");
    table.text("bio");
    table.string("website");
  });
};

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.table("users", (table) => {
    table.dropColumn("name");
    table.dropColumn("location");
    table.dropColumn("style");
    table.dropColumn("bio");
    table.dropColumn("website");
  });
};
