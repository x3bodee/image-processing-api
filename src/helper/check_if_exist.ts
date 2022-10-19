import fs from 'fs';

const check_if_exist = (path:string): boolean => {
    if(fs.existsSync(path)) {
        // console.log("file exist", path);
        return true;
    }else {
        // console.log("file don't exist", path);
        return false
    }
    
}

export default check_if_exist;