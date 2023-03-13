export interface Theme {
  primary?: {
    '25': string;
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    DEFAULT: string;
  };
  error?: {
    '25': string;
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    DEFAULT: string;
  };
  warning?: {
    '25': string;
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    DEFAULT: string;
  };
  success?: {
    '25': string;
    '50': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    '800': string;
    '900': string;
    DEFAULT: string;
  };
}

export interface MappedTheme {
  [key: string]: string | null;
}

export interface ApplyThemeProps {
  customTheme?: Theme;
  theme: string;
}

// default theme
export const base = {
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
};
