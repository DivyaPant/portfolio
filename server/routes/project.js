const express = require("express");
const router = express.Router();

const {getProjects, createProject, updateProject, deleteProject} = require('../controllers/projectController');
const verifyToken = require("../config/auth");

router.get('/', getProjects);
router.post('/', verifyToken, createProject);
router.patch('/:id', verifyToken, updateProject);
router.delete('/:id', verifyToken, deleteProject);


module.exports = router;