import { model, Schema } from 'mongoose';

const ProjectSchema = new Schema({
    valueOne: {
        type: String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [25, "Input holds a max of 25 characters!"]
    },
    valueTwo:{
        type:String,
        required: [true, "Input is required!"],
        minlength: [2, "Input requires 2 or more characters!"],
        maxlength: [25, "Input holds a max of 25 characters!"]
    },
    valueThree: {
        type: Number,
        required: [true, "Input is required!"],
        min: [1, "Input requires 1 or more characters!"],
    },
    valueFour: {
        type: Boolean,
        default: false
    },
});

const Project = model('Project', ProjectSchema);
export default Project;