import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Swiper,
  Button,
  Icon,
  Webview,
} from '@/src/components';
import { Colors } from '@/src/constants';
import { useGetProductDetailMutation } from '@/src/redux';
import { TopBarWithBackButton } from '@/src/shared';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ResponseProductDetails } from '@/types';
import { imageBaseUrl } from '@/src/utils';

export default function ProductDetailsScreen() {
  const [productDetailData, setProductDetailData] =
    useState<ResponseProductDetails | null>();

  const { slug } = useLocalSearchParams<{ slug: string }>();
  const [getProductDetails] = useGetProductDetailMutation();
  const router = useRouter();
  const [parentLayout, setParentLayout] = useState<{
    height: number;
    width: number;
  }>();

  const onLayout = (event: any) => {
    const { height, width } = event.nativeEvent.layout;
    setParentLayout({ height, width });
  };
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductDetail = () => {
    const body = new FormData();
    body.append('slug', slug);
    getProductDetails(body)
      .unwrap()
      .then((res) => {
        setProductDetailData(res);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TopBarWithBackButton
        title='Detail Product'
        onPress={() => {
          router.back();
        }}
      />
      <ScrollView style={styles.container}>
        <View
          onLayout={onLayout}
          style={styles.swiperContainer}
        >
          <Swiper
            data={productDetailData?.data[0]?.product_img || []}
            slidesPerView={1}
            parentLayout={parentLayout}
            spaceBetween={0}
            RenderItem={({ item }: any) => (
              <View
                style={{
                  width: '100%',
                  height: 300,
                }}
              >
                <Image
                  source={imageBaseUrl(item?.product_image)}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  contentFit='contain'
                />
              </View>
            )}
          />
        </View>
        <View style={styles.productDetail}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            {productDetailData?.data[0]?.title}
          </Text>
          <Text
            style={{ fontSize: 18, color: Colors.dark.red, marginBottom: 10 }}
          >
            {formatPrice(productDetailData?.data[0]?.selling_price)}
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productDetailData?.product_categories || []}
            renderItem={({ item }) => (
              <Category
                title={item?.name}
                onPress={() => {}}
              />
            )}
            keyExtractor={(item) => item.slug.toString()}
            contentContainerStyle={{
              paddingVertical: 10,
            }}
          />
        </View>
        <View style={styles.productDetail}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>
            Product Description
          </Text>
          <Webview
            content={
              productDetailData?.data[0]?.description ||
              '<p>Product Loading</p>'
            }
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'transparent',
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Icon
              name='star'
              color={Colors.dark.red}
              size={20}
            />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>4.5</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 600 }}>
            Related Products
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productDetailData?.related_products || []}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  borderRadius: 15,
                  backgroundColor: 'transparent',
                  padding: 0,
                  marginHorizontal: 5,
                  height: 300,
                }}
                onPress={() => {
                  router.replace(`/product/${item.slug}`);
                }}
              >
                <View
                  style={{
                    shadowOpacity: 0.22,
                    shadowRadius: 3.22,
                    elevation: 1,
                    shadowColor: '#0a7ea4',
                    shadowOffset: {
                      width: 0,
                      height: 0.1,
                    },
                    borderRadius: 15,
                  }}
                >
                  <View style={styles.image}>
                    <Image
                      source={imageBaseUrl(
                        item?.product_single_img?.product_image,
                      )}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                      }}
                      contentFit='contain'
                    />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      padding: 20,
                      backgroundColor: 'transparent',
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.dark.blue,
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: Colors.dark.red,
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}
                    >
                      {formatPrice(item.selling_price)}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.slug.toString()}
            contentContainerStyle={{
              paddingVertical: 10,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.floatButtonContainer}>
        <Button
          title='Add to Wishlist'
          onPress={() => {}}
          style={{
            borderRadius: 10,
            width: '50%',
            backgroundColor: Colors.dark.red,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'transparent',
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
              Added
            </Text>
            <Icon
              name='heart'
              color='#fff'
              size={20}
            />
          </View>
        </Button>
        <Button
          title='Add to Cart'
          onPress={() => {}}
          style={{
            borderRadius: 10,
            width: '50%',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
              paddingVertical: 5,
            }}
          >
            Add to Cart
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
const formatPrice = (price: any) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

const Category = ({ title, onPress }: any) => {
  return (
    <Pressable
      style={{
        borderRadius: 10,
        height: 40,
        backgroundColor: Colors.dark.blue,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: Colors.dark.text,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  swiperContainer: {
    height: 300,
    width: '100%',
    marginBottom: 20,
  },
  productDetail: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    gap: 10,
  },
  floatButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '90%',
    marginVertical: 20,
  },
  image: {
    width: 180,
    height: 180,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});
