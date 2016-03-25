'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:EditprojetCtrl
 * @description
 * # EditprojetCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('EditprojetCtrl', function ($scope, $uibModal, $filter, settings, growl, projectService, taskService) {

        $scope.projects = settings.projects;

        $scope.employees = settings.employees;

        var tasks = settings.tasks;

        function mapTasks() {
            $scope.projects.forEach(function (project, projectIndex) {
                project.tasks.forEach(function (projectTask, taskIndex) {
                    tasks.forEach(function (task) {
                        if (projectTask === task._id) {
                            task.displayId = taskIndex + 1;
                            $scope.projects[projectIndex].tasks[taskIndex] = task;
                        }
                    });
                });
            });
        }

        mapTasks();

        //Project
        $scope.selectedProject = {
            title: 'Select Project'
        };

        $scope.createProject = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/modals/createprojectmodal.html',
                controller: 'CreateprojectmodalCtrl',
                resolve: {
                    title: function () {
                        return 'Create New';
                    },
                    currrentProject: function () {
                        return null;
                    },
                    projectCategory: function () {
                        return settings.settings.projectCategory;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                projectService.createProject(result).then(function (project) {
                    project.tasks = [];
                    $scope.projects.push(project);
                    $scope.display(project);
                    growl.success('Project ' + project.title + ' created');
                });
            });

        };

        $scope.editProject = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/modals/createprojectmodal.html',
                controller: 'CreateprojectmodalCtrl',
                resolve: {
                    title: function () {
                        return 'Edit';
                    },
                    currrentProject: function () {
                        return $scope.selectedProject;
                    },
                    projectCategory: function () {
                        return settings.settings.projectCategory;
                    }
                }
            });
            modalInstance.result.then(function (result) {
                projectService.editProject(result).then(function (project) {
                    var index = '';
                    angular.forEach($scope.projects, function (value, key) {
                        index = value._id === $scope.selectedProject._id ? key : index;
                    });
                    $scope.projects[index] = project;
                    mapTasks();
                    $scope.display($scope.projects[index]);
                    growl.info('Project ' + project.title + ' modified');
                });
            });
        };

        //Task

        $scope.tasks = {
            selectedTask: ''
        };
        $scope.addTask = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/modals/createtaskmodal.html',
                controller: 'CreatetaskmodalCtrl',
                resolve: {
                    title: function () {
                        return 'Create New';
                    },
                    taskList: function () {
                        return $scope.selectedProject.tasks;
                    },
                    taskCategory: function () {
                        return settings.settings.taskCategory;
                    },
                    currentTask: function () {
                        return null;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                result.project = $scope.selectedProject._id;
                taskService.createTask(result).then(function (task) {
                    task.displayId = $scope.selectedProject.tasks.length + 1;
                    $scope.selectedProject.tasks.push(task);
                    growl.success('Task ' + task.title + ' added');
                });
            });
        };

        function findSelectedTaskIndex() {
            var index = '';
            angular.forEach($scope.selectedProject.tasks, function (value, key) {
                index = value._id === $scope.tasks.selectedTask._id ? key : index;
            });
            return index;
        }

        $scope.editTask = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/modals/createtaskmodal.html',
                controller: 'CreatetaskmodalCtrl',
                resolve: {
                    title: function () {
                        return 'Edit';
                    },
                    taskList: function () {
                        return $scope.selectedProject.tasks;
                    },
                    taskCategory: function () {
                        return settings.settings.taskCategory;
                    },
                    currentTask: function () {
                        return $scope.tasks.selectedTask;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                var index = findSelectedTaskIndex();
                taskService.editTask(result).then(function (task) {
                    $scope.selectedProject.tasks[index] = task;
                    growl.info('Task ' + task.title + ' modified');
                });
            });
        };

        $scope.deleteTask = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/modals/deletetaskmodal.html',
                controller: 'DeletetaskmodalCtrl',
                resolve: {
                    selectedTaskTitle: function () {
                        return $scope.tasks.selectedTask.title;
                    },
                    selectedTaskDisplayId: function () {
                        return $scope.tasks.selectedTask.displayId;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result) {
                    taskService.deleteTask($scope.tasks.selectedTask).then(function () {
                        var index = findSelectedTaskIndex();
                        $scope.selectedProject.tasks.splice(index, 1);
                        $scope.selectedProject.tasks.forEach(function (projectTask, taskIndex) {
                            projectTask.displayId = taskIndex + 1;
                        });
                        growl.warning('Task ' + $scope.tasks.selectedTask.title + ' removed');
                        $scope.tasks.selectedTask = null;
                    });
                }
            });

        };
        $scope.moveTaskUp = function () {
            console.log($scope.tasks.selectedTask);
        };
        $scope.moveTaskDown = function () {
            console.log($scope.tasks.selectedTask);
        };

        //    Hours
        $scope.taskTime = [1, 2, 4, 8, 12, 16, 24, 32, 40];
        $scope.incrementHours = function (task) {
            var index = $scope.taskTime.indexOf(task.assignedTime);
            task.assignedTime = $scope.taskTime[index + 1];
        };
        $scope.decrementHours = function (task) {
            var index = $scope.taskTime.indexOf(task.assignedTime);
            task.assignedTime = $scope.taskTime[index - 1];
        };


        //Gant Chart
        function toMilliseconds(hours) {
            return hours * 60 * 60 * 1000 * 3;
        }

        var chartData = [];

        function generateChartData() {
            chartData = [];
            chartData.push([
                '100',
                'Expected',
                null,
                moment($scope.selectedProject.startDate).toDate(),
                moment($scope.selectedProject.endDate).toDate(),
                null,
                0,
                null
            ]);

            angular.forEach($scope.selectedProject.tasks, function (task) {
                chartData.push([
                    task.displayId.toString(),
                    task.title,
                    task.assignedTo ? task.assignedTo.name : null,
                    task.dependentTask ? null : moment($scope.selectedProject.startDate).toDate(),
                    null,
                    toMilliseconds(task.assignedTime),
                    0,
                    task.dependentTask ? task.dependentTask.toString() : null
                ]);
            });

        }


        function drawChart() {
            generateChartData();
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('string', 'Resource');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');

            data.addRows(chartData);

            var options = {
                height: ($scope.selectedProject.tasks.length + 1) * 30 + 40,
                gantt: {
                    trackHeight: 30,
                    defaultStartDateMillis: moment($scope.selectedProject.startDate).toDate()
                }
            };

            var projectChart = new google.visualization.Gantt(document.getElementById('chart_div'));
            projectChart.draw(data, options);
        }

        $scope.display = function (project) {
            //            project.tasks = $filter('orderBy')(project.tasks, 'displayId');
            $scope.selectedProject = project;
            drawChart();
        };

        //on Resize
        if (window.addEventListener) {
            window.addEventListener('resize', drawChart, false);
        } else if (window.attachEvent) {
            window.attachEvent('onresize', drawChart);
        }
        $scope.edited = function () {
            console.log('edited');
        };

        $scope.save = function () {
            if ($scope.selectedProject.editedTasks.length > 0) {
                taskService.editTasks($scope.selectedProject.editedTasks).then(function (tasks) {
                    angular.forEach(tasks, function (editedTask) {
                        angular.forEach($scope.selectedProject.tasks, function (task, key) {
                            if (task._id === editedTask._id) {
                                growl.info('Task ' + task.title + ' modified');
                                $scope.selectedProject.tasks[key] = task;
                            }
                        });
                    });
                    $scope.selectedProject.editedTasks = [];
                    drawChart();
                });
            }
        };

        $scope.$watch('selectedProject.tasks', function (newValue, oldValue) {
            if (oldValue) {
                $scope.selectedProject.editedTasks = $scope.selectedProject.editedTasks ? $scope.selectedProject.editedTasks : [];
                $filter('filter')(newValue, function (value, index) {
                    if (!angular.equals(value, oldValue[index])) {
                        var taskExist = false;
                        angular.forEach($scope.selectedProject.editedTasks, function (editedTask, key) {
                            if (editedTask._id === value._id) {
                                $scope.selectedProject.editedTasks[key] = value;
                                taskExist = true;
                            }
                        });
                        if (!taskExist) {
                            $scope.selectedProject.editedTasks.push(value);
                        }
                    }
                });
            }
        }, true);

        $scope.isTaskEdited = function (task) {
            if ($scope.selectedProject.editedTasks) {
                return $scope.selectedProject.editedTasks.indexOf(task) !== -1;
            }
        };

    });