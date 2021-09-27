import express from 'express';
import { INPUT_DIR, OUTPUT_DIR, imageInput, FULL_PATH } from '../types';
import { imageExists } from '../utilities/image-validation';
import { context } from '../utilities/logger';

export const imageCache = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<void> => {
  const { name, width, height } = res.locals.input;

  const values: imageInput = {
    name: name,
    width: width,
    height: height,
    inputDir: INPUT_DIR,
    outputDir: OUTPUT_DIR,
  };

  if (await imageExists(values)) {
    context.logger.info('File was found in cache');
    return res.sendFile(FULL_PATH + `/${values.name}-${values.width}x${values.height}.jpg`);
  } else {
    context.logger.warn('File not found, continue with creation');
    res.locals.values = values;
    next();
  }
};
