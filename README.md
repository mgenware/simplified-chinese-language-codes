# simplified-chinese-language-codes

Returns an ES6 set of Simplified Chinese language codes

## Installation
```sh
yarn add simplified-chinese-language-codes
```

## Usage
```js
import scCodes from 'simplified-chinese-language-codes';

console.log(scCodes);
```

## Codes included
```ts
export default new Set<string>([
  'zh-cn', // Simplified Chinese (PRC)
  'zh-sg', // Simplified Chinese (Singapore)
  'zh-hans', // Simplified Chinese
  'zh-hans-cn', // Simplified Chinese (PRC)
  'zh-hans-sg', // Simplified Chinese (Singapore)
  'zh-hans-hk', // Simplified Chinese (Hong Kong)
  'zh-hans-mo', // Simplified Chinese (Macao)
  'zh-hans-tw', // Simplified Chinese (Taiwan)
]);
```
