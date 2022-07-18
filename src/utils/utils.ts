import { promises as fs } from 'fs';

export const fileExists = async (path: string): Promise<boolean> => {
  return !!(await fs.stat(path).catch(() => false));
};
