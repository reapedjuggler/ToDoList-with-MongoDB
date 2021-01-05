const route = require('express').Router();
const TodoTask = require("../../models/TodoTask");

route.post('/', async (req, res, next) => {

    const todoTask = new TodoTask({
        content: req.body.content
    });

    try {
        await todoTask.save();
        res.redirect('/');

    } catch (err) {
        res.redirect('/');
    }

});

exports = module.exports = {
    route,
}

