import sharp from 'sharp';
import path from 'path';

async function resizer(
  name: string,
  width: number,
  height: number
): Promise<string> {
  const file_path: string = path.join(
    __dirname + `/../../processed-imgs/${name}-${width}-${height}.jpg`
  );
  try {
    await sharp(path.join(__dirname + '/../../assets/' + name + '.jpg'))
      .resize({
        width: width,
        height: height,
      })
      .toFile(file_path);
    return file_path;
  } catch (error) {
    return 'error';
  }
}

export default resizer;
