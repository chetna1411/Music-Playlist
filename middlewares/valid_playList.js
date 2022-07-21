const PlayList = require('../models/playList');
const User = require('../models/user_Schema');

const validPlayList = async(req, res, next)=>{

    if(!req.body.listName){
        res.status(401).send({
            message : "invalid field Play list name !"
        });
        return;
    }
    next();
}

module.exports = {
    valid : validPlayList
}