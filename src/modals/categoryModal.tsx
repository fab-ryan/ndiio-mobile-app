import { Modal, View, Text, Icon, Image } from '@/src/components';
import { width } from '@/src/constants';
import { CategoryCard } from '@/src/shared';
import { IconsEnum, imageBaseUrl } from '@/src/utils';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useGetCategoriesQuery } from '@/redux';
import { useSelector } from '../hooks';
import { useRouter } from 'expo-router';

interface CategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CategoryModal = ({ isVisible, onClose }: CategoryModalProps) => {
  const [numColumns, setNumColumns] = useState(1);
 useGetCategoriesQuery();

  const {categories} = useSelector((state)=>state.category);

  useEffect(() => {
    const columnCount = Math.floor(width / 120);
    setNumColumns(columnCount);
  }, []);
  const router = useRouter();

  return (
    <Modal
      visible={isVisible}
      onClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>
            Categories
          </Text>
          <Pressable
            onPress={onClose}
            style={{ paddingRight: 20 }}
          >
            <Icon
              name='cross'
              type={IconsEnum.entypo}
              size={30}
            />
          </Pressable>
        </View>
        <View style={styles.cardBody}>
          <FlatList
            horizontal={false}
            numColumns={numColumns}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={categories ?? []}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                router.push(`/category/${item.category.slug}`)
              }}>
                <CategoryCard
                  title={item?.category?.name}
                  bg_color={generateRandomColor()}
                  padding={10}
                  height={65}
                  width={65}
                >
                  <Image
                    source={{ uri: imageBaseUrl(item.category.category_icon) }}
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </CategoryCard>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
