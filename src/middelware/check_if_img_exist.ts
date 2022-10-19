import { Request, Response, NextFunction } from 'express';
import path from 'path';
import check_if_exist from '../helper/check_if_exist';


const check = ( req:Request, res:Response, next:NextFunction) => {
    
    const assets_img_path = path.join(__dirname,'../../assets/'+req.query.name+'.jpg');
    if(check_if_exist(assets_img_path)) {
        console.log("file exist", "assets");
        req.file_exist=true;
        next();
    }
    else {
        console.log("file don't exist", "assets");
        res.status(400).json({sucess:false, msg:req.query.name+" img don't exist"});
    }
}


export default check;
