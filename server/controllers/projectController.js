// Controller for project-related routes
const Project = require("../models/Project");

const getProjects = async (req, res) => {
    // Check for token presence
    const hasToken = req.headers.authorization || req.headers.Authorization;
    try {
        // console.log("Fetching projects from database...");
        const projects = await Project.find();
        if (!hasToken) {
            console.log("No token provided, filtering project data...");
        const filteredProject = projects.map(project => {
            const obj = project.toObject();
            delete obj._id; // Dont send id for public api
            return obj;
        });  
        console.log("Projects fetched successfully:");
        res.status(200).json(filteredProject);
    } else {
res.status(200).json(projects);
    }
        
    } catch (error) {
        console.error("❌ Error fetching projects:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createProject = async (req, res) => {
    try {
    const newProject = new Project(req.body);
    await newProject.save();
    console.log("Project created successfully:");
    res.status(201).json({status: "success", project: newProject});
    
} catch (error) {
    console.error("❌ Error creating project:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
}

const updateProject = async (req, res) => {
    console.log("Received update request for project:", req.params);
try {
    const { id } = req.params;
    console.log("Updating project with id:", id, "with data:", req.body);
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProject) {
        return res.status(404).json({ error: "Project not found" });
    }
    res.json({ status: "success", project: updatedProject });
} catch (error) {
    console.error("❌ Error updating project:", error);
    res.status(500).json({ error: "Internal Server Error" });
}
};

const deleteProject = async (req, res) => {
    console.log("Received delete request for project:", req.params);
    try {
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: "Project not found" });
        }
        console.log("Project deleted successfully:");
        res.json({ status: "success"});
    } catch (error) {
        console.error("❌ Error deleting project:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject
};
