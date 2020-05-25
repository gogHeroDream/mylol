var Banner = require("../models/Banner.js");
var Article = require("../models/Article.js");
module.exports = function (app) {
    app.get('/', (req, res) => {
        // console.dir(Posts)
        Article.find({})
            .sort({ 'showTop':-1 })
            .then(articleRes=>{
            Banner.find({}, function (err, result) {
                if (err) {
                    res.send('500')
                } else {
                    //    console.log(result)
                    res.render("index", {
                        "Banners": result,
                        "Articles": articleRes,
                        "active": 0
                    });
                }
            })
        })
    })
    app.use('/article', require('./article'))
    app.use('/friend', require('./friend'))
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}