export const COLORS = {
  primary: "#0A192F",
  secondary: "#CCD6F6",
  action: "#8892B0",
  white:"#64FFDA"
};

export const SIZES = {
  extraSmall: 8,
  small: 10,
  moderateSmall: 12,
  font: 14,
  regular: 16,
  medium: 18,
  large: 22,
  MediumLarge: 30,
  moderateLarge: 42,
  extraLarge: 48,
  xxl: 70,
};

export const FONTS = {
  extraBold: 800,
  bold: 700,
  medium: 500,
  semiBold: 600,
  regular: 400,
  light: 300,
  extraLight: 200,
};

export const RADIUS = {
  sm: 2,
  md: 8,
  lg: 10,
};
export const FAMILY = {
  hind: "'Hind', sans-serif",
  inter: "'Inter', sans-serif",
};

export const SHADOW = {
  primary: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  border: "1px solid rgba(158, 158, 158, 0.866)",
};

export const HEADING = {
  fontSize:{
    lg: SIZES.MediumLarge,
    md: SIZES.large,
    sm: 20,
    xs: 18,
  },
  color: COLORS.blue,
  fontWeight: 700,
  fontFamily: FAMILY.hind,
  lineHeight: 1.5
};

export const LIGHT = {
  color: COLORS.blue,
  fontFamily: FAMILY.hind,
  fontWeight: 500,
  fontSize: {
    lg: SIZES.regular,
    md: SIZES.font,
    sm: SIZES.moderateSmall,
    xs: SIZES.small,
  },
};

export const formatTime = time => {
  if(time < 60) {
    return time < 10 ? `0${time}s` : `${time}s`;
  }else {
    return Math.floor(time / 60) + 'm' + (time % 60) + 's';
  }
}