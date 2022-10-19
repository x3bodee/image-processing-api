import { Request, Response, NextFunction } from 'express';
import path from 'path';
import check_if_exist from '../helper/check_if_exist';


const check = ( req:Request, res:Response, next:NextFunction) => {
    const name = `${req.query.name}-${req.query.width}-${req.query.height}`;
    console.log(req.query);
    console.log(name);
    
    const assets_img_path = path.join(__dirname,'../../assets/'+req.query.name+'.jpg');
    const processed_img_path = path.join(__dirname,'../../processed-imgs/'+name+'.jpg');
    if(check_if_exist(processed_img_path)) {
        console.log("file exist", "processed");
        req.file_exist=true;
        res.status(200).sendFile(processed_img_path);
    }
    else {
        console.log("file don't exist", "processed");
        req.file_exist=false;
        next();
    }
}


export default check;
