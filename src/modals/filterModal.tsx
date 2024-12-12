import { Modal, View, Text, Icon, Button } from "../components";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { formatPrice, IconsEnum, sortLabelOptions } from "../utils";
import { useState } from "react";
import { Colors } from "../constants";
import Slider from "@react-native-community/slider";
import { ProductByCategoryResponse } from "../types";
import Checkbox from "expo-checkbox";

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  info: ProductByCategoryResponse | null;
}
interface TabsInterface {
  tab: string;
  index: number;
}
const tabs: TabsInterface[] = [
  { tab: "Filter", index: 0 },
  { tab: "Sorting", index: 1 },
];
export const FilterModal = ({
  isVisible,
  onClose,
  info,
}: ProductModalProps) => {
  const [activeTabs, setTabs] = useState<TabsInterface>(tabs[0]);
  const [filterValues, setFilterValues] = useState<{
    price: number;
    brand: number[];
  }>({
    price: 0,
    brand: [],
  });
  const [sortValue, setSortValue] = useState<{
    label: string;
    value: string;
  }>();
  return (
    <Modal visible={isVisible} onClose={onClose}>
      <View style={styles.container}>
        <View style={styles.cardHeader}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 20 }}>
            Filter & Sorting
          </Text>
          <Pressable onPress={onClose} style={{ paddingRight: 20 }}>
            <Icon name="cross" type={IconsEnum.entypo} size={30} />
          </Pressable>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.tabContainer}>
            {tabs.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setTabs(item);
                }}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  position: "relative",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {item.tab}
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 20,
                    right: 0,
                    height: 2,
                    width: 40,
                    backgroundColor:
                      index === activeTabs.index
                        ? Colors.light.blue
                        : "transparent",
                  }}
                ></View>
              </Pressable>
            ))}
          </View>
          {activeTabs.index === 0 && (
            <FilterComponent
              info={info}
              filterValues={filterValues}
              setFilterValues={setFilterValues}
            />
          )}
          {activeTabs.index === 1 && (
            <SortComponent sortValue={sortValue} setSortValue={setSortValue} />
          )}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button title="Apply">
            <Text style={{ color: "white" }}>Apply</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const FilterComponent = ({
  info,
  filterValues,
  setFilterValues,
}: {
  info: ProductByCategoryResponse | null;
  filterValues: {
    price: number;
    brand: number[];
  };
  setFilterValues: any;
}) => {
  const [valuePrice, setValuePrice] = useState(filterValues.price);
  const [selectBrand, setSelectBrand] = useState<number[]>(filterValues.brand);

  const handleSelectBrand = (id: number) => {
    if (selectBrand.includes(id)) {
      setSelectBrand((prev) => prev.filter((brand) => brand !== id));
      setFilterValues((prev: any) => ({
        ...prev,
        brand: prev.brand.filter((brand: number) => brand !== id),
      }));
    } else {
      setSelectBrand((prev) => [...prev, id]);
      setFilterValues((prev: any) => ({
        ...prev,
        brand: [...prev.brand, id],
      }));
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text>Price Range</Text>
        <Slider
          minimumValue={0}
          maximumValue={info?.maximun_price || 50000}
          value={valuePrice}
          onValueChange={(value) => {
            setValuePrice(value);
            setFilterValues((prev: any) => ({ ...prev, price: value }));
          }}
          minimumTrackTintColor={Colors.light.blue}
          maximumTrackTintColor={Colors.light.light_grey}
          thumbTintColor={Colors.light.blue}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.pricingText}>{formatPrice(valuePrice)}</Text>
        <Text style={styles.pricingText}>
          {formatPrice(info?.maximun_price ?? 50000)}
        </Text>
      </View>
      <Text style={{ paddingHorizontal: 20, marginTop: 20, fontWeight: 800 }}>
        Brands
      </Text>
      <View
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "transparent",
          borderRadius: 10,
          borderTopWidth: 1,
          borderColor: "#e1e1e1",
          marginBottom: 30,
        }}
      >
        <FlatList
          data={info?.brands ?? []}
          renderItem={({ item }) => (
            <Pressable
              style={{
                padding: 20,
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                borderColor: "#e1e1e1",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={handleSelectBrand.bind(null, item.id)}
            >
              <Text>{item?.brandd?.name}</Text>
              <Checkbox
                value={selectBrand.includes(item.id)}
                onValueChange={handleSelectBrand.bind(null, item.id)}
                style={{
                  borderRadius: 5,
                  borderColor: "#e1e1e1",
                }}
                color={Colors.light.blue}
              />
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const SortComponent = ({
  sortValue,
  setSortValue,
}: {
  sortValue?: { label: string; value: string };
  setSortValue: any;
}) => {
  return (
    <View
      style={{
        marginTop: 20,
        padding: 10,
      }}
    >
      {sortLabelOptions?.map((item) => (
        <Pressable
          style={{
            padding: 20,
            backgroundColor: "transparent",
            borderBottomWidth: 1,
            borderColor: "#e1e1e1",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onPress={() => {
            setSortValue(item);
          }}
          key={item.value}
        >
          <Text>{item.label}</Text>
          <Checkbox
            value={sortValue?.value === item.value}
            style={{
              borderRadius: 20,
              borderColor: "#e1e1e1",
            }}
            color={Colors.light.blue}
          />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    height: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  cardBody: {
    marginTop: 20,
    position: "relative",
  },
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
    width: "100%",
    flexDirection: "row",
  },
  pricingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark.blue,
  },
});
