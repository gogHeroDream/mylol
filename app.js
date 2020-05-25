var express =require('express');
var app = express();
var db= require('./models/db.js')


app.set('view engine', 'ejs')

app.use(express.urlencoded())
app.use(express.json()) 


// 静态地址
app.use('/public', express.static('./public'))
app.use('/uploads', express.static('./uploads'))



// Use Helmet
var helmet = require('helmet')
app.use(helmet())

// require('bootstrap')

const router = require('./router')
router(app)
app.listen(3000)