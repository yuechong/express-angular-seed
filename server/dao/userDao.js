var MongoClient = require('mongodb').MongoClient;

var async = require('async');

var driver = require('./db');

var response = require('./response');

const Url = "mongodb://localhost:27017/manhua";

const table = 'manhua';




function connect(callback) {
    driver.connect(callback, Url);
}

var userDao = {};
/**
 * 
 * @param {*name ,type} param 
 * @param {*} res 
 */
userDao.search = function (param, res) {
    var _query = {};

    if (param.name) {
        _query.title = { '$regex': param.name, '$options': 'i' };

    }
    // // isFinish
    // if (param.isFinish && param.isFinish!=='') {

    //     _query.isFinish = (param.isFinish == 'true') ? true : false;
    // }

    // // type
    // if (param.type && param.type!=='null') {
    //     _query.type = param.type == '""'?"":param.type;
    // }

    console.log(_query);



    async.waterfall([
        // 连接数据库        
        function (callback) {
            driver.connect(callback, Url);
        },
        // 超找
        function (db, callback) {

            driver.find(db, callback, table, _query);
        },
        function (db, res, callback) {
            driver.close(db, res, callback);
        }],
        // result
        function (err, result) {
            console.log("resulte");

            if (err) {
                res.json(err);
                return;
            }
            res.json(result);
        }
    );
};

/**
 * 
 * @param {*size lastid type} param 
 * @param {*} res 
 */
userDao.page = function (param, res) {
    var _query = {};

    try {
        param = JSON.parse(param);
    } catch (e) { }
    console.log('--x-x-x-');
    console.log(param);
    // 
    if (param.isFinish && param.isFinish !== 'all') {

        _query.isFinish = !!JSON.parse(String(param.isFinish).toLowerCase());

        console.log(_query.isFinish);
    }


    // type

    if (typeof (param.type) !== "undefined" && param.type !== 'all') {
        _query.type = param.type;
    }

    // letter
    if (param.char && param.char !== '') {
        _query.letter = param.char;
    }

    console.log('--------------');
    console.log(_query);

    var page_size = Number(param.size) || 10;

    var page_cur = Number(param.curPage) || 1;


    async.waterfall([
        // 连接数据库        
        function (callback) {
            driver.connect(callback, Url);
        },
        // 分页
        function (db, callback) {
            driver.page(db, callback, table, _query, page_cur, page_size);
        },
        function (db, res, callback) {
            driver.close(db, res, callback);
        }
    ],
        // result
        function (err, result) {
            console.log("resulte");

            if (err) {
                res.json(err);
                return;
            }
            res.json(result);
        }
    );

};

module.exports = userDao;