import { useEffect } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import AppIntroSlider from 'react-native-app-intro-slider';
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, Image, Icon } from '@/components';
import { useThemeColor } from '@/hooks/useThemeColor';

import {
  getOnboardingStatus,
  IconsEnum,
  OnboardData,
  OnboardDataInterface,
  setOnboardingStatus,
} from '@/utils';
import { height, width } from '@/constants';

export default function SplashScreen() {
  const onboardingStatus = getOnboardingStatus();
  const color = useThemeColor({ light: '#fff', dark: '#fff' }, 'text');
  const theme = useColorScheme() ?? 'light';

  const router = useRouter();

  useEffect(() => {
    async function fetchDatafetchData() {
      if (await onboardingStatus) {
        router.navigate('/login');
      } else {
        router.navigate('/(root)');
      }
    }

    fetchDatafetchData();
  }, [onboardingStatus]);

  const handleDone = async () => {
    await setOnboardingStatus(true);
    router.navigate('/login');
  };
  const LinearGradientColors = {
    colors:
      theme === 'light'
        ? ['#3669C9', '#0a7ea4', '#0a7ea4']
        : ['#000', '#000', '#000'],
  };

  return (
    <AppIntroSlider
      data={OnboardData}
      renderItem={({ item }: { item: OnboardDataInterface }) => (
        <LinearGradient
          colors={LinearGradientColors.colors}
          style={styles.container}
        >
          <View style={styles.container_body}>
            <Image
              source={item.image}
              alt={item.title}
              style={styles.image}
              transition={200}
            />
            <View style={{ height: 20 }} />
            <Text
              type='title'
              style={{
                ...styles.title,
                color,
              }}
            >
              {item.title}
            </Text>
            <Text
              type='default'
              style={styles.description}
            >
              {item.description}
            </Text>
          </View>
        </LinearGradient>
      )}
      onDone={handleDone}
      renderSkipButton={() => (
        <RenderButton
          text='Skip'
          left={width * 0.75}
        />
      )}
      renderDoneButton={() => (
        <RenderButton
          text='Start'
          right={0}
        />
      )}
      showNextButton={false}
      showDoneButton
      showSkipButton
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
}

const RenderButton = ({
  text,
  left = undefined,
  right = undefined,
}: {
  text: string;
  right?: number | null;
  left?: number | null;
}) => {
  return (
    <View
      style={{
        ...styles.link,
        left,
        right,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 14,
          color: '#fff',
        }}
      >
        {text}
      </Text>
      <Icon
        name='right'
        type={IconsEnum.antdesign}
        color='#fff'
        size={12}
        style={{ marginLeft: 3 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  link: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: height * 0.75,
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    borderRadius: 20,
  },
  container_body: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: 'transparent',
    paddingVertical: 100,
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#fff',
  },
  description: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
  dotStyle: {
    width: 30,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 80,
  },
  activeDotStyle: {
    width: 30,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginBottom: 80,
  },
});
