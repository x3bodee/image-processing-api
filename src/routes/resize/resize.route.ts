import express, { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import check_if_img_processed from '../../middelware/check_if_img_processed';
import check_if_img_exist from '../../middelware/check_if_img_exist';
import check_Query from '../../middelware/check_all_query_available';

const router = express.Router();

async function resizeImage(
  name: string,
  width: string,
  height: string
): Promise<string> {
  const width_i: number = parseInt(width);
  const height_i: number = parseInt(height);
  const file_path: string =
    __dirname + `/../../../processed-imgs/${name}-${width}-${height}.jpg`;
  try {
    await sharp(__dirname + '/../../../assets/' + name + '.jpg')
      .resize({
        width: width_i,
        height: height_i,
      })
      .toFile(file_path);
    return file_path;
  } catch (error) {
    console.log(error);
    throw 'ERROR';
  }
}

router.get(
  '/?',
  check_Query,
  check_if_img_processed,
  check_if_img_exist,
  async (
    req: Request<{}, {}, {}, { name: string; width: string; height: string }>,
    res: Response
  ) => {
    console.log('file exist in assets = ', req.file_exist);
    console.log(`${req.query.name}-${req.query.width}-${req.query.height}`);
    const name: string = req.query.name;
    const width: string = req.query.width;
    const height: string = req.query.height;
    console.log('start');
    try {
      const file_path = await resizeImage(name, width, height);
      console.log('done');
      res.status(200).sendFile(path.resolve(file_path));
    } catch (error) {
      res.send({ status: 'ERROR' });
    }
  }
);

export default router;
