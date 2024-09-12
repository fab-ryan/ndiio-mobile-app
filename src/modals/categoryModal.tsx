import { Modal, View, Text, Icon } from '@/src/components';
import { width } from '@/src/constants';
import { CategoryCard } from '@/src/shared';
import { categoriesData, IconsEnum } from '@/src/utils';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface CategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CategoryModal = ({ isVisible, onClose }: CategoryModalProps) => {
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    const columnCount = Math.floor(width / 80); 
    setNumColumns(columnCount);
  }, []);
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
            data={categoriesData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {}}>
                <CategoryCard
                  title={item.title}
                  bg_color={item.bg_color}
                  padding={5}
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
    </Modal>
  );
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
