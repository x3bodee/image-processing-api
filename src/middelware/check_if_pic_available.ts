import { Request, Response, NextFunction } from 'express';
const check = ( req:Request, res:Response, next:NextFunction) => {
    console.log(req.query);
    const name = `${req.query.name}-${req.query.width}-${req.query.height}`;
    console.log(name);
    
    next();
}


export default check;
