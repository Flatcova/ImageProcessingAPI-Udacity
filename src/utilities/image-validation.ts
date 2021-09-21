import { promises as fs, constants } from 'fs';
import { imageInput } from '../types';
import { context } from '../utilities/logger';

export const imageExists = async (input: imageInput): Promise<boolean> => {
  try {
    await fs.access(
      `${input.outputDir}/${input.name}-${input.width}x${input.height}.jpg`,
      constants.F_OK,
    );
    context.logger.info('Successfull finding existing file in cache');
    return true;
  } catch (error) {
    context.logger.error('File not found in cache', { error });
    return false;
  }
};
