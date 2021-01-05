const route = require('express').Router();
const TodoTask = require("../../models/TodoTask");

route.route("/remove/:id").get((req, res) => {

    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});

exports = module.exports = {
    route,
}

