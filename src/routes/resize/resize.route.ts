import express, { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import check from '../../middelware/check_if_pic_available';
import check_Query from '../../middelware/check_all_query_available';

const router = express.Router();

async function resizeImage(
  name: String,
  width: String,
  height: String
): Promise<void> {
  try {
    await sharp(__dirname + '/../../../assets/fjord.jpg')
      .resize({
        width: 200,
        height: 200,
      })
      .toFile(
        __dirname + `/../../../processed-imgs/${name}-${width}-${height}.jpg`
      );
  } catch (error) {
    console.log(error);
    throw 'ERROR';
  }
}

router.get('/?', check_Query,check,async (req: Request, res: Response) => {
  console.log('start');
  try {
    await resizeImage('test', '150', '97');
    console.log('done');
    res.send({ status: 'Done' });
  } catch (error) {
    res.send({ status: 'ERROR' });
  }
});

export default router;
