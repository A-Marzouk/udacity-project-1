import { query, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validateProcessImages = [
  query('filename')
    .exists()
    .withMessage('Field (filename) is required')
    .isString()
    .withMessage('Field (filename) should be a string')
    .isIn([
      'encenadaport',
      'fjord',
      'icelandwaterfall',
      'palmtunnel',
      'santamonica'
    ])
    .withMessage('Image should exist in the available images.'),
  query('width')
    .exists()
    .withMessage('Image width is required')
    .isNumeric()
    .withMessage('Please provide a valid width for the image'),
  query('height')
    .exists()
    .withMessage('Image height is required')
    .isNumeric()
    .withMessage('Please provide a valid height for the image'),
  (req: Request, res: Response, next: NextFunction): void | Response => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.mapped() });
    next();
  }
];
