import scSet from '../';
import * as assert from 'assert';

it('Main', () => {
  assert.ok(scSet instanceof Set);
  assert.deepEqual(
    scSet,
    new Set([
      'zh-cn', // Simplified Chinese (PRC)
      'zh-sg', // Simplified Chinese (Singapore)
      'zh-hans', // Simplified Chinese
      'zh-hans-cn', // Simplified Chinese (PRC)
      'zh-hans-sg', // Simplified Chinese (Singapore)
      'zh-hans-hk', // Simplified Chinese (Hong Kong)
      'zh-hans-mo', // Simplified Chinese (Macao)
      'zh-hans-tw', // Simplified Chinese (Taiwan)
    ]),
  );
});
