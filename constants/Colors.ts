/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
interface Schemas {
  primary: string;
  secondary: string;
  red: string;
  light_grey: string;
  dark_grey: string;
  white: string;
  blue: string;
}
interface DefaultColors {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
}
interface ColorsInterface {
  light: Schemas & DefaultColors;
  dark: Schemas & DefaultColors;
}

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors: ColorsInterface = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#0a7ea4',
    secondary: '#3669C9',
    red: '#ff0000',
    light_grey: '#838589',
    dark_grey: '#687076',
    white: '#fff',
    blue: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#11181C',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#0a7ea4',
    secondary: '#fff',
    red: '#ff0000',
    light_grey: '#838589',
    dark_grey: '#687076',
    white: '#fff',
    blue: '#0a7ea4',
  },
};
