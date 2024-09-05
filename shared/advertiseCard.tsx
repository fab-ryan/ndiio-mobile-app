import { View, Text, ImageBackground } from '@/components';
import { useThemeColor } from '@/hooks';
import { StyleSheet } from 'react-native';

interface AdvertiseCardProps {
  title: string;
  subtitle: string;
  image: string;
}

export const AdvertiseCard = ({
  title,
  subtitle,
  image,
}: AdvertiseCardProps) => {
  const color = useThemeColor({ light: '#fff', dark: '#fff' }, 'text');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        alt={title}
        style={styles.image}
        transition={200}
      >
        <View style={styles.content}>
          <Text
            style={{
              color,
              ...styles.title,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color,
              ...styles.subtitle,
            }}
          >
            {subtitle}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    width: 330,
    // box shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.53,
    shadowRadius: 2.62,
    elevation: 4,

  },

  image: {
    width: '100%',
    height: 170,
    objectFit: 'cover',
    justifyContent: 'center',
  },
  content: {
    width: '50%',
    paddingHorizontal: 10,
    height: '100%',
    backgroundColor: '#3669C9',
    borderTopEndRadius: 80,
    borderBottomEndRadius: 80,
    justifyContent: 'center',
    alignItems:'flex-start'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
  },
});
