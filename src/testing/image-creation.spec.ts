import { INPUT_DIR, OUTPUT_DIR } from '../types';
import { imageCreation } from '../utilities/image-creation';
import { context } from '../utilities/logger';

describe('Tests for image creation', () => {
  const goodData = {
    name: 'fjord',
    width: 150,
    height: 150,
    inputDir: INPUT_DIR,
    outputDir: OUTPUT_DIR,
  };
  const badData = {
    name: 'cart',
    width: 12,
    height: 23,
    inputDir: INPUT_DIR,
    outputDir: OUTPUT_DIR,
  };

  describe('function imageCreation that use Sharp to create new image.', () => {
    it('Should create the new image with the params', async () => {
      expect(await imageCreation(goodData, context)).toBeTruthy();
    });

    it('Should return an error for file not created ', async () => {
      expect(await imageCreation(badData, context)).toBeFalse();
    });
  });
});
