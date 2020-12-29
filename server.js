const express = require('express');
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const TodoTask = require("./models/TodoTask");

dotenv.config();

// Setting up MongoDB
mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true
    },
    () => {
        console.log("Connected to db!");
    }
);

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Static Files
app.use('/', express.static(path.join(__dirname, 'public')));

/* For refactoring the code once the basic version is completed */
// app.use('/api', require('./routes/api').route);


// To Render the list
app.get('/', (req, res, next) => {



    TodoTask.find({}, (err, tasks) => {
        console.log(" im task\n", tasks);
        res.render("index.ejs", {
            todoTasks: tasks
        });
        // res.render('index.ejs');
    });

});

app.post('/', async (req, res, next) => {

    console.log("iam the body\n", req.body);

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

app.listen(8000, (req, res, next) => {
    console.log("Server started on https://localhost:8000");
});