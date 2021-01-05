const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('TodoTask', todoTaskSchema);

/*

                <% todoTasks.forEach(itr => { %>

                <li class="todo-list-item">

                    <div class="todo-list-item-name"> <%= itr.content%> </div>

                    <a href="/edit/<%= itr._id %>" class="edit">
                        <span class="fas fa-edit"></span>
                    </a>

                    <a href="/remove/<%= itr._id %>" class="remove">
                        <span class= "fas fa-times"></span>
                    </a>

                </li>

                <% }) %>
*/