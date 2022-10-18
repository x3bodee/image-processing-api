import { Request, Response, NextFunction } from 'express';
const check_Query = ( req:Request, res:Response, next:NextFunction) => {
    console.log(req.query);
    if (!req.query.name || !req.query.width || !req.query.height) res.status(400).json({status:"fail", msg:"name or width or height is missing the URL"});
    else next();
}


export default check_Query;
