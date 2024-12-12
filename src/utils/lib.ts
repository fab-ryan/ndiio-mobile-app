import { setItemAsync, getItemAsync } from "expo-secure-store";

import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import * as React from "react";
import { StyleProp, TextStyle } from "react-native";

import {
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query";

import { getToken, removeToken } from "./storage";

export enum IconsEnum {
  fa = "fa",
  feather = "feather",
  material = "material",
  ionicon = "ionicon",
  antdesign = "antdesign",
  entypo = "entypo",
  octicons = "octicons",
}

export type IconProps<T extends IconsEnum> = {
  name: ComponentProps[T]["name"];
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
  return await setItemAsync(key, "");
}

export async function getOnboardingStatus() {
  const onboardingStatus = await getSecureData("onboardingStatus");
  if (onboardingStatus === null) {
    return false;
  }
  return onboardingStatus === "true";
}

export async function setOnboardingStatus(status: boolean) {
  await saveSecureData("onboardingStatus", status.toString());
}

export async function clearSecureData() {
  await removeSecureData("onboardingStatus");
}

export const baseUrl: NonNullable<string | undefined> =
  process.env.EXPO_PUBLIC_API_URL + "api/v1" || "http://localhost:3200";

export const imageBaseUrl: (url: string) => string = (url: string) => {
  const pureUrl = baseUrl.replace("/api/v1", "");
  return `${pureUrl}/uploads/${url}`;
};
const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/api/v1`,
  prepareHeaders: async (headers, { getState }) => {
    try {
      const token = await new Promise((resolve, reject) => {
        getToken((value) => {
          if (value) {
            resolve(value);
          } else {
            reject(new Error("Token not found"));
          }
        });
      });

      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    } catch (error) {
      return headers;
    }
  },
});

export const fetchBaseQueryWithToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error?.status === 401) {
    await removeToken();
  }
  return result;
};

export const baseApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  endpoints: () => ({}),
  reducerPath: "baseApi",
});

export const formatPrice = (
  price: number | string,
  currency: string = "USD"
) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(Number(price));
};

export const sortLabelOptions: {
  label: string;
  value: string;
}[] = [
  {
    label: "Name: (A-Z)",
    value: "asc",
  },
  {
    label: "Name: (Z-A)",
    value: "desc",
  },
  {
    label: "Price(High-Low)",
    value: "price-asc",
  },
  {
    label: "Price(Low-High)",
    value: "price-desc",
  },
];
