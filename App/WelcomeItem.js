import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

export default function WelcomeItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width, alignItems: "center" }}>
      {item.svg}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "70%",
        //   backgroundColor:"blue"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginBottom: 6,
            fontFamily: "Raleway_600SemiBold",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#818181",
            // marginBottom: 20,
            fontFamily: "Raleway_400Regular",
          }}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 0.5,
//     // paddingTop: 80,
//     backgroundColor: "#edf7f5",
//   },
// });
