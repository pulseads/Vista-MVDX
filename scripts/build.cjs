// On Windows, let Rolldown's native async handles finish closing before the
// Vinext CLI exits. Nonzero exits keep their original failure behavior.
const originalExit = process.exit.bind(process);
if (process.platform === 'win32') {
  process.exit = (code) => {
    if (code === 0) {
      setTimeout(() => originalExit(0), 1000);
      return;
    }
    return originalExit(code);
  };
}
const path = require('path');
const { pathToFileURL } = require('url');
const cli = path.resolve(__dirname, '../node_modules/vinext/dist/cli.js');
process.argv = [process.execPath, cli, 'build'];
import(pathToFileURL(cli).href);
