var Article = require("../models/Article.js");
const express = require('express')
const router = express.Router()
const utils = require('../utils')
const CreateMsg = utils.createMsg;
const upload = require("../utils/upload")
const path = require('path')
// 盟友圈
router.get('/', function (req, res, next) {
    // 这里取cookie比较好
    const page = req.query.page
    if(page!= 0) {
        // res.download(path.join(__dirname, '../uploads/hehe.txt'), 'hehe.txt', function (err) {
        //     if (err) {
        //         console.log(err)
        //         // Handle error, but keep in mind the response may be partially-sent
        //         // so check res.headersSent
        //     } else {
        //         // decrement a download credit, etc.
        //     }
        // })
        res.render("friend/referrer", {
            "active": 1,
        })
    }
})
// router.route('/item')
//     .get(function (req, res, next) {
//         Article.findOne({ _id: req.query.id })
//             .then(response => {
//                 // console.log(res)
//                 res.send(CreateMsg('1', '', response))
//                 // res.render("article",{
//                 //     "Article": response,
//                 //     "active": 0,
//                 //     "pageTitle": "资讯详情"
//                 // })
//             })
//             .catch(err => {
//                 console.log(err)
//                 res.send(CreateMsg('0', '没有找到相关文章'))
//             })

//     }
//     )

module.exports = router