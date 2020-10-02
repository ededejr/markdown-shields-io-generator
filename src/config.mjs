export const ShieldsIOEndpoint = 'https://img.shields.io/badge/';

export const ShieldStyles = {
  flat: 'flat',
  plastic: 'plastic',
  flatSquare: 'flat-square',
  forTheBadge: 'for-the-badge',
  social: 'social'
};

export const ShieldOptions = {
  style: ShieldStyles.forTheBadge,
  /**
   * Set background of the text
   * (hex, rgb, rgba, hsl, hsla and css named colors supported). 
   * The legacy name "colorA" is also   supported.
   */
  color: 'white',
  /**
   * Override the default left-hand-side text
   */
  label: null, // string
  /**
   * Option 1
   * 
   * Insert custom logo image (≥ 14px high). 
   * There is a limit on the total size of request headers we can accept (8192 bytes). 
   * From a practical perspective, this means the base64-encoded image text is limited 
   * to somewhere slightly under 8192 bytes depending on the rest of the request header.
   * 
   * Option 2
   * 
   * Insert one of the named logos from (bitcoin, 
   * dependabot, discord, gitlab, npm, paypal, serverfault, 
   * stackexchange, superuser, telegram, travis) or simple-icons. 
   * Simple-icons are referenced using names as they appear on the simple-icons site. 
   * If the name includes spaces, replace them with dashes (e.g: ?logo=visual-studio-code)
   */
  logo: null, // string
  /**
   * Set background of the logo
   * (hex, rgb, rgba, hsl, hsla and css named colors supported). 
   * The legacy name "colorA" is also   supported.
   */
  logoColor: null, // string
  /**
   * Set the horizontal space to give to the logo
   */
  logoWidth: null, // number
  /**
   * Specify what clicking on the left/right
   * of a badge should do (esp. for social badge style)
   */
  link: null, // url-string
  /**
   * Set background of the left part 
   * (hex, rgb, rgba, hsl, hsla and css named colors supported). 
   * The legacy name "colorA" is also   supported.
   */
  labelColor: null, // string
  /**
   * Set the HTTP cache lifetime (rules are applied to 
   * infer a default value on a per-badge basis, any 
   * values specified below the default will be ignored). 
   * The legacy name "maxAge" is also supported.
   */
  cacheSeconds: null // number
};