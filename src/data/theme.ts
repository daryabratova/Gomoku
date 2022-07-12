const sizes = {
  tablet: "768px",
  desktop: "1024px",
};

export const devices = {
  tablet: `screen and (orientation: portrait) and (min-width: ${sizes.tablet})`,
  desktop: `screen and (orientation: landscape) and (min-width: ${sizes.desktop})`,
};

export const fonts = {
  primary: `Nunito Sans, sans-serif`,
  accent: `Permanent Marker, serif`,
};

export const colors = {
  white: `#fff`,
  almond: `#ebdacb`,
  zambezi: `#5e5656`,
  dark: `#303040`,
  shadow: `rgba(0, 0, 0, 0.25)`,
};
