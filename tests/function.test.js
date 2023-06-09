import { strict as assert } from 'node:assert';
import capitalize from '../src/function.js';

assert.equal(capitalize(''), '');
assert.equal(capitalize('text'), 'Text');

console.log('Все тесты пройдены!');
