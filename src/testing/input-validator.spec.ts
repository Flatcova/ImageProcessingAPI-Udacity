import Ajv from 'ajv';
import { validate } from '../middleware/validator';
const ajv = Ajv();

describe('Testing validation functions', () => {
  it('should check for correct input params', () => {
    const validInput = {
      name: 'fjord',
      width: 100,
      height: 100,
    };

    expect(validate(validInput)).toBeTruthy();
  });

  it('Should result in error for name', () => {
    const invalidInput = {
      name: 450,
      width: 150,
      height: 150,
    };

    expect(validate(invalidInput)).toBeFalse();
    expect(ajv.errorsText(validate.errors)).toEqual('data.name should be string');
  });

  it('Should result in error for width', () => {
    const invalidInput = {
      name: 'mios',
      width: Number('asdf'),
      height: 140,
    };

    expect(validate(invalidInput)).toBeFalse();
    expect(ajv.errorsText(validate.errors)).toEqual('data.width should be <= 1000');
  });

  it('Should result in error for height', () => {
    const invalidInput = {
      name: 'mios',
      width: 150,
      height: Number('asdf'),
    };

    expect(validate(invalidInput)).toBeFalse();
    expect(ajv.errorsText(validate.errors)).toEqual('data.height should be <= 1000');
  });
});
