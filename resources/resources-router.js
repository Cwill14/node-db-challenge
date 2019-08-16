const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ error: err})
        })
})

module.exports = router;
