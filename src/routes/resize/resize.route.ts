import express, { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import check_if_img_processed from '../../middelware/check_if_img_processed';
import check_if_img_exist from '../../middelware/check_if_img_exist';
import check_Query from '../../middelware/check_all_query_available';

const router = express.Router();

async function resizeImage(
  req: Request,
  res: Response,
  name: string,
  width: string,
  height: string
): Promise<string> {
  const width_i: number = parseInt(width);
  const height_i: number = parseInt(height);
  const file_path: string = path.join(
    __dirname + `/../../../processed-imgs/${name}-${width}-${height}.jpg`
  );
  try {
    if (req.error) return 'error';
    else {
      await sharp(path.join(__dirname + '/../../../assets/' + name + '.jpg'))
        .resize({
          width: width_i,
          height: height_i,
        })
        .toFile(file_path);
      return file_path;
    }
  } catch (error) {
    // console.log(error);
    req.errMsg?.push('' + error);
    return 'error';
  }
}

router.get(
  '/?',
  check_Query,
  check_if_img_processed,
  check_if_img_exist,
  async (
    // eslint-disable-next-line @typescript-eslint/ban-types
    req: Request<{}, {}, {}, { name: string; width: string; height: string }>,
    res: Response
  ) => {
    // console.log('file exist in assets = ', req.file_exist);
    // console.log(`${req.query.name}-${req.query.width}-${req.query.height}`);
    const name: string = req.query.name;
    const width: string = req.query.width;
    const height: string = req.query.height;
    // console.log('start');
    try {
      if (req.error) throw new Error('error');
      const file_path = await resizeImage(req, res, name, width, height);
      if (file_path === 'error') throw new Error('error');
      res.status(200).sendFile(path.resolve(file_path));
    } catch (error) {
      // console.log(req.errMsg);
      res.status(400).send({ status: false, error: req.errMsg });
    }
  }
);

export default router;
