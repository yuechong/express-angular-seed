var express = require('express');
var router = express.Router();
var request = require('request');

var userDao = require('../dao/userDao');
var response = require('../dao/response');
router.get('/', (req, res) => {

    res.json({
        success:true
    });

});

// img
router.get('/img', (req, res) => {
    console.log(req.query);
    var imgUrl = req.query.url;
    var options = {
        url: imgUrl,
        headers: {
           'Referer': "http://manhua.dmzj.com/tags/riben.shtml"
        }
    };
    request(options).on('error', function(err) {
                console.log(err)
    }).pipe(res);
    

});

// sign up
router.get('/search', (req, res) => {

    console.log(req.query);
    // res.json({success:true});

    if (!req.query) {
        response.error(res, 'error', 'user is null');
    } else {

        userDao.search(req.query, res);
    }

});
router.post('/search', (req, res) => {

    console.log(req.body);
    // res.json({success:true});

    if (!req.body) {
        response.error(res, 'error', 'user is null');
    } else {

        userDao.search(req.body, res);
    }

});

// pages
router.get('/page', (req, res) => {

    console.log(req.query);
    // res.json({success:true});

    if (!req.query) {
        response.error(res, 'error', 'param is null');
    } else {

        userDao.page(req.query, res);
    }

});
router.post('/page', (req, res) => {

    console.log(req.body);
    // res.json({success:true});

    if (!req.body) {
        response.error(res, 'error', 'param is null');
    } else {

        userDao.page(req.body, res);
    }

});


module.exports = router;