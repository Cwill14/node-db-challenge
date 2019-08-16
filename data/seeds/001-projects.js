
exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'Project Numero Uno', project_description: 'p-description1', completed: true },
    { name: 'Second Project', project_description: 'p-description 2' },
    { name: 'Project 3'  }
  ]);
};
