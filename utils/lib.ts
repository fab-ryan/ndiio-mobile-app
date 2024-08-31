import { setItemAsync, getItemAsync } from 'expo-secure-store';

import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';
import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export enum IconsEnum {
  fa = 'fa',
  feather = 'feather',
  material = 'material',
  ionicon = 'ionicon',
  antdesign = 'antdesign',
  entypo = 'entypo',
  octicons = 'octicons',
}

export type IconProps<T extends IconsEnum> = {
  name: ComponentProps[T]['name'];
  color?: string;
  size?: number;
  type?: T;
  style?: StyleProp<TextStyle>;
} & ThemeProps;

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

interface ComponentProps {
  fa: React.ComponentProps<typeof FontAwesome>;
  feather: React.ComponentProps<typeof Feather>;
  material: React.ComponentProps<typeof MaterialCommunityIcons>;
  ionicon: React.ComponentProps<typeof Ionicons>;
  antdesign: React.ComponentProps<typeof AntDesign>;
  entypo: React.ComponentProps<typeof Entypo>;
  octicons: React.ComponentProps<typeof Entypo>;
}

export async function saveSecureData(key: string, value: string) {
  await setItemAsync(key, value);
}

export async function getSecureData(key: string) {
  return await getItemAsync(key);
}

export async function removeSecureData(key: string) {
  return await setItemAsync(key, '');
}

export async function getOnboardingStatus() {
  const onboardingStatus = await getSecureData('onboardingStatus');
  if (onboardingStatus === null) {
    return false;
  }
  return onboardingStatus === 'true';
}

export async function setOnboardingStatus(status: boolean) {
  await saveSecureData('onboardingStatus', status.toString());
}

export async function clearSecureData() {
  await removeSecureData('onboardingStatus');
}
