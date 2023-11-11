import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  Animated,
} from "react-native";
import Logo from "../../assets/meetra_logo.svg";
import Car from "../../assets/Car_Flatline.svg";
import { useNavigation } from "@react-navigation/native";
import welcomeSlides from "../welcomeSlides";
import WelcomeItem from "../WelcomeItem";
import { useState, useRef } from "react";
import WelcomePaginator from "../WelcomePaginator";

export default function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <Logo width={45} height={45} fill="#000" />
      <View style={styles.info}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 400,
          }}
        >
          <FlatList
            data={welcomeSlides}
            renderItem={({ item }) => <WelcomeItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
          <WelcomePaginator data={welcomeSlides} scrollX={scrollX} />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <View
              style={{
                backgroundColor: "#4db299",
                width: "85%",
                maxWidth: 400,
                padding: 16,
                marginTop: 20,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <View
              style={{
                width: "85%",
                maxWidth: 400,
                padding: 16,
                marginTop: 20,
                borderRadius: 5,
                borderColor: "#c4c4c4",
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Log In
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf7f5",
    alignItems: "center",
    // justifyContent: 'center',
    width: "100%",
    paddingTop: 80
    // backgroundColor: "yellow",
  },
  info: {
    height: "80%",
    color: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    // backgroundColor: "green",
  },
});
