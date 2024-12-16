import { StyleSheet, ActivityIndicator, ViewStyle, DimensionValue } from "react-native";
import { View } from "./ThemedView";
import { useState } from "react";
import { Portal } from "react-native-paper";
import { BlurView } from "expo-blur";
import { Colors, height, width } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";

interface LoaderProps {
  loading: boolean;
}
export const Loader = ({ loading }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Portal>
      {loading && (
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlurView
            intensity={50}
            tint="dark"
            style={{
              height: height,
              width,
              position: "absolute",
            }}
          />
          <ActivityIndicator size="large" color={Colors.dark.blue} />
        </View>
      )}
    </Portal>
  );
};

type SkeletonProps = {
  type: "rect" | "circle" | "text";
  width?: number | DimensionValue;
  height?: number | DimensionValue;
  style?: ViewStyle;
};

export const Skeleton = ({
  type = "rect",
  width = 10,
  height = 10,
  style,
}: SkeletonProps) => {
  return (
    <View style={[{ width, height }, style, styles.skeletonSchema]}>
      <LinearGradient
        colors={["#f0f0f0", "#e0e0e0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonSchema: {
    // backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    width: "200%",
    transform: [{ translateX: -50 }], // Starting shimmer animation offset
  },
});
