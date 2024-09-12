import { View, Text, Image, Icon } from '@/src/components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconsEnum, ProductInterface } from '@/src/utils';
import { useThemeColor } from '../hooks';
import { Colors } from '../constants';
import { ProductModal } from '../modals/productModal';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const productName =
    product.title.length > 18
      ? product.title.substring(0, 18) + '...'
      : product.title;
  const textColor = useThemeColor({ light: 'gray', dark: '#000' }, 'text');
  return (
    <View
      style={styles.container}
      darkColor='#f5f5f5'
      lightColor='#fff'
    >
      <ProductModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <View style={styles.image}>
        <Image
          source={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          contentFit='contain'
        />
      </View>
      <View style={styles.content}>
        <Text
          style={styles.title}
          darkColor='#000'
        >
          {productName}
        </Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          }}
        >
          <Icon
            name='star'
            type={IconsEnum.fa}
            // color='#FFD700'
            color={textColor}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 14,
              color: textColor,
            }}
          >
            {product.rating}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
          }}
          darkColor={Colors.dark.dark_grey}
        >
          {product.reviews} Reviews
        </Text>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Icon
            name='dots-three-vertical'
            type={IconsEnum.entypo}
            color='#838589'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    width: 180,
    height: 300,
    borderRadius: 10,
    shadowColor: '#0a7ea4',
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    marginRight: 15,
    padding: 10,
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 1,
  },
  image: {
    width: 180,
    height: 180,
    objectFit: 'cover',
    overflow: 'hidden',
    padding: 10,
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: 'transparent',
    padding: 10,
    width: '100%',
    height: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  price: {
    fontSize: 14,
    color: '#FE3A30',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 8,
  },
});
