import { FlatList, Platform, StyleSheet } from 'react-native';

import {
  View,
  ScrollView,
  SafeAreaView,
  SearchInput,
} from '@/src/components';
import { TopBar, AdvertiseCard, BannerCard } from '@/src/shared';
import { useForm, useSelector } from '@/src/hooks';
import {   productsData } from '@/src/utils';
import {
  BestSellerContainer,
  CategoryContainer,
  NewArrivalContainer,
  PopularProductContainer,
} from '@/src/containers';
import { useState } from 'react';
import { CategoryModal } from '@/src/modals';
import { useGetCategoriesQuery, useGetSliderQuery } from '@/redux';

export default function HomeScreen() {
  const [visibleAllCategories, setVisibleAllCategories] = useState(false);
  const { data: slidesData } = useGetSliderQuery();
  useGetCategoriesQuery();
  const {categories} = useSelector((state)=>state.category);
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
              }}
              data={slidesData?.data.slider ?? []}
              renderItem={({ item }) => <AdvertiseCard {...item} />}
            />
          </View>
          <CategoryContainer
            categoriesData={categories ?? []}
            onPress={() => setVisibleAllCategories(true)}
          />
        </View>
        <PopularProductContainer
          productsData={productsData}
          section_title='Featured Product'
        />
        <View
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            paddingHorizontal: 20,
          }}
        >
          <BannerCard
            title='Get 20% off on your first order'
            image='https://res.cloudinary.com/ryan-fab/image/upload/v1725521120/mobile/image_5_4_nuc7gj.png'
            color='#0ACF83'
            onPress={() => {}}
          />
        </View>
        <BestSellerContainer
          productsData={productsData}
          section_title='Best Sellers'
        />
        <View
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            paddingHorizontal: 20,
          }}
        >
          <BannerCard
            title='C02 - Cable Multifuntion'
            image='https://res.cloudinary.com/ryan-fab/image/upload/v1725521120/mobile/image_5_3_fosn2r.png'
            color='#3669C9'
            onPress={() => {}}
          />
        </View>

        <NewArrivalContainer
          productsData={productsData}
          section_title='New Arrivals'
        />

        <CategoryModal
          isVisible={visibleAllCategories}
          onClose={() => setVisibleAllCategories(false)}
        />
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
});
