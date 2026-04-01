/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * favorites: [id, title, main_character, year_released]
 */
exports.up = function(knex) {
  return knex.schema.createTable('favorites', table => {
    table.increments();
    table.string('title');
    table.string('main_character');
    table.date('year_released'); //YYYY-MM-DD

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('favorites');
};
