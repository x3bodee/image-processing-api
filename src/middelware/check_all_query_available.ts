import { Request, Response, NextFunction } from 'express';
import isPositive from '../helper/isPositive';
const check_Query = ( req:Request<{}, {}, {}, { name: string; width: string; height: string }>, res:Response, next:NextFunction) => {
    console.log(req.query);
    if (!req.query.name || !req.query.width || !req.query.height) {
        const msg = "name or width or height is missing in the URL";
        req.errMsg = msg;
        req.error = true;
        // res.status(400).json({status:false, msg});
        next();
    }
    if( !isPositive( parseInt( req.query.width ) ) || !isPositive( parseInt( req.query.height ) ) ) {
        const msg = "width & height must contines positive values";
        req.errMsg = msg;
        req.error = true; 
        // res.status(400).json({status:false, msg});
        next();
    }
    req.error = false;
    next();
}


export default check_Query;
