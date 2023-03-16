import { expect } from 'chai';
import { promises as fs } from 'fs';
import path from 'path';

describe('Read and process file', () => {
  const filePath = path.join(__dirname, 'testFile.txt');
  const fileContent = 'Hello, world!';

  before(async () => {
    await fs.writeFile(filePath, fileContent);
  });

  it('should read the file and capitalize the content', async () => {
    const content = await fs.readFile(filePath, 'utf-8');
    const capitalizedContent = content.toUpperCase();
    expect(capitalizedContent).to.equal('HELLO, WORLD!');
  });

  after(async () => {
    await fs.unlink(filePath);
  });
});