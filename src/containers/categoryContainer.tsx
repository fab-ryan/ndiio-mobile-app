import { Image, View } from "@/components";
import { SectionTitle, CategoryCard } from "@/src/shared";
import { CategoriesInterface, imageBaseUrl } from "@/src/utils";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Categories } from "@/types/categoryTyes";
import { useRouter } from "expo-router";
interface CategoryContainerProps {
  categoriesData: Categories[];
  onPress: () => void;
  isLoading?: boolean;
}
export const CategoryContainer = ({
  categoriesData,
  onPress,
  isLoading,
}: CategoryContainerProps) => {
  const router = useRouter();
  return (
    <View style={styles.categories}>
      {!isLoading && (
        <>
          <SectionTitle title="Categories" onPress={() => onPress()} />
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/category/${item.category.slug}?details=false`);
                  }}
                >
                  <CategoryCard
                    title={item.category.name}
                    bg_color={generateRandomColor()}
                  >
                    <Image
                      source={{
                        uri: imageBaseUrl(item.category.category_icon),
                      }}
                      style={{
                        width: 70,
                        height: 70,
                      }}
                    />
                  </CategoryCard>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};
const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const styles = StyleSheet.create({
  categories: {
    marginTop: 5,
  },
});
