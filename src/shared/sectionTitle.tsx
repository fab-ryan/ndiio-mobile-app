import { View, Text } from '@/src/components';
import { Pressable, StyleSheet } from 'react-native';

interface SectionProps {
  title: string;
  onPress: () => void;
}

export const SectionTitle = ({ title, onPress }: SectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text
          style={styles.seeAll}
          onPress={onPress}
        >
          See All
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007BFF',
  },
});
