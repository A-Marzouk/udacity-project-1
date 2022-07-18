import { query, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validateProcessImages = [
  query('filename')
    .exists()
    .isString()
    .isIn([
      'encenadaport',
      'fjord',
      'icelandwaterfall',
      'palmtunnel',
      'santamonica'
    ])
    .withMessage(
      'Please provide a valid image name and make sure it exists in the available images.'
    ),
  query('width')
    .exists()
    .isNumeric()
    .withMessage('Please provide a valid width for the image'),
  query('height')
    .exists()
    .isNumeric()
    .withMessage('Please provide a valid height for the image'),
  (req: Request, res: Response, next: NextFunction): void | Response => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(422)
        .json({ errors: errors.array().map((err) => err.msg) });
    next();
  }
];
