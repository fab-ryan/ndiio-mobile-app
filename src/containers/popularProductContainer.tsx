import { SectionTitle, ProductCard, BannerCard } from '@/src/shared';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { View } from '@/src/components';
import { useRouter } from 'expo-router';
import { Colors } from '../constants';
import { ProductInterface } from '../types';
import { Fragment } from 'react';

interface PopularProductContainerProps {
  products: ProductInterface;
  section_title?: string;
  onPressViewAll: () => void;
  evenIndex: boolean;
}
export const ProductContainer = ({
  products,
  section_title,
  onPressViewAll,
  evenIndex,
}: PopularProductContainerProps) => {
  const router = useRouter();

  return (
    <Fragment>
      <View
        style={styles.productSection}
        darkColor={Colors.dark.background}
        lightColor='#f5f5f5'
      >
        <SectionTitle
          title={section_title as string}
          onPress={onPressViewAll}
        />
        <View
          style={{
            width: '100%',
            marginTop: 10,
            backgroundColor: 'transparent',
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={products.products ?? []}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  router.navigate(`/product/${item.slug}?details=true`);
                }}
                style={{
                  marginHorizontal: 5,
                }}
              >
                <ProductCard product={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      {
        evenIndex && (
          <View
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              paddingHorizontal: 10,
            }}
          >
            <BannerCard
              title='C02 - Cable Multifuntion'
              image='https://res.cloudinary.com/ryan-fab/image/upload/v1725521120/mobile/image_5_3_fosn2r.png'
              color='#3669C9'
              onPress={() => {}}
            />
          </View>
        )
      }
     
    </Fragment>
  );
};

const styles = StyleSheet.create({
  productSection: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: '#f5f5f5',
  },
});
