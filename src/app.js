const express = require('express');
const Student = require('./models/Student');


const app = express();

// middleware 
app.use(express.json());

// Routes

// Get all the students
app.get('/students', async (req, res) => {
    // write your codes here
    try{
    const customerInfo = await Student.find();
    res.send(customerInfo);
    }catch(err){
        res.status(404).send(err)
    }

})

// Add student to database
app.post('/students', async (req, res) =>{
    // write your codes here
    const today = new Date();
    try{
        const rowdata = new Student({
            name: req.body.name,
            sex: req.body.sex,
            class: req.body.class,
            age: req.body.age,
            grade_point: req.body.grade_point,
            time: today
        })
        const data = await rowdata.save();
        res.send(data)
    }catch(err){
        res.status(404).send(err);
    }
})

// Get specific student
app.get('/students/:id', async (req, res) =>{
    // write your codes here
    try{
    var id = req.params.id;
    const customerInfo = await Student.findOne({_id:id});
    res.send(customerInfo);
    }catch(err){
        res.status(404).send(err);
    }
    

})

// delete specific student
app.delete('/students/:id', async (req, res) =>{
    // write your codes here
    var id = req.params.id;
    // if()
    Student.findOneAndRemove({_id : id}, function(err){
        if(err){
            console.log(err);
            res.status(404).send(err);
        }
        res.send("Deleted")
    })
}) 

module.exports = app;
