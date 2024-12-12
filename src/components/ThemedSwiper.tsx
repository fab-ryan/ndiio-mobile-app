import React, { ReactNode, useRef, useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { View } from './ThemedView';
import { Colors } from '@/src/constants/Colors';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

type SwiperProps = {
  slidesPerView?: number;
  spaceBetween?: number;
  parentLayout?: { height: number; width: number };
  RenderItem?: any;
  data: object[];
};

type SwipeItemProps = {
  slidesPerView?: number;
  spaceBetween?: number;
  parentLayout?: { height: number; width: number };
  children?: ReactNode;
  Data: [] | object;
};

const SwipeItem = (props: SwipeItemProps) => {
  const { parentLayout, slidesPerView = 1, spaceBetween = 0, children } = props;

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingRight: spaceBetween,
          alignContent: 'center',
          justifyContent: 'center',
          width: parentLayout
            ? parentLayout?.width / slidesPerView - spaceBetween
            : width / slidesPerView,
        }}
      >
        {children}
      </View>
    </>
  );
};

export const Swiper = ({
  data = [],
  slidesPerView = 1,
  spaceBetween,
  parentLayout,
  RenderItem,
}: SwiperProps) => {
  const [activeCards, setActiveCards] = useState([0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = (items: any) => {
    setActiveCards(items.viewableItems.map(({ index }: any) => index));
    if (items.viewableItems.length > 0) {
      const firstVisibleItemIndex = items.viewableItems[0].index;
      setActiveIndex(Math.floor(firstVisibleItemIndex / slidesPerView));
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    {
      onViewableItemsChanged,
      viewabilityConfig: {
        waitForInteraction: false,
        itemVisiblePercentThreshold: 1,
      },
    },
  ]);

  const time: boolean[] = [];

  for (let i = 0; i < data.length; i += slidesPerView) {
    time.push(activeCards.slice(0, slidesPerView).includes(i) ? true : false);
  }

  const totalSlides = Math.ceil(data.length / slidesPerView);

  const EmptyComponent = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Swiper component needs atleast one slide</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        scrollEnabled
        ListEmptyComponent={EmptyComponent}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <SwipeItem
              Data={item}
              spaceBetween={spaceBetween}
              slidesPerView={slidesPerView}
              parentLayout={parentLayout}
            >
              <RenderItem item={item} />
            </SwipeItem>
          );
        }}
      />
      <View style={styles.dotView}>
        <Text
          style={{ color: Colors.dark.white, fontSize: 16, fontWeight: 'bold' }}
        >
          {activeIndex + 1}/{totalSlides}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    backgroundColor: Colors.dark.background,
    padding: 10,
    borderRadius: 20,
    width: 60,
  },
  progress: {
    width: 20,
    padding: 4,
    borderRadius: 14,
    marginLeft: 10,
  },
});
