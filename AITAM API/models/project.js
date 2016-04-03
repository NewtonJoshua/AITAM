'use strict';

var db = require('../middlewares/mongo').getMongo();

var Schema = db.Schema;

var projetSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Created'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    priority: String,
    tasks: [String],
    createdAt: Date,
    updatedAt: Date
});

projetSchema.methods = {
    setCreatedDate: function () {
        this.createdAt = new Date();
    },
    setUpdatedDate: function () {
        this.updatedAt = new Date();
    }
};

var Project = db.model('Project', projetSchema);

module.exports = {
    create: function (project) {
        var newProject = new Project(project);
        newProject.setCreatedDate();
        return newProject.save(function (err, result) {
            if (err) {
                return console.error(err);
            }
            console.log('DB: Project', result.title, ' - is created');
            return result;
        });
    },
    update: function (project) {
        var options = {
            new: true
        };
        project.updatedAt = new Date();
        return Project.findByIdAndUpdate(project._id, project, options).then(function (result) {
            console.log('DB: Project', result.title, ' - is updated');
            return result;
        });
    },
    getOne: function (title) {
        console.log('DB', 'fetching Project details of - ', title);
        return Project.findOne({
            title: title
        });
    },
    getAll: function () {
        console.log('DB', 'fetching projects');
        return Project.find({
            status: {
                '$ne': 'Completed'
            }
        });
    },
    addTask: function (task) {
        task.updatedAt = new Date();
        return Project.update({
            _id: task.project
        }, {
            $push: {
                tasks: task._id
            }
        }, {
            new: true
        }).then(function (result) {
            console.log('DB: Task', task.title, ' - is added to Project ', task.project);
            return result;
        });
    },
    deleteTask: function (task) {
        task.updatedAt = new Date();
        return Project.update({
            _id: task.project
        }, {
            $pull: {
                tasks: task._id
            }
        }, {
            new: true
        }).then(function () {
            console.log('DB: Task', task.title, ' - is removed from Project ', task.project);
            return true;
        });
    },
    delete: function (project) {
        return Project.findByIdAndRemove(project._id).then(function (result) {
            console.log('DB', 'removing project -', project.title);
            return result;
        });

    }
};