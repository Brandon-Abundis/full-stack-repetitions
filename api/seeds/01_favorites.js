/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    { title: 'Rogue One: A Star Wars Story', main_character: 'Jyn Erso', year_released:'2016-12-16'}, //YYYY-MM-DD
    { title: 'Dune: Part Two', main_character: 'Paul Atreides', year_released:'2024-03-01'},
    { title: 'Uma Musume: Pretty Derby - Beginning of a New Era', main_character: 'Jungle Pocket', year_released:'2026-02-27'},
  ]);
};
