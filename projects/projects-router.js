const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        const projects = await Projects.getProjects();
        console.log(projects);
        projects.forEach(project => {
            project.completed == 1
                ? project.completed = 'true'
                : project.completed = 'false'
        })
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;