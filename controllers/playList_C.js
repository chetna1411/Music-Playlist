const PlayList = require('../models/playList');
const User = require('../models/user_Schema');

// Hanlder for create playList
exports.createPlayList = async(req, res)=>{
    const playBody = {
        listName : req.body.listName,
        songName : req.body.songName,
        user : req._id
    };

    try {
        const list = await PlayList.create(playBody);

        const user = await User.findById(req._id);
        user.playList.push(list._id);

        res.status(201).send(list);


    } catch (error) {
        console.log(error);
        res.status(500).send({
            message : "Internal error  !"
        });
    }
}
//handler playlist delete
exports.deletePlayList = async(req, res)=>{
    let listId = req.params.id;
    try {
        const list = await PlayList.findById(listId);
        if(!list){
            res.status(404).send({
                message : "list not present"
            });
            return;
        }
        await User.updateOne({_id: req._id}, {'$pull': {playList: {'$in': [listId]} }});

        res.status(201).send({
            message : "playList deleted"
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message : "Internal error  !"
        });
    }
}