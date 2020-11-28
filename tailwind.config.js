const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  presets: [
    require('full-palette')
  ],
  experimental: {
    // uniformColorPalette: true,
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        '28': '1.75rem'
      }
    },
  },
  variants: {},
  plugins: [],
};