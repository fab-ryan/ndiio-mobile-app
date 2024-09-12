import {
  type ViewProps,
  SafeAreaView as DefaultSafeAreaView,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { useThemeColor } from '@/src/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function View({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}

      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export type ThemedSafeAreaViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function SafeAreaView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedSafeAreaViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <DefaultSafeAreaView
      style={[
        { backgroundColor },
        style,
        { paddingLeft: 40, paddingRight: 20 },
      ]}
      {...otherProps}
    />
  );
}
