import { Modal, View, Text, Icon } from '@/src/components';
import { Pressable, StyleSheet } from 'react-native';
import { IconsEnum } from '../utils';

interface CartModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CartModal = ({ isVisible, onClose }: CartModalProps) => {
  return (
    <Modal
      visible={isVisible}
      onClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>
            Cart
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
        <View style={styles.cardBody}></View>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  cardBody: {
    flex: 1,
  },
});
