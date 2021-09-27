import Ajv from 'ajv';
import express from 'express';

import { context } from '../utilities/logger';

const ajv = new Ajv();
const imageRestrictions = { type: 'number', maximum: 1000, minimum: 100 };

const validationScheme = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    width: imageRestrictions,
    height: imageRestrictions,
  },
  required: ['name', 'width', 'height'],
};

export const validate = ajv.compile(validationScheme);

export const validationInputs = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
): Promise<express.Response | void> => {
  const inputs = {
    name: req.query.name as unknown as string,
    width: Number(req.query.width),
    height: Number(req.query.height),
  };
  const valid = validate(inputs);

  if (!valid) {
    context.logger.error(validate.errors);
    return res.status(400).send(`${ajv.errorsText(validate.errors)}`);
  }
  res.locals.input = inputs;
  next();
};
