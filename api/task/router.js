const express = require('express');
const Task = require('./model.js');

const router = express.Router()
router.get('/', (req,res,next) => {
    Task.findAll(req.query)
    .then(tasks => {
        console.log(tasks)
        res.json(tasks.map( task => {
            return {...task, task_completed: !!task.task_completed}

        }))
        console.log(tasks)
    })
    .catch(next)
})

// router.post('/', (req, res, next) => {
//     const project = req.body

//     Project.add(project)
//     .then(project => {
//         console.log(project)
//      res.status(201).json({...project, project_completed: !!project.project_completed})
//     })
//     .catch(next)
// })
module.exports = router
