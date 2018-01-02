var request = require('request');
var async = require('async');
var url_node = require('url');
var cheerio = require('cheerio');
var driver = require('../dao/db');

const Url = "mongodb://localhost:27017/manhua";

const table = 'manhua';

var lastId;


getOne();
// 超找
function getOne() {

    async.waterfall([
        // 连接数据库        
        function (callback) {
            driver.connect(callback, Url);
        },
        // 分页
        function (db, callback) {
            var _query = lastId ? { "_id": { $gt: require('mongodb').ObjectID(lastId) } } : {};
            driver.pageById(db, callback, table, _query, 1);
        },
        function (db, res, callback) {
            driver.close(db, res, callback);
        }
    ],
        // result
        function (err, result) {


            if (err) {
                console.log(err);
                return;
            }

            getOneCallback(result);



        }
    );
}

// callback
function getOneCallback(result) {

    if (result.success) {
        console.log("---------get success------------");
      

        if (result.data.length > 0) {

            var data = result.data[0];
            console.log(data);
            lastId = data['_id'];

            var fetch_url = data['href'];
            console.log('fetch_spider_url: ' + fetch_url);

            var isFinish = data['isFinish'];
            if (!isFinish) {
                getDetail(fetch_url, lastId,data);
            } else {
                console.log('not need update');
                getOne();
            }


        } else {
            console.log("fetch all");
        }

    } else {
        console.log('--------error------------');
    }
}


// http://manhua.dmzj.com/mankailetiandi/
// http://www.1kkk.com/manhua9092/
function getDetail(url, id,data) {


    request({ url: url, timeout: 3000 }, function (err, response,body) {
        if (err) {
            console.log(err);
            getDetail(url, id,data);
            return;
        }

        try {

            formatHtml(body, url, id,data);

        } catch (e) {

            console.log('--------format html error---------');
            console.log(e);
            return;
        }
    });
}

// 更新
function updateOne(data, id) {
    async.waterfall([
        // 连接数据库        
        function (callback) {
            driver.connect(callback, Url);
        },
        // 分页
        function (db, callback) {
            var _query = { "_id": id };
            var update = { $set: data };
            driver.update(db, callback, table, _query, update);
        },
        function (db, res, callback) {
            driver.close(db, res, callback);
        }
    ],
        // result
        function (err, result) {


            if (err) {
                console.log(err);
                return;
            }

            updateCallback(result);



        }
    );
}

// 更新callback
function updateCallback(result) {
    if (result.success) {
        console.log('------update success--------');
        getOne();
    } else {
        console.log('------update error--------');
    }
}


function formatHtml(response, url, id,_data_it) {

    var urlObj = url_node.parse(url);

    var protocol = urlObj.protocol;
    var hostname = urlObj.hostname;

    var httpUrl = protocol + "//" + hostname;



    var html = response.toString('utf-8');   

    var $ = cheerio.load(html);

    console.log(httpUrl);

    var data;
    switch (hostname) {
        case 'www.1kkk.com':
            data = kkkHtml($, httpUrl);
            break;
        case 'manhua.dmzj.com':
            data = dmzjHtml($, httpUrl);
            break;
        default:
            console.log('没有匹配');
            break;
    }
    
    if (!data) {
        console.log('data error');
        return;
    }
    console.log(data);

    if(_data_it['news_href'] == data['news_href']){

        data['latest'] = false;

        getOne();

    }else{
        data['latest'] = true;

        updateOne(data, id);
    }

    


}

// 动漫之家网站爬取
function dmzjHtml($, host) {

    var item = $('.anim_intro .week_mend .anim-main_list table tr');
    console.log(item);
    if (item.length == 0) {
        return false;
    }

    var data = {
        news: item.eq(8).find('td a').text().replace(/(^\s*)|(\s*$)/g, ""),
        news_href: host + item.eq(8).find('td a').attr('href'),
        isFinish: item.eq(4).find('td a').text().replace(/(^\s*)|(\s*$)/g, "") =='已完结' ? true : false,
        updateTime: item.eq(8).find('td .update2').text().replace(/(^\s*)|(\s*$)/g, ""),
    };

    return data;

}

// 1kkk网站爬取
function kkkHtml($, host) {
    var item = $('.main .sy_k22 li');

    if (item.length == 0) {
        return false;
    }

    var data = {
        news: item.eq(0).find('a').eq(0).text().replace(/(^\s*)|(\s*$)/g, ""),
        news_href: host + item.eq(0).find('a').eq(0).attr('href'),
        isFinish: item.eq(1).find('.z075').text().replace(/(^\s*)|(\s*$)/g, "") =='已完结' ? true : false,
        updateTime: item.eq(6).find('.z075').text().replace(/(^\s*)|(\s*$)/g, ""),
    };

    return data;
}