const db = require('../../data/dbConfig.js');

module.exports = {
    findAll,
}
async function findAll() {
    const rows = await db('resources')
    .select(
    'resource_id',
    'resource_name',
    'resource_description',
    )
    return rows
}
