import { Skeleton, View } from "../components";

export const CategorySkeleton = () => {
  return (
    <View style={{ marginTop: 0 }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Skeleton
          type="rect"
          width={40}
          height={8}
          style={{ marginLeft: 20 }}
        />
        <Skeleton
          type="rect"
          width={40}
          height={8}
          style={{ marginRight: 20 }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            type="rect"
            width={80}
            height={80}
            style={{
              marginLeft: 10,
              borderRadius: 50,
            }}
          />
        ))}
      </View>
    </View>
  );
};
