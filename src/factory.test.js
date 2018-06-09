const factory = require('../src/factory');
const Keyv = require('keyv');

describe('The cache factory', () => {
  test('It has the correct type', () => {
    const keyv = factory({});
    expect(keyv).toBeInstanceOf(Keyv);
  });
  test('It leverages the require cache', () => {
    factory({});
    const keyv = factory({});
    expect(keyv).toBeInstanceOf(Keyv);
  });
});
