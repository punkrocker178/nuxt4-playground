import { readFile } from 'fs/promises';
import { resolve } from 'path';

export default defineEventHandler(async () => {
  const file = await readFile(resolve('server/data/company.json'), 'utf-8');
  return JSON.parse(file);
});
