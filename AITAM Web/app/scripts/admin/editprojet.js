'use strict';

/**
 * @ngdoc function
 * @name aitamApp.controller:EditprojetCtrl
 * @description
 * # EditprojetCtrl
 * Controller of the aitamApp
 */
angular.module('aitamApp')
    .controller('EditprojetCtrl', function ($scope, $uibModal) {



        $scope.projects = [{
            id: 1,
            category: 'App',
            title: 'AITAM',
            status: 'Started',
            tasks: []
                }, {
            id: 2,
            category: 'Web Site',
            title: 'Newton Joshua',
            status: 'Created',
            tasks: []
                }, {
            id: 3,
            category: 'Internal',
            title: 'Get Ur App',
            status: 'Created',
            tasks: []
                }];

        $scope.employees = [
            {
                name: 'UX Designer',
                id: '100001',
                isManager: false
            },
            {
                name: 'UI Developer1',
                id: '100002',
                isManager: false
            },
            {
                name: 'UX Developer2',
                id: '100003',
                isManager: false
            },
            {
                name: 'API Developer',
                id: '100004',
                isManager: false
            },
            {
                name: 'Manager',
                id: '600006',
                isManager: true
            }
    ];

        //Project
        $scope.selectedProject = {
            title: 'Select Project'
        };
        $scope.createProject = function () {

            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/createprojectmodal.html',
                controller: 'CreateprojectmodalCtrl',
                resolve: {}
            });

            modalInstance.result.then(function (project) {
                project.tasks = [];
                $scope.projects.push(project);
                $scope.display(project);
            });

        };

        //Task
        var taskId = 0;
        $scope.addTask = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/admin/createtaskmodal.html',
                controller: 'CreatetaskmodalCtrl',
                resolve: {
                    taskList: function () {
                        return $scope.selectedProject.tasks;
                    }
                }
            });

            modalInstance.result.then(function (task) {
                taskId++;
                task.id = taskId;
                $scope.selectedProject.tasks.push(task);
            });


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
        google.charts.load('current', {
            'packages': ['gantt']
        });

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
            chartData.push([
                '101',
                'Actual',
                null,
                moment($scope.selectedProject.startDate).toDate(),
                moment($scope.selectedProject.endDate).toDate(),
                null,
                0,
                null
            ]);

            angular.forEach($scope.selectedProject.tasks, function (task) {
                chartData.push([
                    task.id.toString(),
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
                gantt: {
                    defaultStartDateMillis: moment($scope.selectedProject.startDate).toDate()
                }
            };

            var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

            chart.draw(data, options);
        }

        google.charts.setOnLoadCallback(drawChart);

        $scope.save = function () {
            drawChart();
        };

        $scope.display = function (project) {
            $scope.selectedProject = project;
            drawChart();
        };

        //on Resize
        if (window.addEventListener) {
            window.addEventListener('resize', drawChart, false);
        } else if (window.attachEvent) {
            window.attachEvent('onresize', drawChart);
        }

    });