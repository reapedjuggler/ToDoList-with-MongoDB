const route = require('express').Router();

route.use('/addTodo', require('./addTodo').route);
route.use('/deleteTodo', require('./deleteTodo').route);
route.use('/updateTodo', require('./updateTodo').route);


exports = module.exports = {
    route,
};

