
exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 't-description1', notes: 'notes here', completed: true, project_id: '1' },
    { description: 't-description2', notes: 'more notes', completed: true, project_id: '2' },
    { description: 't-description3', notes: 'notessss', completed: true, project_id: '3' },
    { description: 't-description4', completed: true, project_id: '1' },
    { description: 't-description5', notes: 'here are my other notes', project_id: '2' },
    { description: 't-description6', project_id: '3' },
    { description: 't-description7', completed: true, project_id: '2' },
    { description: 't-description8', notes: 'here are my other notes', project_id: '3' },
    { description: 't-description9', project_id: '2' }
  ]);
};
