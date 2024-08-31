import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button } from '@/components';

export default function WishlistScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Wishlist</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
});
