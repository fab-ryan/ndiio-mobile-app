import { Href, Link } from 'expo-router';
import { Pressable, PressableProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { View } from './ThemedView';
import { Text } from './ThemedText';

export type ThemedButtonProps = {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'primary' | 'secondary' | 'danger';
  onPress?: () => void;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
} & PressableProps;

function Button({
  lightColor,
  darkColor,
  type = 'default',
  onPress,
  children,
  ...props
}: ThemedButtonProps) {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'secondary',
  );
  const textColor = useThemeColor({light: '#ffff', dark: darkColor}, 'text');
  const disabledColor = useThemeColor({light: lightColor, dark: darkColor}, 'dark_grey');
  let _style: PressableProps['style'] = [{ backgroundColor: color }];
  if(props.disabled) {
    _style = [{ backgroundColor: disabledColor, opacity: 0.5 }];
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          padding: 10,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: pressed ? color : color,
        },
        _style,
      ]}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'transparent',
        }}
      >
        {typeof children === 'string' ? (
          <Text
            style={{
              color: textColor,
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '500',
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
}

export { Button };

interface BackButtonProps {
  onPress?: () => void;
  href: Href;
  children: React.ReactNode;
  disabled?: boolean;
}

export const BackButton = ({ href = '/', ...props }: BackButtonProps) => {
  return (
    <Link
      href={href}
      style={{ padding: 10 }}
    >
      {props.children}
    </Link>
  );
};
