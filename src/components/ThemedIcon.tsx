import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
  Octicons,
} from '@expo/vector-icons';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { IconProps, IconsEnum } from '@/src/utils';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function Icon<T extends IconsEnum>(props: IconProps<T>) {
  const { size = 16, lightColor, darkColor, style, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const IconComponent = getIconComponent(props.type);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <IconComponent
      size={size || 24}
      {...otherProps}
      color={props.color ?? color}
      style={style}
    />
  );
}
function getIconComponent(type?: IconsEnum) {
  switch (type) {
    case IconsEnum.fa:
      return FontAwesome;
    case IconsEnum.feather:
      return Feather;
    case IconsEnum.material:
      return MaterialCommunityIcons;

    case IconsEnum.ionicon:
      return Ionicons;
    case IconsEnum.antdesign:
      return AntDesign;
    case IconsEnum.entypo:
      return Entypo;
    case IconsEnum.octicons:
      return Octicons;
    default:
      return FontAwesome;
  }
}

export { Icon };

export const ForbiddenIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
  >
    <Path
      fill={color}
      d='M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2Z'
      opacity={0.4}
    />
    <Path
      fill={color}
      d='m13.06 12.001 2.97-2.97c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L12 10.941l-2.97-2.97a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.97 2.97-2.97 2.97c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.97-2.97 2.97 2.97c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.97-2.97Z'
    />
  </Svg>
);

export const VerifyIcon = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
  >
    <Path
      fill={color}
      d='M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z'
      opacity={0.4}
    />
    <Path
      fill={color}
      d='M10.79 15.171a.75.75 0 0 1-.53-.22l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22Z'
    />
  </Svg>
);

export const InfoIcon = ({ size, color }: { size: number; color: string }) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    viewBox='0 0 24 24'
  >
    <Path
      fill={color}
      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'
      opacity={0.4}
    />
    <Path
      fill={color}
      d='M12 13.75c.41 0 .75-.34.75-.75V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5c0 .41.34.75.75.75Zm.92 1.869c-.05-.12-.12-.23-.21-.33-.1-.09-.21-.16-.33-.21a1 1 0 0 0-.76 0c-.12.05-.23.12-.33.21-.09.1-.16.21-.21.33-.05.12-.08.25-.08.38s.03.26.08.38c.05.13.12.23.21.33.1.09.21.16.33.21.12.05.25.08.38.08s.26-.03.38-.08.23-.12.33-.21c.09-.1.16-.2.21-.33.05-.12.08-.25.08-.38s-.03-.26-.08-.38Z'
    />
  </Svg>
);
