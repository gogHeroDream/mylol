const obj ={
    createMsg: function (code, msg, content) {
        var obj = new Object;
        obj.code = (code || code === 0) ? code : '1'
        if (msg !== undefined && msg !== '') obj.msg = msg
        if (content !== undefined && content !=='') obj.content = content
        return obj;
    }
}
module.exports = obj
