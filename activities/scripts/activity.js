var seeder = require('mongoose-seed');

var activitySeeder = seeder.connect('mongodb://localhost/activities', () => {
    seeder.loadModels([
        './models/Activity.js'
    ]);

    seeder.clearModels(['Activity'], () => {
        seeder.populateModels(activitySeed, () => {
            seeder.disconnect();
        });
    });
});

var activitySeed = [{
    'model': 'Activity',
    'documents': [{
        location: "Petco Park",
        time: "March 24, 2018",
        duration: "1 hour",
        activityType: "Plane Crashing",
        fam: true,
        maxPeople: 6,
        description: "Bring the heat!",
        reoccuring: true
    }]
}];

module.exports = activitySeeder;