import data from './data.mjs';
import Shield from './shield.mjs';

/**
 * Create a markdown shield string from a shield config
 */
function createMarkdownShield (config = {}) {
  return (new Shield(config.label, config.options, config.meta)).markdownImageString;
}

/**
 * Creates a markdown string for contents of data.
 */
function creatShieldsFromData () {
  Object.keys(data).forEach(section => {
    if (!section.startsWith('_')) {
      console.log(section);
    }
    
    const row = data[section];

    console.log(row.reduce((p, c, i) => {
      c = createMarkdownShield(c); 
      return i === 0 ? c : `${p} ${c}`;
    }, ''), '\n')
  });
}



creatShieldsFromData();