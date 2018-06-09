// @flow

import type { CreateOptions } from 'redis';

const Keyv = require('keyv');

let keyv;

module.exports = (options: CreateOptions): Keyv => {
  if (!keyv) {
    keyv = new Keyv(options);
  }
  return keyv;
};
