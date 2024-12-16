/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/forgotPassword` | `/forgotPassword`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/updatePassword` | `/updatePassword`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/verification` | `/verification`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/order` | `/order`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownInputParams; } | { pathname: `/checkout/address`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/splash`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/category/[slug]`, params: Router.UnknownInputParams & { slug: string | number; } } | { pathname: `/product/[slug]`, params: Router.UnknownInputParams & { slug: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/forgotPassword` | `/forgotPassword`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/updatePassword` | `/updatePassword`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/verification` | `/verification`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/order` | `/order`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownOutputParams; } | { pathname: `/checkout/address`; params?: Router.UnknownOutputParams; } | { pathname: `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `/splash`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `/category/[slug]`, params: Router.UnknownOutputParams & { slug: string; } } | { pathname: `/product/[slug]`, params: Router.UnknownOutputParams & { slug: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/forgotPassword${`?${string}` | `#${string}` | ''}` | `/forgotPassword${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/login${`?${string}` | `#${string}` | ''}` | `/login${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/register${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/updatePassword${`?${string}` | `#${string}` | ''}` | `/updatePassword${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/verification${`?${string}` | `#${string}` | ''}` | `/verification${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/cart${`?${string}` | `#${string}` | ''}` | `/cart${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/order${`?${string}` | `#${string}` | ''}` | `/order${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/wishlist${`?${string}` | `#${string}` | ''}` | `/wishlist${`?${string}` | `#${string}` | ''}` | `/checkout/address${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `/splash${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/forgotPassword` | `/forgotPassword`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/login` | `/login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/register` | `/register`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/updatePassword` | `/updatePassword`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/verification` | `/verification`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/cart` | `/cart`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/order` | `/order`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wishlist` | `/wishlist`; params?: Router.UnknownInputParams; } | { pathname: `/checkout/address`; params?: Router.UnknownInputParams; } | { pathname: `/profile`; params?: Router.UnknownInputParams; } | { pathname: `/splash`; params?: Router.UnknownInputParams; } | `/+not-found` | `/category/${Router.SingleRoutePart<T>}` | `/product/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/category/[slug]`, params: Router.UnknownInputParams & { slug: string | number; } } | { pathname: `/product/[slug]`, params: Router.UnknownInputParams & { slug: string | number; } };
    }
  }
}
