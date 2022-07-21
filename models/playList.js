const mongoose = require('mongoose');

const PlayList = new mongoose.Schema({
    listName : {
        type : String,
        
    },
    songName : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('playlists',PlayList);