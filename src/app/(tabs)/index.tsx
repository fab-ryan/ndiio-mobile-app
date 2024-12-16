import {
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";

import { View, SafeAreaView, SearchInput, Skeleton } from "@/src/components";
import { TopBar, AdvertiseCard, BannerCard } from "@/src/shared";
import { useActions, useForm, useSelector } from "@/src/hooks";
import { CategoryContainer, ProductContainer } from "@/src/containers";
import { useEffect, useState } from "react";
import { CategoryModal } from "@/src/modals";
import {
  useGetCategoriesQuery,
  useGetSliderQuery,
  useGetProductsMutation,
} from "@/redux";
import { useRouter } from "expo-router";
import { Colors } from "@/src/constants";
import React from "react";
import { ProductInterface } from "@/src/types";
import { CategorySkeleton } from "@/src/skeletons";

const Item = React.memo(
  ({ item, evenIndex }: { item: ProductInterface; evenIndex: boolean }) => {
    const router = useRouter();
    return (
      <ProductContainer
        products={item}
        section_title={item.name}
        onPressViewAll={() =>
          router.push(`/category/${item.slug}?details=true`)
        }
        evenIndex={evenIndex}
      />
    );
  }
);

Item.displayName = "Item";

export default function HomeScreen() {
  const router = useRouter();
  const { getProducts } = useActions();
  const [visibleAllCategories, setVisibleAllCategories] = useState(false);
  const [skip, setSkip] = useState(8);

  const [getProductsMutation, getProductStates] = useGetProductsMutation();
  useGetCategoriesQuery();
  const { products, loadingProducts } = useSelector((state) => state.product);

  let _style;
  if (Platform.OS === "ios") {
    _style = {
      marginBottom: 0,
    };
  }
  useEffect(() => {
    handleGetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetProducts = () => {
    const formData = new FormData();
    formData.append("skip", `${skip}`);
    formData.append("take", "2");
    getProductsMutation(formData)
      .unwrap()
      .then((res) => {
        getProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const RenderItem = ({
    item,
    index,
  }: {
    item: ProductInterface;
    index: number;
  }) => {
    return <Item item={item} evenIndex={index % 2 === 0} />;
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TopBar />

      <FlatList
        removeClippedSubviews={true}
        style={{ ..._style }}
        ListHeaderComponent={
          <HeaderComponents setVisibleAllCategories={setVisibleAllCategories} />
        }
        data={products?.data ?? []}
        initialNumToRender={10}
        renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} />
        )}
        keyExtractor={(item) => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!loadingProducts && products?.data.length === 0) return;
          setSkip(skip + 2);
          handleGetProducts();
        }}
        ListFooterComponent={
          loadingProducts ? (
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <ActivityIndicator
                size="large"
                color={
                  Platform.OS === "ios" ? Colors.dark.blue : Colors.light.blue
                }
              />
            </View>
          ) : null
        }
      />
      {getProductStates?.isLoading && (
        <View
          style={{
            width: "100%",
            paddingVertical: 10,
          }}
          darkColor={Colors.dark.background}
          lightColor="#f5f5f5"
        >
          <View
            shouldRasterizeIOS
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: "transparent",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Skeleton
              type="rect"
              width={100}
              height={10}
              style={{ marginTop: 10, marginLeft: 20, borderRadius: 10 }}
            />
            <Skeleton
              type="rect"
              width={100}
              height={10}
              style={{ marginTop: 10, marginLeft: 20, borderRadius: 10 }}
            />
          </View>
          <View
            style={{
              width: "100%",
            }}
            darkColor={Colors.dark.background}
            lightColor="#f5f5f5"
          >
            <FlatList
              data={Array().fill(13)}
              renderItem={() => (
                <Skeleton
                  type="rect"
                  width={180}
                  height={300}
                  style={{ marginTop: 20, borderRadius: 10, gap: 10 }}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      )}
      {/* <View
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
      </View> */}

      <CategoryModal
        isVisible={visibleAllCategories}
        onClose={() => setVisibleAllCategories(false)}
      />
    </SafeAreaView>
  );
}

interface HeaderComponentsProps {
  setVisibleAllCategories: (value: boolean) => void;
}
const HeaderComponents = ({
  setVisibleAllCategories,
}: HeaderComponentsProps) => {
  const { data: slidesData, isLoading } = useGetSliderQuery();
  const { categories, loadingCategories } = useSelector(
    (state) => state.category
  );

  const { control } = useForm({
    search: "",
  });
  return (
    <View style={styles.container}>
      <SearchInput control={control} placeholder="Search for products" />
      {isLoading && (
        <Skeleton
          type="rect"
          width="100%"
          height={170}
          style={{ marginTop: 10, borderRadius: 10 }}
        />
      )}

      <View
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: "100%",
          }}
          data={slidesData?.data.slider ?? []}
          renderItem={({ item }) => <AdvertiseCard {...item} />}
        />
      </View>

      <CategoryContainer
        categoriesData={categories ?? []}
        onPress={() => setVisibleAllCategories(true)}
        isLoading={loadingCategories}
      />
      {loadingCategories && <CategorySkeleton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  categories: {
    width: "100%",
  },
});
