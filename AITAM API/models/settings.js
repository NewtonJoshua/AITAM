'use strict';

var db = require('../middlewares/mongo').getMongo();

var Schema = db.Schema;
var settingsSchema = new Schema({
    projectCategory: [String],
    taskCategory: [String],
    ratingSlab: Number,
    Holidays: [Date],
    createdAt: Date,
    updatedAt: Date
});

settingsSchema.methods = {
    setCreatedDate: function () {
        this.createdAt = new Date();
    },
    setUpdatedDate: function () {
        this.updatedAt = new Date();
    }
};

var Settings = db.model('Settings', settingsSchema);

module.exports = {
    getSettings: function () {
        console.log('DB', 'fetching settings');
        return Settings.find({});
    },
    initialize: function (initialSetting) {
        console.log('DB', 'Initializing settings');
        var settings = new Settings(initialSetting);
        settings.setCreatedDate();
        return settings.save(function (err, result) {
            if (err) return console.error(err);
            return result;
        });
    }
};