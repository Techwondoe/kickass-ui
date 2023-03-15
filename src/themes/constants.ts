import { Font, FontSize, Color, Theme } from './types';

export const baseFont: Font = {
  display: {
    [FontSize['2XL']]: {
      size: '72px',
      lineHeight: '90px',
      letterSpacing: '-0.02em',
    },
    [FontSize.XL]: {
      size: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
    },
    [FontSize.LG]: {
      size: '48px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    [FontSize.MD]: {
      size: '36px',
      lineHeight: '60px',
      letterSpacing: '-0.02em',
    },
    [FontSize.SM]: {
      size: '30px',
      lineHeight: '38px',
      letterSpacing: '',
    },
    [FontSize.XS]: {
      size: '24px',
      lineHeight: '32px',
      letterSpacing: '',
    },
  },
  text: {
    [FontSize['2XL']]: {
      size: '30px',
      lineHeight: '40px',
      letterSpacing: '',
    },
    [FontSize.XL]: {
      size: '20px',
      lineHeight: '30px',
      letterSpacing: '',
    },
    [FontSize.LG]: {
      size: '18px',
      lineHeight: '28px',
      letterSpacing: '',
    },
    [FontSize.MD]: {
      size: '16px',
      lineHeight: '24px',
      letterSpacing: '',
    },
    [FontSize.SM]: {
      size: '14px',
      lineHeight: '20px',
      letterSpacing: '',
    },
    [FontSize.XS]: {
      size: '12px',
      lineHeight: '18px',
      letterSpacing: '',
    },
  },
};

export const baseColors: Color = {
  black: '#000000',
  error: {
    '25': '#FFFBFA',
    '50': '#FEF3F2',
    '100': '#FEE4E2',
    '200': '#FECDCA',
    '300': '#FDA29B',
    '400': '#F97066',
    '500': '#F04438',
    '600': '#D92D20',
    '700': '#B42318',
    '800': '#912018',
    '900': '#7A271A',
    DEFAULT: '#F97066',
  },
  gray: {
    '25': '#FCFCFD',
    '50': '#F9FAFB',
    '100': '#F2F4F7',
    '200': '#EAECF0',
    '300': '#D0D5DD',
    '400': '#98A2B3',
    '500': '#667085',
    '600': '#475467',
    '700': '#344054',
    '800': '#1D2939',
    '900': '#101828',
    DEFAULT: '#98A2B3',
  },
  primary: {
    '25': '#F7FAFF',
    '50': '#F5F8FF',
    '100': '#EFF3FF',
    '200': '#DAE8FF',
    '300': '#9EC0FC',
    '400': '#74A7FE',
    '500': '#5794FD',
    '600': '#3D82F9',
    '700': '#2F67C9',
    '800': '#374C99',
    '900': '#243366',
    DEFAULT: '#74A7FE',
  },
  success: {
    '25': '#F6FEF9',
    '50': '#ECFDF3',
    '100': '#D1FADF',
    '200': '#A6F4C5',
    '300': '#6CE9A6',
    '400': '#32D583',
    '500': '#12876A',
    '600': '#039855',
    '700': '#027A48',
    '800': '#05603A',
    '900': '#054F31',
    DEFAULT: '#32D583',
  },
  warning: {
    '25': '#FFFCF5',
    '50': '#FFFAEB',
    '100': '#FEF0C7',
    '200': '#FEDF89',
    '300': '#FEC84B',
    '400': '#FDB022',
    '500': '#F79009',
    '600': '#DC6803',
    '700': '#B54708',
    '800': '#93370D',
    '900': '#7A2E0E',
    DEFAULT: '#FDB022',
  },
  white: '#FFFFFF',
};

// default theme
export const base: Theme = {
  font: baseFont,
  color: baseColors,
};
