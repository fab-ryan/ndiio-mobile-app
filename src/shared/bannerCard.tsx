import { View, Image, Text, Icon } from '@/src/components';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface BannerCardProps {
  title: string;
  image: string;
  color: string;
  onPress: () => void;
}

export const BannerCard = ({
  title,
  image,
  onPress,
  color,
}: BannerCardProps) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <View style={styles.bannerContent}>
        <Text style={styles.title}>{title}</Text>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
              gap: 10,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
              }}
            >Shop Now</Text>
            <Icon
              name='chevron-right'
              color='#fff'
              size={20}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Image
        source={image}
        alt={title}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '100%',
    borderRadius: 10,
    objectFit: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '50%',
    backgroundColor: 'transparent',
  },
});
