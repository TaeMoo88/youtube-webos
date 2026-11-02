import { extractLaunchParams, handleLaunch } from './utils';
import './screenOrientation.js';

function main() {
  handleLaunch(extractLaunchParams());
}

main();
