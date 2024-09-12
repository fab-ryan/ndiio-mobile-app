import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Swiper,
  Button,
  Icon,
} from '@/src/components';
import { Colors } from '@/src/constants';
import { TopBarWithBackButton } from '@/src/shared';
import { productDetailData } from '@/src/utils';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function ProductDetailsScreen() {
  const router = useRouter();
  const [parentLayout, setParentLayout] = useState<{
    height: number;
    width: number;
  }>();

  const onLayout = (event: any) => {
    const { height, width } = event.nativeEvent.layout;
    setParentLayout({ height, width });
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
            data={productDetailData.images}
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
                  source={item?.image}
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
            {productDetailData.title}
          </Text>
          <Text
            style={{ fontSize: 18, color: Colors.dark.red, marginBottom: 10 }}
          >
            {productDetailData.price}
          </Text>
        </View>
        <View style={styles.productDetail}>
          <Text style={{ fontSize: 15, fontWeight: 600 }}>
            Product Description
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.dark.light_grey,
              marginBottom: 10,
              marginTop: 10,
              textAlign: 'left',
            }}
          >
            {productDetailData.description}
          </Text>

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
              
            </View>
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
});
