import { View, Text, Image, Icon } from '@/components';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconsEnum, ProductInterface } from '@/utils';

interface ProductCardProps {
  product: ProductInterface;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const productName =
    product.title.length > 18
      ? product.title.substring(0, 18) + '...'
      : product.title;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            objectFit: 'cover',
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{productName}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon
            name='star'
            type={IconsEnum.fa}
            color='#FFD700'
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 14,
            }}
          >
            {product.rating}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          {product.reviews} Reviews
        </Text>
        <TouchableOpacity onPress={() => {}}>
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
