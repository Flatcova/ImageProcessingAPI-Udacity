import { imageExists } from '../utilities/image-validation';
import { INPUT_DIR, OUTPUT_DIR } from '../types';

describe('Tests for image validations', () => {
  const goodData = {
    name: 'fjord',
    width: 100,
    height: 100,
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

  describe('function imageExists checks if image on file.', () => {
    it('Should say that the image exists', async () => {
      expect(await imageExists(goodData)).toBeTruthy();
    });

    it('Should return be an error', async () => {
      expect(await imageExists(badData)).toBeFalse();
    });
  });
});
