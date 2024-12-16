import { Modal, View, Text, Icon, Button } from '@/src/components';
import { Pressable, StyleSheet } from 'react-native';
import { IconsEnum } from '../utils';

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ProductModal = ({ isVisible, onClose }: ProductModalProps) => {
  const handleAddToCart = () =>{
    
  }
  return (
    <Modal
      visible={isVisible}
      onClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20 }}>
            Product Actions
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
          <View style={styles.linkButton}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'transparent',
                borderRadius: 10,
                borderBottomWidth: 1,
                borderColor: '#e1e1e1',
              }}
            >
              <Text style={{ fontSize: 16 }}>Add to Wishlist</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: 'transparent',
                borderRadius: 10,
                borderBottomWidth: 1,
                borderColor: '#e1e1e1',
              }}
            >
              <Text style={{ fontSize: 16 }}>Share Product</Text>
            </View>
            <View
              style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: 'transparent',
                borderRadius: 10,
              }}
            >
              <Button
                title='Add to Cart'
                onPress={() => {}}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}
                >
                  Add to Cart
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  cardBody: {
    padding: 20,
  },
  linkButton: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});
