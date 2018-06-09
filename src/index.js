// @flow

import type { CreateOptions } from 'redis';

const Keyv = require('keyv');

let keyv;

module.exports = (options: CreateOptions): Keyv => {
  if (keyv) {
    return keyv;
  }
  return new Keyv(options);
};
