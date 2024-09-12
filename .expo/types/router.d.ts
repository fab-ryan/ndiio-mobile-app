/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/forgotPassword` | `/(auth)/login` | `/(auth)/register` | `/(auth)/updatePassword` | `/(auth)/verification` | `/(root)` | `/(root)/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/order` | `/(tabs)/profile` | `/(tabs)/wishlist` | `/_sitemap` | `/forgotPassword` | `/login` | `/order` | `/product` | `/profile` | `/register` | `/updatePassword` | `/verification` | `/wishlist`;
      DynamicRoutes: `/product/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/product/[slug]`;
    }
  }
}
