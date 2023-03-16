import { expect } from 'chai';
import { promises as fs } from 'fs';
import path from 'path';

describe('File creation', () => {
  const filePath = path.join(__dirname, 'testFile.txt');
  const fileContent = 'Hello, world!';

  it('should create a new file', async () => {
    await fs.writeFile(filePath, fileContent);
    const fileExists = await fs.stat(filePath).then(() => true).catch(() => false);
    expect(fileExists).to.be.true;
  });

  after(async () => {
    await fs.unlink(filePath);
  });
});