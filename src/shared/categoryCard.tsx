import { PropsWithChildren } from 'react';
import { View, Text } from '@/src/components';

interface CategoryProps {
  title: string;
  bg_color: string;
  padding?: number;
}

export const CategoryCard = ({
  title,
  bg_color,
  padding=10,
  children,
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
          width: 60,
          height: 60,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bg_color,
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
        {title}
      </Text>
    </View>
  );
};
