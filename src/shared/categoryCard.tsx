import { PropsWithChildren } from 'react';
import { View, Text } from '@/src/components';

interface CategoryProps {
  title: string;
  bg_color: string;
  padding?: number;
  width?: number;
  height?: number;
}

export const CategoryCard = ({
  title,
  bg_color,
  padding = 10,
  children,
  width=80,
  height=80
}: CategoryProps & PropsWithChildren) => {
  return (
    <View
      style={{
        padding: padding,
        borderRadius: 10,
        marginRight: 10,
      }}
    >
      <View
        style={{
          width: width,
          height: height,
          borderRadius: 100,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor:bg_color,
        }}
      >
        {children}
      </View>
      <Text
        style={{
          marginTop: 5,
          textAlign: 'center',
          fontSize: 12,
        }}
      >
        {title.length > 12 ? `${title.slice(0, 12)}...` : title}
      </Text>
    </View>
  );
};
