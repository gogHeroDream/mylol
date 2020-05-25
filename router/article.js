var Article = require("../models/Article.js");
const express = require('express')
const router = express.Router()
const utils = require('../utils')
const CreateMsg = utils.createMsg;
const upload = require("../utils/upload")

router.get('/', function (req, res, next){
    res.render("article", {
        "active": 0,
        "pageTitle": "资讯详情"
    })
})
router.route('/item')
    .get(function (req, res, next) {
        Article.findOne({_id:req.query.id})
        .then(response=>{
            // console.log(res)
            res.send(CreateMsg('1', '', response))
            // res.render("article",{
            //     "Article": response,
            //     "active": 0,
            //     "pageTitle": "资讯详情"
            // })
        })
        .catch(err=>{
            console.log(err)
            res.send(CreateMsg('0', '没有找到相关文章'))
        })

    }
    )

module.exports = router