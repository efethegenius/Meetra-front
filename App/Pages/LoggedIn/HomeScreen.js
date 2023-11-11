import {
  Box,
  Text,
  HStack,
  Button,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  ScrollView,
  VStack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  Pressable,
  Modal,
} from "native-base";
import React, { useEffect, useRef, useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Mci from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import RequestRide from "../../Components/RequestRide";
import PostRide from "../../Components/PostRide";
import ResponseModal from "../../Components/ResponseModal";
import { getPassengers, getRides } from "../../../services";
import { useQuery } from "react-query";

let deviceWidth = Dimensions.get("window").width;

export const HomeScreen = () => {
  const [activeView, setActiveView] = useState("Passengers");
  const scrollViewRef = useRef(null);
  const [placement, setPlacement] = useState(undefined);
  const [openRequest, setOpenRequest] = useState(false);
  const [openResponse, setOpenResponse] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [rides, setRides] = useState([]);
  const [requests, setRequests] = useState([]);

  const openModal = (placement) => {
    setPlacement(placement);
    activeView === "Drivers" ? setOpenPost(true) : setOpenRequest(true);
  };

  const navigation = useNavigation();

  useEffect(() => {
    // getRides().then((res) => {
    //   if (res.status === "success") {
    //     setRides(res.data);
    //     console.log(res);
    //   }
    // });
    // getPassengers().then((res) => {
    //   if (res.status === "success") {
    //     setRequests(res.data);
    //     console.log(res);
    //   }
    // });
  }, []);

  const { data: ridesData, isFetching: isRideFetching } = useQuery(
    "rides",
    () => getRides()
  );

  const { data: requestData, isFetching: isRequestFetching } = useQuery(
    "requests",
    () => getPassengers()
  );

  console.log(ridesData);

  return (
    <>
      <Box pt="80px" pl="17px" pr="17px" flex={1} bg="#f6f6f6">
        <HStack justifyContent="space-between" w="100%" alignItems="center">
          <Ionic name="ios-menu-outline" size={30} />
          <Button
            bg="#1B3E36"
            pt="6px"
            pb="6px"
            pl="8px"
            pr="8px"
            onPress={() => openModal("bottom")}
          >
            <Text color="white" fontFamily="Raleway_500Medium" fontSize="xs">
              {activeView === "Drivers"
                ? "+ Post a ride alert"
                : "+ Request a ride"}
            </Text>
          </Button>
        </HStack>

        <HStack
          justifyContent="space-between"
          w="100%"
          alignItems="center"
          pl={50}
          pr={60}
          mt={7}
        >
          <VStack space={2}>
            <Text
              fontFamily={
                activeView === "Passengers"
                  ? "Raleway_700Bold"
                  : "Raleway_500Medium"
              }
              onPress={() => {
                scrollViewRef.current.scrollTo({ x: 0 });
              }}
            >
              Passengers
            </Text>
            {activeView === "Passengers" && (
              <Box
                w="100%"
                h="5px"
                bg="#4DB299"
                borderRadius={10}
                position="absolute"
                bottom="0"
                left="0"
              />
            )}
          </VStack>
          <VStack space={2}>
            <Text
              fontFamily={
                activeView === "Drivers"
                  ? "Raleway_700Bold"
                  : "Raleway_500Medium"
              }
              onPress={() => {
                scrollViewRef.current.scrollTo({ x: deviceWidth - 34 });
              }}
            >
              Drivers
            </Text>
            {activeView === "Drivers" && (
              <Box
                w="100%"
                h="5px"
                bg="#4DB299"
                borderRadius={10}
                position="absolute"
                bottom="0"
                right="0"
              />
            )}
          </VStack>
        </HStack>

        <Box
          w="100%"
          bg="#4DB299"
          pl="30px"
          pr="30px"
          pt="20px"
          pb="20px"
          mt={6}
          borderRadius={10}
        >
          <Text color="#fff" fontFamily="Raleway_700Bold" fontSize="md">
            Quick Search
          </Text>

          <FormControl mt={3}>
            <Stack space={3}>
              <Text
                color="#fff"
                fontFamily="Raleway_500Medium"
                fontSize="sm"
                //   marginTop={1}
                //   marginBottom={1}
              >
                Search for any location and see drivers going your way
              </Text>

              <Box bg="#fff" w="100%" borderRadius={4} h="50px">
                {/* <Input
                  InputLeftElement={
                    <Icon
                      as={
                        <Ionic
                          name="ios-search-outline"
                          size={25}
                          color="gray"
                        />
                      }
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  // placeholder="Name"
                  type="text"
                  placeholder="Search for any location or rides..."
                  h="100%"
                  fontSize="sm"
                  bg="#fff"
                  fontFamily="Raleway_500Medium"
                  w="100%"
                  borderColor="#fff"
                  onPressIn={() => {
                    activeView === "Passengers"
                      ? navigation.navigate("passengerRideSearch")
                      : navigation.navigate("driverRideSearch");
                  }}
                /> */}

                <Pressable
                  w={"100%"}
                  h={"100%"}
                  bg={"#fff"}
                  pl={15}
                  justifyContent={"center"}
                  borderRadius={4}
                  onPress={() => {
                    activeView === "Passengers"
                      ? navigation.navigate("passengerRideSearch")
                      : navigation.navigate("driverRideSearch");
                  }}
                  // justifyContent={"center"}
                >
                  <Text color={"#ABB6B4"}>
                    Search for any location or rides...
                  </Text>
                </Pressable>
              </Box>
            </Stack>
          </FormControl>
        </Box>

        <Box flex={1} mt={3}>
          <Text fontFamily="Raleway_600SemiBold" fontSize="md" mb={3} mt={3}>
            {activeView === "Drivers"
              ? "Passengers Near you"
              : "Drivers near you"}
          </Text>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            onScroll={(event) => {
              const scrollX = event.nativeEvent.contentOffset.x;
              const viewWidth = Dimensions.get("window").width - 34;
              const activeIndex = Math.floor(
                (scrollX + viewWidth / 2) / viewWidth
              );
              setActiveView(activeIndex === 0 ? "Passengers" : "Drivers");
            }}
            scrollEventThrottle={200}
          >
            <ScrollView
              style={styles.firstView}
              contentContainerStyle={{ alignItems: "center" }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={200}
            >
              {!isRideFetching &&
                ridesData?.data?.map((ride) => {
                  return (
                    <>
                      <Pressable
                        bg="#fff"
                        w="100%"
                        justifyContent="space-between"
                        flexDirection="row"
                        pt={4}
                        pb={4}
                        pl={5}
                        pr={5}
                        borderRadius={7}
                        key={ride.id}
                        mb={4}
                        onPress={() => {
                          navigation.navigate("bookRide");
                        }}
                      >
                        <Box
                          w="60px"
                          h="60px"
                          bg="#EDF7F5"
                          borderRadius="50px"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Mci name="car-hatchback" size={40} color="#4DB299" />
                        </Box>
                        <HStack
                          alignItems="center"
                          justifyContent="center"
                          space={4}
                        >
                          <Box style={{ alignItems: "center" }}>
                            <Text fontFamily="Raleway_700Bold">
                              {ride.pickup} to {ride.dropoff}
                            </Text>
                            <HStack space={2}>
                              <Text
                                fontFamily="Raleway_400Regular"
                                color="#818181"
                              >
                                {ride.time}
                              </Text>
                              <Text
                                fontFamily="Raleway_400Regular"
                                color="#818181"
                              >
                                {ride.date}
                              </Text>
                            </HStack>
                          </Box>
                        </HStack>
                        <Text
                          color="#4DB299"
                          fontFamily="Raleway_600SemiBold"
                          mt={2}
                          fontSize={15}
                          alignItems="center"
                          justifyContent="center"
                          display="flex"
                        >
                          N{ride.price}
                        </Text>
                      </Pressable>
                    </>
                  );
                })}
            </ScrollView>

            <ScrollView
              style={styles.secondView}
              contentContainerStyle={{ alignItems: "center" }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={200}
            >
              {!isRequestFetching &&
                requestData?.data?.map((request) => {
                  return (
                    <HStack
                      bg="#fff"
                      w="100%"
                      justifyContent="space-between"
                      pt={4}
                      pb={4}
                      pl={5}
                      pr={5}
                      borderRadius={7}
                      mb={4}
                      key={request.id}
                    >
                      <HStack
                        alignItems="center"
                        justifyContent="center"
                        space={10}
                      >
                        <Box
                          w="60px"
                          h="60px"
                          bg="#EDF7F5"
                          borderRadius="50px"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Ionic
                            name="ios-person-outline"
                            size={25}
                            color="#4DB299"
                          />
                        </Box>
                        <Box alignItems="center">
                          <Text fontFamily="Raleway_700Bold">
                            {request.pickup} to {request.dropoff}
                          </Text>
                          <HStack space={2}>
                            <Text
                              fontFamily="Raleway_400Regular"
                              color="#818181"
                            >
                              {request.time}
                            </Text>
                            <Text
                              fontFamily="Raleway_400Regular"
                              color="#818181"
                            >
                              {request.date}
                            </Text>
                          </HStack>
                        </Box>
                      </HStack>
                    </HStack>
                  );
                })}
            </ScrollView>
          </ScrollView>
        </Box>
        <StatusBar backgroundColor="#f6f6f6" barStyle="light-content" />
      </Box>
      <RequestRide
        openRequest={openRequest}
        setOpenRequest={setOpenRequest}
        placement={placement}
        openResponse={openResponse}
        setOpenResponse={setOpenResponse}
      />
      <PostRide
        openPost={openPost}
        setOpenPost={setOpenPost}
        placement={placement}
        openResponse={openResponse}
        setOpenResponse={setOpenResponse}
      />
    </>
  );
};

const styles = StyleSheet.create({
  firstView: {
    width: deviceWidth - 34,
    // alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  secondView: {
    width: deviceWidth - 34,
    // backgroundColor: "#9C27B0",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
});
