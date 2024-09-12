import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { Icon } from '@/src/components';
import { IconsEnum } from '@/src/utils';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        tabBarVisibilityAnimationConfig: {
          show: {
            animation: 'timing',
            config: {
              duration: 100,
            },
          },
          hide: {
            animation: 'timing',
            config: {
              duration: 100,
            },
          },
        },
        tabBarStyle:{
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopColor: 'transparent',
          borderTopWidth: 1,
          shadowColor: Colors[colorScheme ?? 'light'].blue,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.42,
          shadowRadius: 2.22,
          elevation: 3,

        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='home'
              color={color}
              type={IconsEnum.antdesign}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='wishlist'
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='heart'
              color={color}
              type={IconsEnum.antdesign}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='order'
        options={{
          title: 'Order',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='bag'
              color={color}
              type={IconsEnum.ionicon}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name='user'
              color={color}
              type={IconsEnum.feather}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
