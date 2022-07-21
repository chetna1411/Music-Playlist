const listController = require('../controllers/playList_C');
const verifyJWT = require('../middlewares/verifyToken');


module.exports = (ap)=>{

    ap.post('/amazon/v1/users/createPlay',[verifyJWT.token],listController.createPlayList);
    ap.delete('/amazon/v1/users/delteList/:id',[verifyJWT.token],listController.deletePlayList);
}