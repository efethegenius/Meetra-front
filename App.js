import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import Login from "./App/Pages/Login";
import SignUp from "./App/Pages/SignUp";
import Welcome from "./App/Pages/Welcome";
import FP1 from "./App/Pages/ForgotPassword/FP1";
import FP2 from "./App/Pages/ForgotPassword/FP2";
import FP3 from "./App/Pages/ForgotPassword/FP3";
import { NativeBaseProvider } from "native-base";
import Dashboard from "./App/Pages/Dashboard";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionic from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "./App/Pages/LoggedIn/HomeScreen";
import { ProfileScreen } from "./App/Pages/LoggedIn/ProfileScreen";
import DiscoverScreen from "./App/Pages/LoggedIn/DiscoverScreen";
import ChatScreen from "./App/Pages/LoggedIn/ChatScreen";
import { useTheme } from "react-native-paper";
import { BookRideScreen } from "./App/Pages/BookRideScreen";
import { FullProfileScreen } from "./App/Pages/FullProfileScreen";
import { DriverRideSearchScreen } from "./App/Pages/DriverRideSearchScreen";
import { PassengerRideSearchScreen } from "./App/Pages/PassengerRideSearchScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  const queryClient = new QueryClient();

  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Discover") {
              iconName = focused ? "time" : "time-outline";
            } else if (route.name === "Chat") {
              iconName = focused
                ? "ios-chatbubble-ellipses"
                : "ios-chatbubble-ellipses-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }
            return (
              <View
                style={{
                  width: 110,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: route.name === "Profile" ? 30 : 0,
                  borderTopLeftRadius: route.name === "Home" ? 30 : 0,
                  borderBottomRightRadius: route.name === "Profile" ? 30 : 0,
                  borderBottomLeftRadius: route.name === "Home" ? 30 : 0,
                  backgroundColor: "#F6F6F6",
                  marginRight: route.name === "Profile" ? 40 : 0,
                  marginLeft: route.name === "Home" ? 40 : 0,
                }}
              >
                <Ionic
                  name={iconName}
                  size={25}
                  color={focused ? "#000" : "#919191"}
                  style={
                    {
                      // textAlignVertical: "center",
                      // textAlign: "center",
                      // alignSelf: "center",
                      // marginTop:30,
                      // marginBottom:30
                    }
                  }
                />
              </View>
            );
          },
          tabBarLabel: false,
        })}
        barStyle={{
          backgroundColor: "#fff",
          // marginBottom: 30,
          // width: "90%",
          // alignSelf: "center",
          // borderRadius: 72,
          // position: "absolute",
          overflow: "hidden",
          height: 100,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  function StackNavigator() {
    const navigation = useNavigation();
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => (
            <Icon.Button
              name="keyboard-backspace"
              backgroundColor="#edf7f5"
              color="#000"
              size={25}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerStyle: { backgroundColor: "#edf7f5" },
            title: "",
            headerShown: null,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerStyle: { backgroundColor: "#edf7f5" },
            title: "",
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerStyle: { backgroundColor: "#edf7f5" }, title: "" }}
        />
        <Stack.Screen
          name="fp1"
          component={FP1}
          options={{ headerStyle: { backgroundColor: "#edf7f5" }, title: "" }}
        />
        <Stack.Screen
          name="fp2"
          component={FP2}
          options={{ headerStyle: { backgroundColor: "#edf7f5" }, title: "" }}
        />
        <Stack.Screen
          name="fp3"
          component={FP3}
          options={{ headerStyle: { backgroundColor: "#edf7f5" }, title: "" }}
        />
        <Stack.Screen
          name="dashboard"
          component={TabNavigator}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#edf7f5" },
            title: "",
          }}
        />
        <Stack.Screen
          name="bookRide"
          component={BookRideScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            title: "Ride Details",
          }}
        />
        <Stack.Screen
          name="viewProfile"
          component={FullProfileScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            title: "Full Profile",
          }}
        />
        <Stack.Screen
          name="driverRideSearch"
          component={DriverRideSearchScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            title: "Driver Ride Search",
          }}
        />
        <Stack.Screen
          name="passengerRideSearch"
          component={PassengerRideSearchScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            title: "Passenger Ride Search",
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider>
          <View style={styles.container}>
            <StackNavigator />
            <StatusBar backgroundColor="#edf7f5" barStyle="light-content" />
          </View>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 80,
    backgroundColor: "#edf7f5",
  },
});
