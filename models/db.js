const mongoose = require('mongoose');

// mongoose.set('useFindAndModify', false);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/fitness",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err) => {
        if (!err) { console.log('MongoDB Connection Succeeded.') }
        else { console.log('Error in  DB Connection: ' + err) }
    });

require("./exercise.model");