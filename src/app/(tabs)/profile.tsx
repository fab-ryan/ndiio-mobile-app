import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView,} from '@/src/components';

export default function ProfileScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Profile</Text>
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
