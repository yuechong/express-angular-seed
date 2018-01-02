/**
 * 根据async的callback编写，async.waterfall([a,b,c],function(err,response){})
 */

var MongoClient = require('mongodb').MongoClient;

var driver = {};

/**
 * 连接数据库
 * @param {*} callback 
 * @param {*} url 
 */
driver.connect = function (callback, url) {

    MongoClient.connect(url, function (err, db) {
        var error;
        if (err) {
            error = { success: false, error: '数据库连接失败', msg: '数据库连接失败' };
        } else {
            callback(err, db);
        }
    });
};

/**
 * 关闭数据库
 * @param {*} db 
 * @param {*} res 
 * @param {*} callback 
 */
driver.close = function (db, res, callback) {

    db.close();

    callback(null,res);
};

/**
 * 更新
 * @param {*} db 
 * @param {*} callback 
 * @param {*} table 
 * @param {*} query 
 * @param {*} update {$set:update}
 */
driver.update = function (db, callback, table, query, update) {

    var _update = { $set: update };

    db.collection(table).update(query, update, function (err, result) {
        var res;
        var error;
        if (err) {
            error = { success: false, error: '查询异常', msg: '查询异常' };
        } else {

            res = { success: true, data: result };
        }


        callback(error, db, res);

    });
};

/**
 * 添加
 * @param {*} db 
 * @param {*} callback 
 * @param {*} table 
 * @param {*} query 
 */
driver.insert = function (db, callback, table, query) {
    db.collection(table).insertOne(query).toArray(function (err, result) {
        var res;
        var error;
        if (err) {
            error = { success: false, error: '查询异常', msg: '查询异常' };
        } else {

            res = { success: true, data: result };
        }

        callback(error, db, res);

    });
};

/**
 * 查找
 * @param {*} db 
 * @param {*} callback 
 * @param {*} table 
 * @param {*} query 
 */
driver.find = function (db, callback, table, query) {
    db.collection(table).find(query).toArray(function (err, result) {
        var res;
        var error;
        if (err) {
            error = { success: false, error: '查询异常', msg: '查询异常' };
        } else {

            res = { success: true, data: result };
        }
        callback(error, db, res);
    });
};

/**
 * 分页（根据_id）
 * @param {*} db 
 * @param {*} callback 
 * @param {*} table 
 * @param {*} query {"_id":{"$gt":lastId}}
 * @param {*} page_size 每页个数
 */
driver.pageById = function (db, callback, table, query, page_size) {

    // query {"_id":{$gt:_id}}
    db.collection(table).find(query).limit(page_size).toArray(function (err, result) {
        var res;
        var error;

        if (err) {
            error = { success: false, error: '查询异常', msg: '查询异常' };
        } else {

            /*db.collection(table).count(function (err, total) {
                res = {
                    success: true,
                    data: result,
                    page: {
                        totalCount: total,
                        pages: Math.ceil(total / page_size),
                        curPage: 1
                    }
                };

                db.close();

                callback(error, res);
            });*/

            res = {
                success: true,
                data: result
            };

            callback(error, db, res);

        }

    });
};

/**
 * 分页
 * @param {*} db 
 * @param {*} callback 
 * @param {*} table 
 * @param {*} query 
 * @param {*} page_cur 当前页数
 * @param {*} page_size 每页个数
 */
driver.page = function (db, callback, table, query, page_cur, page_size) {

    var count = (page_cur - 1) * page_size;
    var res ,error;
    db.collection(table).find(query).count(function (err, total) {

        // 超过数据库总个数
        if(count>total){
            error = { success: false, error: '查询异常', msg: '查询异常' };

            callback(error, db, res);

        }else{
            db.collection(table).find(query).skip(count).limit(page_size).toArray(function (err, result) {
        
                if (err) {
                    error = { success: false, error: '查询异常', msg: '查询异常' };
                    callback(error, db, res);
                } else {
        
                    db.collection(table).find(query).count(function (err, total) {
        
                        res = {
                            success: true,
                            data: result,
                            page: {
                                totalCount: total,
                                pages: Math.ceil(total / page_size),
                                curPage: page_cur
                            }
                        };
        
        
                        callback(error, db, res);
                    });
        
                }
        
            });
        }        
    });

    /*db.collection(table).find(query).skip(count).limit(page_size).toArray(function (err, result) {
        
        if (err) {
            error = { success: false, error: '查询异常', msg: '查询异常' };
        } else {

            db.collection(table).find(query).count(function (err, total) {

                res = {
                    success: true,
                    data: result,
                    page: {
                        totalCount: total,
                        pages: Math.ceil(total / page_size),
                        curPage: page_cur
                    }
                };


                callback(error, db, res);
            });

        }

    });*/
};

/**
 * 删除
 * @param {*} db mongodb
 * @param {*} callback 回调
 * @param {*} table 表名
 * @param {*} query 查询条件
 */
driver.delete = function(db,callback,table,query){
    db.collection(table).deleteOne(query,function (err, result) {
        var res;
        var error;
        if (err) {
            error = { success: false, error: 'delete异常', msg: 'delete异常' };
        } else {

            res = { success: true, data: result };
        }
        callback(error, db, res);
    });
};

module.exports = driver;


/*
demo
async.waterfall([
    // 连接数据库        
    function (callback){
        driver.connect(callback,Url);
    },
    // 超找
    function (db,callback) {       
        driver.find(db, callback,table, _query);
    },
    function(db,res,callback){
        driver.close(db,res,callback);
    }],
    // result
    function (err, result) {
        console.log("resulte");
        

        for(var i in result.data){
            var item = result.data[i];
            if(item.password){
                delete item.password;
            }
            
        }
        if (err) {
            res.json(err);
            return;
        }
        res.json(result);
    }
);*/