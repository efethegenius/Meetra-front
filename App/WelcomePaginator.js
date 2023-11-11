import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";
export default function WelcomePaginator({ data, scrollX }) {
  // @refresh reset
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: "auto", marginBottom: 15 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 7,
    // borderRadius: 5,
    backgroundColor: "#4DB299",
    marginHorizontal: 2,
  },
});
