import fs from 'fs';

const check_if_exist = (path:string): boolean => {
    if(fs.existsSync(path)) return true;
    else return false;
}

export default check_if_exist;