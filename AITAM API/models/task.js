'use strict';

var db = require('../middlewares/mongo').getMongo();

var Schema = db.Schema;

var taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    displayId: {
        type: Number,
        required: true
    },
    description: String,
    projet: String,
    priority: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dependentTask: Number,
    status: {
        type: String,
        required: true,
        default: 'Created'
    },
    assignedTo: String,
    assignedTime: Number,
    timeTaken: Number,
    rating: Number,
    createdAt: Date,
    updatedAt: Date
});

taskSchema.methods = {
    setCreatedDate: function () {
        this.createdAt = new Date();
    },
    setUpdatedDate: function () {
        this.updatedAt = new Date();
    }
};

var Task = db.model('Task', taskSchema);

module.exports = {
    create: function (task) {
        var newTask = new Task(task);
        newTask.setCreatedDate();
        return newTask.save(function (err, result) {
            if (err) {
                return console.error(err);
            }
            console.log('DB: Task', result.title, ' - is created');
            return result;
        });
    },
    update: function (task) {
        var options = {
            new: true
        };
        task.updatedAt = new Date();
        return Task.findByIdAndUpdate(task._id, task, options).then(function (result) {
            console.log('DB: Task', result.title, ' - is updated');
            return result;
        });
    },
    getOne: function (title) {
        console.log('DB', 'fetching Task details of - ', title);
        return Task.findOne({
            title: title
        });
    },
    getAll: function () {
        console.log('DB', 'fetching tasks');
        return Task.find({
            status: {
                '$ne': 'Completed'
            }
        });
    }
};