import path from 'path';

export interface validInput {
  name: string;
  width: number;
  height: number;
}

export interface imageInput extends validInput {
  inputDir: string;
  outputDir: string;
}

export const INPUT_DIR = './images';
export const OUTPUT_DIR = './new-images';

export const FULL_PATH = path.join(__dirname, `.${OUTPUT_DIR}`);
