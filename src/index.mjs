import * as data from './data.mjs';
import { BrandedShield } from './shield.mjs';

/**
 * Creates a markdown string for contents of data.
 */
function creatShieldFromData () {
  Object.keys(data).map(k => data[k]).forEach(row => console.log(row.reduce((p, c, i) => {
    c = (new BrandedShield(c.label, c.options, c.meta)).markdownImageString; 
    return i === 0 ? c : `${p} ${c}`;
  }, ''), '\n'));
}

creatShieldFromData();