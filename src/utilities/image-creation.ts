import sharp from 'sharp';
import { imageInput } from '../types';
import { Context } from './logger';

export const imageCreation = async (input: imageInput, context: Context): Promise<boolean> => {
  const { name, width, height, inputDir, outputDir } = input;
  context.logger.info('imageCreation starting', { input });
  try {
    await sharp(`${inputDir}/${name}.jpg`)
      .resize(width, height, { fit: 'contain' })
      .toFile(outputDir + `/${name}-${width}x${height}.jpg`);
    context.logger.info('image created successfully');
    return true;
  } catch (error) {
    context.logger.error('Error while creating new image', { error });
    return false;
  }
};
