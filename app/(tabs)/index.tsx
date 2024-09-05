import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import {
  View,
  ScrollView,
  SafeAreaView,
  SearchInput,
  Icon,
} from '@/components';
import {
  TopBar,
  AdvertiseCard,
  SectionTitle,
  CategoryCard,
  ProductCard,
} from '@/shared';
import { useForm } from '@/hooks';
import { advertiseData, categoriesData, productsData } from '@/utils';
import { CategoryContainer } from '@/containers';

export default function HomeScreen() {
  const { control } = useForm({
    search: '',
  });

  let _style;
  if (Platform.OS === 'ios') {
    _style = {
      marginBottom: 0,
    };
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TopBar />
      <ScrollView style={{ ..._style }}>
        <View style={styles.container}>
          <SearchInput
            control={control}
            placeholder='Search for products'
          />

          <View
            style={{
              width: '100%',
              marginTop: 20,
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginTop: 10,
                marginBottom: 10,
                width: '100%',
                overflow: 'hidden',
              }}
              data={advertiseData}
              renderItem={({ item }) => (
                <AdvertiseCard
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                />
              )}
            />
          </View>
          <CategoryContainer categoriesData={categoriesData} />
        </View>
        <View style={styles.productSection}>
          <SectionTitle
            title='Popular Products'
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
                <TouchableOpacity onPress={() => {}}>
                  <ProductCard product={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  categories: {
    width: '100%',
  },

  productSection: {
    width: '100%',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
});
