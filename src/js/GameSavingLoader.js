import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          return resolve(await json(data));
        } catch (error) {
          return reject(error);
        }
      })();
    });
  }
}