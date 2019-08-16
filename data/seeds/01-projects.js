
exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'Project Numero Uno', description: 'description1', completed: true },
    { name: 'Second Project', description: 'description 2' },
    { name: 'Project 3'  }
  ]);
};
