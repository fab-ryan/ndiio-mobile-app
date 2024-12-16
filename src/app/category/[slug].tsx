import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  SearchInput,
  Skeleton,
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
import { ProductByCategory, ProductDetails } from "@/src/types";

interface SortInterface {
  sort: string | undefined;
}

export default function Category() {
  const { getProductByCategory } = useActions();
  const { slug, details } = useLocalSearchParams<{
    slug: string;
    details: string;
  }>();
  const [getProductByCategoryMutaion] = useGetProductByCategoryMutation();
  const [filterVisible, setFilterVisible] = useState(false);
  const [brandcheck, setBrandCheck] = useState<string | undefined>(undefined);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(50000);

  const { productsCategory, loadingProductsCategory, safeProducts } =
    useSelector((state) => state.product);
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
    if (details !== "true") {
      formData.append("brandcheck", brandcheck || "");
      formData.append("sort", sort || "");
      formData.append("maximumP", String(maxPrice));
      formData.append("minimumP", "0");
      formData.append("price", "0");
    }
    getProductByCategoryMutaion({
      FormData: formData,
      detailed: details !== "true",
    })
      .unwrap()
      .then((res) => {
        getProductByCategory({
          detailed: details,
          productsCategory: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const data =
    details === "true"
      ? (safeProducts as ProductDetails[])[0]?.products
      : (safeProducts as ProductByCategory[]) ?? [];
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
            title={
              (productsCategory?.category &&
                productsCategory?.category[0]?.name) ??
              (safeProducts && (safeProducts as ProductDetails[])[0]?.name) ??
              ""
            }
          />
        }
        data={Array.isArray(data) ? (data as any) : []}
        numColumns={width > 600 ? 3 : width > 400 ? 2 : 1}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "transparent",
              // width: "50%",
              marginHorizontal: 10,
              justifyContent: "center",
              alignItems: "center",
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
          backgroundColor: "#f5f5f5",
          justifyContent: "center",
          alignItems: "center",

        }}
        style={{
          marginBottom: 0,
          backgroundColor: "#f5f5f5",
          marginTop: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {loadingProductsCategory && (
        <View>
          <FlatList
            data={Array.from({ length: 6 })}
            numColumns={width > 600 ? 3 : width > 400 ? 2 : 1}
            renderItem={() => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  width: "50%",
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <Skeleton
                  style={{
                    width: "100%",
                    height: 250,
                    marginVertical: 5,
                    borderRadius: 10,
                  }}
                  type={"rect"}
                />
              </View>
            )}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 80,
            }}
          />
        </View>
      )}
      {details !== "true" && (
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
      )}
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
    width: width,
  },
});
