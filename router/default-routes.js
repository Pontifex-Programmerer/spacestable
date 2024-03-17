const router = require('express').Router();
const {getMirrorImage} = require('../handlers/filehandler');

router.get('/', (req,res)=>{
    const hacker = getMirrorImage();
    const testobj = {...hacker}
    console.log(testobj.hackerimageurl);
    res.render('index.ejs',{...hacker});
});

module.exports = router;