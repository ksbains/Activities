var seeder = require('mongoose-seed');


var userSeeder = seeder.connect('mongodb://localhost/activitiesdb', () => {
    seeder.loadModels([
        './models/User.js'
    ]);

    seeder.clearModels(['User'], () => {
        seeder.populateModels(userSeed, () => {
            console.log("user populated")
        });
    });
});

const userSeed = [{
    'model': 'User',
    'documents': [{
            first: "Mohammed",
            last: "Avdol",
            username: "MagiciansRed",
            email: "mavdol@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.01",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        },
        {
            first: "Polnareff",
            last: "Jean",
            username: "SilverChariot",
            email: "pjean@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.2",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        },
        {
            first: "Kakyoin",
            last: "Noriaki",
            username: "HeirophantGreen",
            email: "knoriaki@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.03",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        },
        {
            first: "Joseph",
            last: "Joestar",
            username: "PurpleHermit",
            email: "jjoestar@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.04",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        }, {
            first: "Jotaro",
            last: "Joestar",
            username: "MagiciansRed",
            email: "jutes@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.05",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        }, {
            first: "Iggy",
            last: "Dog",
            username: "TheFool",
            email: "iggy@gmail.com",
            password: "password",
            phoneNumber: "1234567",
            flakeScore: "0.06",
            bio: "test",
            activitiesCreated: [],
            activitiesJoined: [],
            lastLogin: "",
            status: "test"
        }]
}];

module.exports = userSeeder