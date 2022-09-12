const mongoose = require('mongoose');

// uncomment codes 

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    sex: {
        type: String,
        // required: true,
    },
    age: {
        type: Number,
        // required: true,
    },
    class: {
        type: String,
        // required: true,
    },
    grade_point:{
        type: Number,
        // required: true
    },
    time:{
        type: Date,
        default: Date.now,
        // required: true
    },
    isDeleted:{
        type: Boolean,
        default: false,
        // required: true,
    },
    hard:{
        type: String,
    }
})


const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;