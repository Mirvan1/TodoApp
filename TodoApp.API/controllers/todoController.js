const Todo = require('../models/todo');  
const {  validationResult } = require("express-validator");


exports.getAllTodos = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const todos = await Todo.findAll({
            where:{UserId:req.user.userId,
                DeletedAt:null
            }
        });
        if(!todos){
            return res.status(404).json({ message: "Any Todo not found " });
        }
    
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createTodo = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const newData=req.body;
        newData.UserId=req.user.userId;
        const todo = await Todo.create(newData);
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const todo = await Todo.findOne({
            where:{
                Id:req.params.id,
                UserId:req.user.userId,
                DeletedAt:null

            }
        });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found or not accessible by this user" });
        }
        res.json(todo);

     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const todo = await Todo.findOne({
            where:{
                Id:req.body.Id,
                UserId:req.user.userId
            }
        });
        if(!todo){
            res.status(404).json({error:'Todo not found'});
        }
        else if(todo.deletedAt){
            res.status(404).json({error:'Todo already deleted.Cannot updatable'});

        }
        await todo.update(req.body);
        res.json(todo);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteTodo = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const todo = await Todo.findByPk(req.params.id);
        if(!todo){
            res.status(404).json({error:'Todo not found'});
        }
        todo.DeletedAt=new Date();

        try {
            await todo.save();
            res.status(204).send();  
          } catch (error) {
            res.status(500).json({error: 'Failed to update todo'});
          }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};