import scSet from '../';

test('Main', () => {
  expect(scSet).toBeInstanceOf(Set);
  expect(scSet).toEqual(
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
