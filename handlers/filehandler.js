const fs = require('fs');
const path = require('path');

/**
 * This function looks for a .webp image in the home folder and returns
 * an object with the name of the hacker and the path of the image found there.
 */
function getMirrorImage(){
    let returnval=null;
    const LOCALPATH=path.resolve('home/');
    let files = fs.readdirSync(path.resolve(LOCALPATH),{withFileTypes:true})
    if(files){
        files = files.filter(file => file.isFile());
            if(files.length==1){
                const hackerid =  files[0].name.split('.')[0];
                const hackerimageurl = files[0].name;
                returnval={hackerid,hackerimageurl};

            }
    }
    return returnval
}
module.exports= {getMirrorImage};
