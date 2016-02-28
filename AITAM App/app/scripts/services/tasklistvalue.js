'use strict';

/**
 * @ngdoc service
 * @name aitamApp.taskListValue
 * @description
 * # taskListValue
 * Value in the aitamApp.
 */
angular.module('aitamApp')
    .value('taskListValue', {
        myNew: {
            task: 'MyNewTask',
            title: 'New myTasks',
            field: 'Due Date',
            data: 'DueDate'
        },
        myOpen: {
            task: 'MyOpenTask',
            title: 'Open myTasks',
            field: 'Status',
            data: 'Status'
        },
        MyArchive: {
            task: 'MyArchive',
            title: 'myTasks Archive',
            field: 'Rating',
            data: 'Rating'
        },
        ourReview: {
            task: 'ReviewTask',
            title: 'Review ourTasks',
            field: 'Due Date',
            data: 'DueDate'
        },
        ourOpen: {
            task: 'OurOpenTask',
            title: 'Open ourTasks',
            field: 'Status',
            data: 'Status'
        },
        ourArchive: {
            task: 'OurArchive',
            title: 'ourTasks Archive',
            field: 'Rating',
            data: 'Rating'
        }
    });