import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  SearchInput,
} from "@/components";
import { Colors, width } from "@/constants";
import { useActions, useForm, useSelector } from "@/hooks";
import { useGetProductByCategoryMutation } from "@/redux";
import { ProductCard, TopBarWithBackButton } from "@/shared";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { FilterModal } from "@/src/modals";

interface SortInterface {
  sort: string | undefined;
}

export default function Category() {
  const { getProductByCategory } = useActions();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const [getProductByCategoryMutaion] = useGetProductByCategoryMutation();
  const [filterVisible, setFilterVisible] = useState(false);
  const [brandcheck, setBrandCheck] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(50000);

  const { productsCategory, loadingProductsCategory } = useSelector(
    (state) => state.product
  );

  const router = useRouter();

  useEffect(() => {
    categoryAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const categoryAction = () => {
    const formData = new FormData();
    formData.append("skip", "0");
    formData.append("take", "18");
    formData.append("slug", slug);
    formData.append("brandcheck", brandcheck || "");
    formData.append("sort", sort || "");
    formData.append("maximumP", String(maxPrice));
    formData.append("minimumP", "0");
    formData.append("price", "0");
    getProductByCategoryMutaion(formData)
      .unwrap()
      .then((res) => {
        getProductByCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <FilterModal
        isVisible={filterVisible}
        onClose={() => setFilterVisible(false)}
        info={productsCategory}
      />
      <TopBarWithBackButton title="Category" onPress={() => router.back()} />
      <FlatList
        ListHeaderComponent={
          <HeaderComponentsList
            title={productsCategory?.category[0]?.name ?? ""}
          />
        }
        data={productsCategory?.data ?? []}
        numColumns={width > 600 ? 3 : width > 400 ? 2 : 1}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              width: "50%",
              marginHorizontal: 15,
              marginVertical: 0,
            }}
          >
            <ProductCard
              product={{
                ...item,
                avg_rating: 0,
                total_review: 0,
              }}
            />
          </View>
        )}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 80,
        }}
        style={{
          marginBottom: 0,
          backgroundColor: "#f5f5f5",
          marginTop: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
        }}
      >
        <Pressable
          style={{
            borderRadius: 5,
            alignSelf: "center",
            width: "70%",
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: Colors.dark.blue,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.light.background,
          }}
          onPress={() => setFilterVisible(true)}
        >
          <Text
            style={{
              color: Colors.light.text,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Filter & Sorting
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const HeaderComponentsList = ({ title }: { title: string }) => {
  const { control } = useForm({
    search: "",
  });
  return (
    <View style={styles.headerSection} lightColor="#fff" darkColor="#000">
      <Text
        style={{
          fontSize: 20,
          fontWeight: "900",
          color: Colors.dark.blue,
          lineHeight: 30,
          marginBottom: 20,
        }}
        lightColor="#000"
        darkColor="#fff"
      >
        {title}
      </Text>
      <SearchInput control={control} placeholder="Search for products" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerSection: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 20,
  },
});
