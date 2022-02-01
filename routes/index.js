var express = require('express');
var router = express.Router();

const buttonInfos = [
    {"text": "単語", "route":"word" },
    {"text": "熟語", "route":"idioms"},
    {"text": "文章", "route":"paragraph"},
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {buttons: buttonInfos});
});

module.exports = router;
