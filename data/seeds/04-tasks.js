
exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 'description1', notes: 'notes here', completed: true, project_id: '1' },
    { description: 'description2', notes: 'more notes', completed: true, project_id: '2' },
    { description: 'description3', notes: 'notessss', completed: true, project_id: '3' },
    { description: 'description4', completed: true, project_id: '1' },
    { description: 'description5', notes: 'here are my other notes', project_id: '2' },
    { description: 'description6', project_id: '3' },
    { description: 'description7', completed: true, project_id: '2' },
    { description: 'description8', notes: 'here are my other notes', project_id: '3' },
    { description: 'description9', project_id: '2' }
  ]);
};
