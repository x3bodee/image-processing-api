import { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';

const check = (req: Request, res: Response, next: NextFunction) => {
  const assets_img_path = path.join(
    __dirname,
    '../../assets/' + req.query.name + '.jpg'
  );
  if (fs.existsSync(assets_img_path)) {
    // console.log('file exist', 'assets');
    req.file_exist = true;
    next();
  } else {
    // console.log("file don't exist", 'assets');
    req.errMsg?.push("file don't exist");
    req.error = true;
    //   res
    //     .status(400)
    //     .json({ sucess: false, msg: req.query.name + " img don't exist" });
    next();
  }
};

export default check;
