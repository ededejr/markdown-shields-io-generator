import { ShieldsIOEndpoint, ShieldOptions } from './config.mjs';
import SimpleIcons from 'simple-icons';

export default class Shield {
  constructor(label = '', options = {}, meta = null) {
    this.label = label;
    this.options = { ...ShieldOptions, ...options };
    this.meta = meta;
  }

  /**
   * Get the query string which represents the options for this shield.
   * 
   */
  get queryString () {
    const { options } = this;

    const isValueInOptions = (val) => Boolean(options[val]);
    const makeParamString = (val) => `${val}=${encodeURIComponent(options[val])}`;
    const viableKeys = Object.keys(options).filter(isValueInOptions);
  
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
    return `![${this.label}](${this.url})`;
  }
}

/**
 * Functions the same as Shield but will automatically try to find the right
 * color/logo given the input label.
 */
export class BrandedShield extends Shield {
  constructor(label, options = {}, meta = null) {
    super(label, null, meta);
    this.options = options;
    this.loadDataFromLabel();
  }

  loadDataFromLabel() {
    const {label, options} = this;
    const {logo, logoColor} = options || {};
    const {title, hex} = SimpleIcons.get(logo || label) || {};
    this.options = {
      ...ShieldOptions,
      ...this.options,
      labelColor: hex,
      logo: title,
      logoColor: logoColor || 'white',
    }
  }
}