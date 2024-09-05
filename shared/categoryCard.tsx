import { PropsWithChildren } from 'react';
import { View, Text } from '@/components';

interface CategoryProps {
  title: string;
  bg_color: string;
}

export const CategoryCard = ({
  title,
  bg_color,
  children,
}: CategoryProps & PropsWithChildren) => {
  return (
    <View
      style={{
        padding: 10,
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
