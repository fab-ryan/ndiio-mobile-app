import type { PropsWithChildren } from 'react';
import { StyleSheet, ScrollViewProps } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import { View } from '@/components/ThemedView';

export const ScrollView = ({
  children,
  ...props
}: PropsWithChildren<{}> & ScrollViewProps) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        {...props}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Animated.View
          style={[
            {
              flex: 1,
            },
          ]}
        >
          {children}
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: 'hidden',
  },
});
