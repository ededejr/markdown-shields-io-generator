import { ShieldsIOEndpoint, ShieldOptions } from './config.mjs';
import SimpleIcons from 'simple-icons';

export default class Shield {
  constructor(label = '', options = {}, meta = null) {
    this.label = label;
    this.meta = meta;
    this.options = options;
    this.lookupShieldOptions();
  }

  lookupShieldOptions () {
    const {options, label} = this;
    const {logo, logoColor} = options || {};
    const {title, hex} = SimpleIcons.get(logo || label) || {};

    this.options = {
      ...ShieldOptions,
      color: 'rgba(0,0,0, 0.8)',
      logo: title,
      logoColor: logoColor || hex || 'white',
      ...this.options,
    };
  }

  /**
   * Get the query string which represents the options for this shield.
   * 
   */
  get queryString () {
    const { options } = this;

    const keyFilter = (val) => Boolean(options[val]) && !['siteUrl'].includes(val);
    const makeParamString = (val) => `${val}=${encodeURIComponent(options[val])}`;
    const viableKeys = Object.keys(options).filter(keyFilter);
  
    return viableKeys.reduce((previous, current, indx) => {
      const paramString = makeParamString(current);
      return indx == 0 ? `?${paramString}` : previous + '&' + `${paramString}`;
    }, '');
  }

  /**
   * Get the Shields.io url for this shield
   */
  get url () {
    const { label, meta } = this;
    const text = encodeURIComponent([label, meta].filter(e => Boolean(e)).join('-'));
    return `${ShieldsIOEndpoint}${text}-informational${this.queryString}`;
  }

  /**
   * Create a markdown image string for a shield.
   */
  get markdownImageString () {
    const shieldString = `![${this.label}](${this.url})`;
    return this.options.siteUrl ? `[${shieldString}](${this.options.siteUrl})` : shieldString;
  }
}