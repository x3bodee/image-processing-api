import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';


const check = ( req:Request, res:Response, next:NextFunction) => {
    const name = `${req.query.name}-${req.query.width}-${req.query.height}`;
    
    const processed_img_path = path.join(__dirname,'..','..','processed-imgs/'+name+'.jpg');
    if(fs.existsSync(processed_img_path)) {
        console.log("file exist", "processed");
        req.file_exist=true;
        res.status(200).sendFile(path.resolve(processed_img_path));
    }
    else {
        console.log("file don't exist", "processed");
        req.file_exist=false;
        next();
    }
}


export default check;
