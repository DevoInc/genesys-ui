import { readFileSync, writeFileSync } from 'fs';

import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';

let graph = new Viz({ Module, render });

const input = readFileSync('/dev/stdin').toString();

(async () => {
  try {
    const output = await graph.renderString(input);
    writeFileSync('/dev/stdout', Buffer.from(output));
  } catch (error) {
    graph = new Viz({ Module, render });
    console.error(error);
  }
})();
