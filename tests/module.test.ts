import { promisify } from 'util';
import { stat } from 'fs';
const statAsync = promisify(stat);
import * as assert from 'assert';

it('Verify type definition files', async () => {
  assert.equal((await statAsync('./dist/main.d.ts')).isFile(), true);
});
