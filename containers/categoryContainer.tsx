import { Icon, View } from '@/components';
import { SectionTitle, CategoryCard } from '@/shared';
import { CategoriesInterface } from '@/utils';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
interface CategoryContainerProps {
    categoriesData:  CategoriesInterface[];
}
export const CategoryContainer = ({ categoriesData }: CategoryContainerProps) => {
  return (
    <View style={styles.categories}>
      <SectionTitle
        title='Categories'
        onPress={() => {}}
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
    marginTop: 20,
  },
});
