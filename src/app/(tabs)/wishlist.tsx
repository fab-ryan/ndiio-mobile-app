import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button, Webview } from '@/src/components';

export default function WishlistScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerTitleContainer}>
        {/* <Text style={styles.headerTitle}>Wishlist</Text> */}
        <Webview
              content={
              
                '<p>Product Loading</p>'
              }
            />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    flex:1
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
