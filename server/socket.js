var userDao = require('./dao/userDao');

var friendDao = require('./dao/friendDao');

var ids = {};

function socket(io, app) {

    // socket chat
    io.on('connection', function (socket) {

        console.log('connect on ');

        console.log(socket.id);

        // 存储用户id,socket.id
        socket.on('init', function (user) {
            ids[user._id] = socket.id;
            ids[socket.id] = user._id;
            socket.uid = user._id;
            console.log('set init ...' + socket.id);
        });

        // 断开连接
        socket.on('disconnect', function () {

            console.log('');
            console.log('disconnect');
            console.log(socket.nickname);
            console.log('');
            io.emit('users-changed', { user: socket.nickname, event: 'left' });
        });

        // 获取全部聊天列表
        socket.on('getChaterlist', (user) => {
            console.log('');
            console.log('getChaterlist');
            console.log(socket.id);
            console.log('');
            userDao.getChaterlist(user, function (res) {
                console.log(res);
                console.log(socket.id);
                io.to(socket.id).emit('chatListBack', res);
            });
        });


        // 获取全部朋友列表
        socket.on('getChaterFriends', (user) => {


            userDao.getChaterFriends(user, function (res) {
                io.to(socket.id).emit('chatFriendsBack', res);
            });
        });

        // 搜索陌生人
        socket.on('getSearchFriend', (_friendName) => {
            console.log('getSearchFriend');
            userDao.searchFriends(_friendName, function (res) {
                io.to(socket.id).emit('searchFriendsBack', res);
            });
        });

        // 添加陌生人
        socket.on('addSearchFriend', (obj) => {
            console.log('addSearchFriend');


            // database？

            // userDao.addFriends(obj,function(res){
            //     io.to(socket.id).emit('addSearchFriendBack',res);
            // });
        });



        // 
        socket.on('confirmAddFriendRequest', (obj) => {

            userDao.addFriends(obj, function (res) {
                io.to(socket.id).emit('addSearchFriendBack', res);
            });
        });

        // 加入
        socket.on('set-nickname', (nickname) => {
            socket.nickname = nickname;

            console.log('');
            console.log('set-nickname');
            console.log(nickname);
            console.log('');
            io.emit('users-changed', { user: nickname, event: 'joined' });
        });

        // private
        socket.on('private-message', function (obj) {


            var msg = obj.msg;
            var _fromer = obj.from;
            var _toer = obj.to;

            console.log('private-message');

            console.log(ids[_toer._id]);
            // database?

            // 如果对方在线
            if (ids[_toer._id]) {
                io.to(ids[_toer._id]).emit('private-message', { from: _fromer.username, msg: msg, created: new Date() });
            } else {
                // 不在线
            }

        });


        // 发送
        socket.on('add-message', (message) => {
            console.log('');
            console.log('add-message');
            console.log(JSON.stringify(message));
            console.log('');
            io.emit('message', { text: message.text, from: socket.nickname, created: new Date() });
        });
    });


    // 添加申请
    app.post('/api/friend/addRequest', function (req, res) {
        var userId = req.body.userId;
        var friendId = req.body.friendId;
        var frinedName = req.body.frinedName;
        if (!frinedName) {
            res.json({
                success: false,
                error: '',
                msg: 'frinedName null'
            });
            return;
        }
        if (!userId) {
            res.json({
                success: false,
                error: '',
                msg: 'userId null'
            });
            return;
        }
        if (!friendId) {
            res.json({
                success: false,
                error: '',
                msg: 'friendId null'
            });
            return;
        }

        friendDao.addFriendRequest({ "frinedName": frinedName, "userId": userId, "friendId": friendId }, res);
    });

    // 添加申请 确认
    app.post('/friend/comfirm', function (req, res) {
        // {confirm,userId,friendId}

        var comfirm = req.body.confirm;
        var userId = req.body.userId;
        var friendId = req.body.friendId;

        if (!comfirm) {
            res.json({
                success: false,
                error: '',
                msg: 'comfirm null'
            });
            return;
        }
        if (!userId) {
            res.json({
                success: false,
                error: '',
                msg: 'userId null'
            });
            return;
        }
        if (!friendId) {
            res.json({
                success: false,
                error: '',
                msg: 'friendId null'
            });
            return;
        }

        // 该用户是否在线
        if (ids[friendId]) {

            friendDao.confirmFriendRequest({ "comfirm": comfirm, "userId": userId, "friendId": friendId,"new":false }, function (obj) {
                io.to(ids[friendId]).emit('comfirmFriendBack', obj);
            });
        } else {
            friendDao.confirmFriendRequest({ "comfirm": comfirm, "userId": userId, "friendId": friendId,"new":true }, res.json);
        }

    });

    // 搜索名字
    app.post('/api/friend/search', function (req, res) {
        var searchName = req.body.searchName;

        console.log(req.body.searchName);
  

        if (!searchName) {
            res.json({
                success: false,
                error: '',
                msg: 'searchName null'
            });
            return;
        }

        friendDao.searchFriends({ "searchName": searchName }, res);
    });

    // 获取全部好友
    app.get('/api/friend/get', (req, res) => {

        console.log('/friend/get');
        console.log(req.query.userId);
        var userId = req.query.userId;
        if (!userId || userId == '') {
            res.json({
                success: false,
                error: '',
                msg: 'userId null'
            });

            return;
        }


        friendDao.get({ "userId": userId }, res);
    });

    // 删除好友
    app.get('/friend/delete', function (req, res) {
        // param
        var userId = req.query.userId;
        var friendId = req.query.friendId;

        if (!userId || userId == '') {
            res.json({
                success: false,
                error: '',
                msg: 'userId null'
            });
            return;
        }

        if (!usefriendIdrId || friendId == '') {
            res.json({
                success: false,
                error: '',
                msg: 'friendId null'
            });
            return;
        }

        friendDao.delete({ "userId": userId, "friendId": friendId }, res);
    });
}




module.exports = socket;