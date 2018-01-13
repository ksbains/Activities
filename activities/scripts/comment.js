var seeder = require('mongoose-seed');

var commentSeeder = seeder.connect('mongodb://localhost/activities', () => {
    seeder.loadModels([
        './models/Comment.js'
    ]);

    seeder.clearModels(['Comment'], () => {
        seeder.populateModels(commentSeed, () => {
            seeder.disconnect();
        });
    });
});

const commentSeed = [{
    'model': 'Comment',
    'documents': [{
        author: "Dio Brando",
        message: "How many loaves of bread have you eaten in your life?",
        timeStamp: "10:10"
    }]
}];

module.exports = commentSeeder;