import express from 'express';
import { imageCache } from './middleware/image-cache';
import { validationInputs } from './middleware/validator';
import { FULL_PATH, INPUT_DIR, OUTPUT_DIR } from './types';
import { imageCreation } from './utilities/image-creation';
import { context } from './utilities/logger';

const app = express();
const PORT = 3000;

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Welcome');
});

app.get(
  '/image',
  [validationInputs, imageCache],
  async (req: express.Request, res: express.Response) => {
    const { width, height, name } = res.locals.values;
    if (
      await imageCreation(
        {
          ...res.locals.values,
          inputDir: INPUT_DIR,
          outputDir: OUTPUT_DIR,
        },
        context,
      )
    ) {
      return res.sendFile(FULL_PATH + `/${name}-${width}x${height}.jpg`);
    }
    return res
      .status(400)
      .send(
        'fail to process image, please check the name of the file and that is on the images folder',
      );
  },
);

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});

export default app;
