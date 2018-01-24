var seeder = require('mongoose-seed');

var activitySeeder = seeder.connect('mongodb://localhost/activitiesdb', () => {
    seeder.loadModels([
        './models/Activity.js'
    ]);

    seeder.clearModels(['Activity'], () => {
        seeder.populateModels(activitySeed, () => {
            console.log("db.Activity seeded")
        });
    });
});

var activitySeed = [{
    'model': 'Activity',
    'documents': [{
            address: "Petco Park",
            time: "March 24, 2018",
            duration: "1 hour",
            activityType: "Padres Game",
            fam: true,
            maxPeople: 6,
            description: "Bring the heat! Go Padres!!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Party",
            fam: true,
            maxPeople: 10,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        },
        {
            address: "Central Park",
            time: "April 20, 2015",
            duration: "6 hours",
            activityType: "Baseball",
            fam: true,
            maxPeople: 17,
            description: "The American Past Time!!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        },
        {
            address: "Larry's Crib",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Drinking and Thats it!",
            fam: true,
            maxPeople: 9,
            description: "Bring Individuals of the fun variety!!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        },
        {
            address: "Downtown, SD - Whaley House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Movie Night!",
            fam: true,
            maxPeople: 5,
            description: "Whoo Baby! This is gonna be scary as *heck*!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        },
        {
            address: "4432 UTC Mall - Ice Rink",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Ice Skating",
            fam: true,
            maxPeople: 2,
            description: "Dont forget your ice skates ; )!",
            reoccuring: true,
            lat: 37.784172,
            long: -122.401558
        }
    ]
}];

module.exports = activitySeeder;