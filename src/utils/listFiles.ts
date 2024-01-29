// File: scripts/listFiles.ts (o .js se non usi TypeScript)
import fs from 'fs';
import path from 'path';

export const listFilesInDirectory = (directory: string): string[] => {
  const directoryPath = path.join(process.cwd(), directory);
  try {
    const files = fs.readdirSync(directoryPath);
    return files;
  } catch (err) {
    console.error("An error occurred:", err);
    return [];
  }
};
