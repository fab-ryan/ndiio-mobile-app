import { Icon, View } from '@/src/components';
import { SectionTitle, CategoryCard } from '@/src/shared';
import { CategoriesInterface } from '@/src/utils';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
interface CategoryContainerProps {
  categoriesData: CategoriesInterface[];
  onPress: () => void;
}
export const CategoryContainer = ({
  categoriesData,
  onPress,
}: CategoryContainerProps) => {
  return (
    <View style={styles.categories}>
      <SectionTitle
        title='Categories'
        onPress={() => onPress()}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <CategoryCard
                title={item.title}
                bg_color={item.bg_color}
              >
                <Icon
                  name={item.icon.name}
                  type={item.icon.icon_type}
                  color={item.icon.color}
                />
              </CategoryCard>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    marginTop: 5,
  },
});
