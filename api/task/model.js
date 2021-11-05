const db = require('../../data/dbConfig.js');

module.exports = {
    findAll,
    add,
}
async function findAll() {
    const rows = await db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
    't.task_id',
    't.task_notes',
    't.task_description',
    't.task_completed',
    'p.project_description',
    'p.project_name'
    )
    return rows
}

async function findById(id) {
    const rows = await db('projects')
    .select(
    'project_id',
    'project_name',
    'project_description',
    'project_completed'
    )
    .where('project_id', id).first()
    return rows
}

async function add(project) {
    return await db('projects').insert(project)
    .then(async id => {
    return findById(id)
    })
    
}
