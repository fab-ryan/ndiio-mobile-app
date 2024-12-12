import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '../redux/config';
import { CustomToast } from '../components/ThemedToast';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PaperProvider>
          <CustomToast />
          <Stack>
            <Stack.Screen
              name='(tabs)'
              options={{ headerShown: false }}
            />

            {/* <Stack.Screen
              name='(root)'
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name='+not-found' />
            <Stack.Screen
              name='(auth)'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='category'
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name='product'
              options={{ headerShown: false }}
            />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
