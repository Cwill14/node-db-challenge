
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'Resource 1', resource_description: 'r-description1'},
    { name: 'Resource Numero Dos', resource_description: 'r-description2'},
    { name: '3rd Resource' }
  ]);
};
