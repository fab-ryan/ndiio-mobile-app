import { StyleSheet, ActivityIndicator } from 'react-native';
import { View } from './ThemedView';
import { useState } from 'react';
import { Portal } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import { Colors, height, width } from '@/constants';

interface LoaderProps {
  loading: boolean;
}
export const Loader = ({ loading }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Portal>
      {loading && (
        <View
        style={{
          flex: 1,
          backgroundColor:'transparent',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <BlurView
            intensity={50}
            tint='dark'
            style={{
              height: height,
              width,
              position: 'absolute',
            }}
          />
          <ActivityIndicator
            size='large'
            color={Colors.dark.blue}
          />
        </View>
      )}
    </Portal>
  );
};

// const styles = StyleSheet.create({});
