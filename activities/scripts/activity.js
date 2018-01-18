var seeder = require('mongoose-seed');

var activitySeeder = seeder.connect('mongodb://localhost/activitiesdb', () => {
    seeder.loadModels([
        './models/Activity.js'
    ]);

    seeder.clearModels(['Activity'], () => {
        seeder.populateModels(activitySeed, () => {
            console.log("activity populated")
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
            reoccuring: true
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Party",
            fam: true,
            maxPeople: 2,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Baseball",
            fam: true,
            maxPeople: 2,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Slosh ball",
            fam: true,
            maxPeople: 2,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true,
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "spike ball",
            fam: true,
            maxPeople: 2,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true
        },
        {
            address: "Yo Mama's House",
            time: "April 20, 2018",
            duration: "1 hour",
            activityType: "Super bowl",
            fam: true,
            maxPeople: 2,
            description: "Yo mama so fat she brought a spoon to the super bowl!!",
            reoccuring: true
        }
    ]
}];

module.exports = activitySeeder;