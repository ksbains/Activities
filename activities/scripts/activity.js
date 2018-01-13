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

var activitySeed = [
		{
			    'model': 'Activity',
			    'documents': [
			    		{
						        location: "Egypt",
						        time: "March 24, 2002",
						        duration: "40days",
						        activityType: "Plane Crashing",
						        fam: true,
						        maxPeople: 6,
						        description: "We're going to egypt to kill a Vampire",
						        reoccuring: true 
			    		}
			    ]
}];

module.exports = activitySeeder;