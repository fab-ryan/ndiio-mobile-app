// import {
//   View,
//   Text,
//   SafeAreaView,
//   Loader,
//   ScrollView,
//   Button,
//   Icon,
//   Image,
// } from '@/components';
// import { Colors, width } from '@/constants';
// import { useActions, useCart, useSelector, useThemeColor } from '@/hooks';

// import { useCheckoutCartMutation, useMyCartMutation } from '@/redux';
// import { TopBarWithBackButton } from '@/shared';
// import { useRouter } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { Pressable, StyleSheet } from 'react-native';
// import { AddressInfoView } from '@/context';
// import { getCustomImage, IconsEnum } from '@/utils';
// import { CartProducts } from '@/types';

// interface IAddress {
//   firstName: string;
//   lastName: string;
//   email: string;
//   buildNumber: string;
//   area: string;
//   landmark: string;
//   postCode: string;
//   phone: string;
//   country_id: string;
//   city: string;
//   state: string;
// }

// const tabs: {
//   name: string;
//   id: number;
// }[] = [
//   {
//     id: 1,
//     name: 'Address',
//   },
//   {
//     id: 2,
//     name: 'Payment',
//   },
//   {
//     id: 3,
//     name: 'Place Order',
//   },
// ];
// export default function Address() {
//   const router = useRouter();
//   const [activeTab, setActiveTab] = useState(1);
//   const [doneTabs, setDoneTabs] = useState<number[]>([1]);
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   const [shippingInfo, setShippingInfo] = useState<IAddress>();
//   const { cartItems, getCheckoutPayload } = useCart();
//   const [checkoutPayload, setCheckoutPayload] =
//     useState<CheckoutPayload | null>();
//   const [paymentOptions, setPayoutOptions] = useState<number | null>(1);
//   const [handleCheckout, checkOutState] = useCheckoutCartMutation();

//   useEffect(() => {
//     getCheckoutPayload().then((payload) => setCheckoutPayload(payload));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSubmitPayment = () => {
//     const formData = new FormData();
//     formData.append('firstnameShip', shippingInfo?.firstName as string);
//     formData.append('lastnameShip', shippingInfo?.lastName as string);
//     formData.append('mobileShip', shippingInfo?.phone as string);
//     formData.append('countryShip', shippingInfo?.country_id as string);
//     formData.append('stateShip', shippingInfo?.state as string);
//     formData.append('cityShip', shippingInfo?.city as string);
//     formData.append('email', shippingInfo?.email as string);
//     formData.append('buildingShip', shippingInfo?.buildNumber as string);
//     formData.append('areaShip', shippingInfo?.area as string);
//     formData.append('landmarkShip', shippingInfo?.landmark as string);
//     formData.append('postcodeShip', shippingInfo?.postCode as string);
//     formData.append(
//       'cartValue',
//       JSON.stringify(
//         cartItems.map((item) => {
//           return {
//             ...item,
//             OrignalPrice: item.originalPrice as string,
//             sellingPrice: item.originalPrice as string,
//             originalPrice: undefined,
//             attribute: [],
//           };
//         }),
//       ),
//     );
//     formData.append('quantity', '1');
//     formData.append('currency', '$');
//     formData.append('payment', '0');
//     formData.append(
//       'selectedOption',
//       paymentOptions === 1 ? 'Cash on delivery' : 'card',
//     );
//     formData.append('coupan', checkoutPayload?.coupan as string);
//     formData.append('coupanType', checkoutPayload?.coupanType as string);
//     formData.append('coupanAmt', checkoutPayload?.coupanAmt as string);
//     formData.append('totalShipp', checkoutPayload?.totalShipp as string);
//     formData.append('totalPrice', checkoutPayload?.totalPrice as string);
//     formData.append('currencyValue', '1.0');
//     formData.append("isAuthenticated",String(isAuthenticated));

//     if (checkOutState.isLoading) return;
//     handleCheckout(formData)
//       .unwrap()
//       .then((res) => {
//         console.log(res);
//         setActiveTab(3);
//       })
//       .catch((ee) => {
//         console.log((ee as Error).message);
//       });
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
//       <TopBarWithBackButton
//         title='Address'
//         onPress={() => {
//           router.back();
//         }}
//       />
//       <Loader visible={checkOutState.isLoading} />
//       <View style={styles.container}>
//         <View style={styles.tabContainer}>
//           {tabs.map((tab) => (
//             <Tab
//               key={tab.id}
//               {...tab}
//               active={activeTab === tab.id}
//               setActiveTab={setActiveTab}
//               doneTabs={doneTabs}
//             />
//           ))}
//         </View>
//         <ScrollView>
//           {activeTab === 1 && (
//             <AddressInfoView
//               setShippingInfo={setShippingInfo}
//               shippingInfo={shippingInfo}
//               setActiveTab={setActiveTab}
//               setDoneTabs={(id: number) => {
//                 setDoneTabs((prev) => ({
//                   ...prev,
//                   '1': id,
//                 }));
//               }}
//             />
//           )}
//           {activeTab === 2 && (
//             <PaymentView
//               setPayoutOptions={setPayoutOptions}
//               handlePayment={handleSubmitPayment}
//             />
//           )}
//           {activeTab === 3 && <SuccessView />}
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// }

// const SuccessView = () => {
//   const router = useRouter();
//   const {removeAllCart} =useCart()
//   return (
//     <View
//       style={{
//         borderRadius: 8,
//         shadowColor: Colors['light'].blue,
//         shadowOffset: { width: 1, height: 1 },
//         shadowOpacity: 0.6,
//         shadowRadius: 2,
//         elevation: 3,
//         flexDirection: 'column',
//         backgroundColor: 'white',
//         margin: 'auto',
//         padding: 10,
//         width: '80%',
//         alignItems: 'center',
//       }}
//     >
//       <Icon
//         name='check-circle'
//         size={50}
//         color={Colors.dark.blue}
//       />

//       <Text
//         style={{
//           fontSize: 25,
//           fontWeight: 'bold',
//           textAlign: 'center',
//           marginTop: 10,
//         }}
//       >
//         Thank You For Your Order!
//       </Text>
//       <Button
//         onPress={() => {
//           removeAllCart()
//           router.push('/(tabs)/');
//         }}
//         style={{
//           marginTop: 20,
//           backgroundColor: 'transparent',
//           borderColor: Colors.dark.blue,
//           borderWidth: 0.2,
//         }}
//       >
//         <Text style={{ color: Colors.dark.blue }}>Continue Shopping</Text>
//       </Button>
//     </View>
//   );
// };

// const tabsButtons: {
//   title: string;
//   id: number;
//   icon: {
//     name: string;
//     type: IconsEnum;
//   };
// }[] = [
//   {
//     id: 1,
//     title: 'Pay with Cash',
//     icon: {
//       name: 'money',
//       type: IconsEnum.fa,
//     },
//   },
//   {
//     id: 2,
//     title: 'Pay with Card',
//     icon: {
//       name: 'creditcard',
//       type: IconsEnum.antdesign,
//     },
//   },
// ];
// interface CheckoutPayload {
//   coupan: string | null | undefined;
//   coupanAmt: string | null | undefined;
//   totalShipp: string | null;
//   totalPrice: string;
//   totalOPrice: string | null;
//   coupanType: string | null | undefined;
// }
// interface PaymentProps {
//   setPayoutOptions: (value: number | null) => void;
//   handlePayment: () => void;
// }
// const PaymentView = ({ setPayoutOptions, handlePayment }: PaymentProps) => {
//   const [active, setActive] = useState(1);
//   const { cartItems, loadCart, getCheckoutPayload } = useCart();
//   const [myCart, myCartStates] = useMyCartMutation();
//   const { setCartProducts } = useActions();
//   const { carts } = useSelector((state) => state.cart);
//   const [checkoutDetails, setCheckoutDetails] =
//     useState<CheckoutPayload | null>();

//   const postMyCart = () => {
//     if (myCartStates.isLoading) return;
//     const formData = new FormData();

//     formData.append('isProductAdd', 'false');
//     formData.append('isUser', 'false');
//     formData.append('isCart', 'true');
//     formData.append(
//       'cartValue',
//       JSON.stringify(
//         cartItems.map((item) => {
//           return {
//             ...item,
//             OrignalPrice: item.originalPrice as string,
//             sellingPrice: item.originalPrice as string,
//             originalPrice: undefined,
//             attribute: [],
//           };
//         }),
//       ),
//     );
//     getCheckoutPayload().then((value) => {
//       setCheckoutDetails(value);
//     });

//     myCart(formData)
//       .unwrap()
//       .then((res) => {
//         setCartProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     postMyCart();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [loadCart]);

//   return (
//     <View
//       style={{
//         paddingVertical: 20,
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: 600,
//           marginTop: 10,
//           marginBottom: 20,
//           paddingLeft: 20,
//           color: useThemeColor({}, 'light_grey'),
//         }}
//       >
//         Select Payment Options
//       </Text>

//       <View
//         style={{
//           justifyContent: 'space-between',
//           display: 'flex',
//           flexDirection: 'row',
//           paddingLeft: 20,
//           paddingRight: 20,
//           gap: 10,
//         }}
//       >
//         {tabsButtons.map((tab) => (
//           <Button
//             style={{
//               width: '50%',
//               backgroundColor:
//                 active === tab.id ? Colors.dark.blue : 'transparent',
//               borderColor: Colors.dark.blue,
//               borderWidth: 0.2,
//             }}
//             key={tab.id}
//             onPress={() => {
//               setActive(tab.id);
//               setPayoutOptions(tab.id);
//             }}
//           >
//             <View
//               style={{
//                 backgroundColor: 'transparent',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',

//                 display: 'flex',
//                 flexDirection: 'row',
//               }}
//             >
//               <Icon
//                 name={tab.icon.name as any}
//                 type={tab.icon.type}
//                 size={24}
//                 color={
//                   active === tab.id ? Colors.dark.secondary : Colors.dark.blue
//                 }
//               />
//               <Text
//                 style={{
//                   marginLeft: 10,
//                   fontWeight: 700,
//                   color:
//                     active === tab.id
//                       ? Colors.dark.secondary
//                       : Colors.dark.blue,
//                 }}
//               >
//                 {tab.title}
//               </Text>
//             </View>
//           </Button>
//         ))}
//       </View>
//       <Text
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 30,
//           color: useThemeColor({}, 'light_grey'),
//           fontSize: 16,
//           fontWeight: 500,
//         }}
//       >
//         Your Items
//       </Text>
//       <View
//         style={{
//           paddingHorizontal: 30,
//           overflow: 'hidden',
//         }}
//       >
//         {carts &&
//           carts?.map((cart, index) => (
//             <CartCard
//               cartItems={cart}
//               key={index}
//             />
//           ))}
//       </View>
//       <View
//         style={{
//           paddingHorizontal: 30,
//           overflow: 'hidden',
//         }}
//       >
//         <View
//           style={[
//             styles.cardCart,
//             {
//               padding: 10,
//               flexDirection: 'column',
//             },
//           ]}
//         >
//           <Text
//             style={{
//               marginTop: 10,
//               color: useThemeColor({}, 'light_grey'),
//             }}
//           >
//             ORDER SUMMARY
//           </Text>

//           <View
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               marginTop: 10,
//             }}
//           >
//             <Text>Subtotal Amount</Text>
//             <Text
//               style={{
//                 fontWeight: 700,
//               }}
//             >
//               {Intl.NumberFormat('en-US', {
//                 style: 'currency',
//                 currency: 'USD',
//               }).format(
//                 Number((checkoutDetails?.totalOPrice as never as string) ?? 0),
//               )}
//             </Text>
//           </View>
//           <View
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               marginTop: 10,
//             }}
//           >
//             <Text>Shipping Amount</Text>
//             <Text
//               style={{
//                 fontWeight: 700,
//               }}
//             >
//               {Intl.NumberFormat('en-US', {
//                 style: 'currency',
//                 currency: 'USD',
//               }).format(
//                 Number((checkoutDetails?.totalShipp as never as string) ?? 0),
//               )}
//             </Text>
//           </View>
//           <View
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//               marginTop: 10,
//               marginBottom: 20,
//             }}
//           >
//             <View>
//               <Text style={{ fontWeight: 900 }}>Total Amount:</Text>
//               <Text
//                 style={{
//                   fontSize: 13,
//                   color: 'gray',
//                 }}
//               >
//                 (Inclusive of VAT)
//               </Text>
//             </View>
//             <Text
//               style={{
//                 fontWeight: 700,
//               }}
//             >
//               {Intl.NumberFormat('en-US', {
//                 style: 'currency',
//                 currency: 'USD',
//               }).format(
//                 Number((checkoutDetails?.totalPrice as never as string) ?? 0),
//               )}
//             </Text>
//           </View>
//         </View>

//         <Button
//           style={{
//             marginTop: 10,
//           }}
//           onPress={handlePayment}
//         >
//           Save and Continue
//         </Button>
//       </View>
//     </View>
//   );
// };
// interface CartProps {
//   cartItems: CartProducts;
// }

// const CartCard = ({ cartItems }: CartProps) => {
//   const formatPrice = (price: string): string => {
//     const formated = Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(Number(price));
//     return formated;
//   };
//   return (
//     <View style={styles.cardCart}>
//       <View style={styles.image}>
//         <Image
//           source={{
//             uri: getCustomImage(
//               cartItems.product[0]?.product_single_img
//                 ?.product_image as unknown as string,
//             ),
//           }}
//           style={{
//             width: '100%',
//             height: '100%',
//           }}
//           contentFit='cover'
//         />
//       </View>
//       <View
//         style={{
//           paddingHorizontal: 20,
//           paddingTop: 20,
//           justifyContent: 'space-between',
//         }}
//       >
//         <Text style={styles.cartProductTitle}>
//           {cartItems?.product[0]?.title?.length > 15
//             ? `${cartItems.product[0].title?.slice(0, 15).trim()}...`
//             : cartItems.product[0].title}
//         </Text>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignContent: 'center',
//             width: '60%',
//             marginBottom: 10,
//           }}
//         >
//           <Text>{formatPrice(cartItems?.OrignalPrice?.toString() ?? 0)}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const Tab = ({
//   name,
//   id,
//   active,
//   setActiveTab,
//   doneTabs,
// }: {
//   name: string;
//   id: number;
//   active: boolean;
//   doneTabs: number[];
//   setActiveTab: (id: number) => void;
// }) => {
//   return (
//     <Pressable
//       onPress={() => {
//         setActiveTab(id);
//       }}
//       style={{
//         position: 'relative',
//       }}
//     >
//       <View
//         style={{
//           borderRadius: 100,
//           height: 40,
//           width: 40,
//           backgroundColor: active ? Colors.dark.tint : Colors.dark.dark_grey,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 16,
//             fontWeight: active ? 'bold' : 'normal',
//             color: active ? Colors.dark.blue : Colors.dark.white,
//           }}
//         >
//           {id}
//         </Text>
//       </View>
//       <Text
//         style={{
//           fontSize: 12,
//           marginTop: 5,
//           color: Colors.dark.white,
//         }}
//       >
//         {name}
//       </Text>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // marginHorizontal: 20,
//     marginTop: 10,
//     flex: 1,
//   },
//   activeTab: {
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.dark.primary,
//     position: 'absolute',
//     top: 20,
//     left: 0,
//     right: 0,
//     width: width,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 0,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     position: 'relative',
//     backgroundColor: Colors.dark.blue,
//   },
//   cardCart: {
//     borderRadius: 8,
//     shadowColor: Colors['light'].blue,
//     shadowOffset: { width: 1, height: 1 },
//     shadowOpacity: 0.6,
//     shadowRadius: 2,
//     elevation: 3,
//     marginBottom: 1,
//     marginTop: 10,
//     flexDirection: 'row',
//     backgroundColor: 'white',
//   },
//   image: {
//     width: 120,
//     height: 120,
//     overflow: 'hidden',
//     backgroundColor: 'transparent',
//   },
//   cartProductTitle: {
//     fontWeight: 700,
//     fontSize: 18,
//   },
//   cartProductDescription: {
//     color: 'gray',
//     marginTop: 10,
//     fontSize: 12,
//   },
// });
