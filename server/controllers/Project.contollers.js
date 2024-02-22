import Project from "../models/Project.model.js";

async function createOne(req, res){
    try{
        const newProject = await Project.create(req.body)
        res.json(newProject)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function deleteOne(req, res){
    try{
        const deleteProject = await Project.findByIdAndDelete(req.params.id)
        res.json(deleteProject)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
}

async function getAll(req,res){
    try{
        const projects = await Project.find()
        res.json(projects)
    } catch (error){
        console.log(error)
        set.status(400).json(error)
    }
}

async function getOne(req, res){
    try{
    const project = await Project.findById(req.params.id)
    res.json(project)
    } catch (error) {
        console.log(error)
        set.status(400).json(error)
    }
}

async function updateOne(req, res){
    try{
        const updateProject =  await Project.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        res.json(updateProject)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
}

export{
    createOne,
    getOne,
    getAll,
    deleteOne,
    updateOne
}