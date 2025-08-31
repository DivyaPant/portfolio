const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    skillTags: { type: [String], default: []},
    createdAt: { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now },
    published: { type: Boolean, default: false },
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;