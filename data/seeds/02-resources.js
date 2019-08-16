
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'Resource 1', description: 'description1'},
    { name: 'Resource Numero Dos', description: 'description2'},
    { name: '3rd Resource' }
  ]);
};
