import { SectionTitle, ProductCard } from '@/src/shared';
import { ProductInterface } from '@/src/utils';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { View } from '@/src/components';
import { useRouter } from 'expo-router';
import { Colors } from '../constants';

interface PopularProductContainerProps {
  productsData: ProductInterface[];
  section_title?: string;
}
export const PopularProductContainer = ({
  productsData,
  section_title,
}: PopularProductContainerProps) => {
  const router = useRouter();

  return (
    <View style={styles.productSection}
    darkColor={Colors.dark.background}
    lightColor='#f5f5f5'
    >
      <SectionTitle
        title={section_title as string}
        onPress={() => {}}
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
          data={productsData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => { router.navigate(`/product/testing`);
              }}
            >
              <ProductCard product={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export const BestSellerContainer = PopularProductContainer;

export const NewArrivalContainer = PopularProductContainer;

const styles = StyleSheet.create({
  productSection: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: '#f5f5f5',
  },
});
