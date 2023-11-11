import {
  Box,
  HStack,
  Link,
  Pressable,
  Text,
  VStack,
  Stack,
  FormControl,
  Input,
  Icon,
} from "native-base";
import React, { useState } from "react";
import Mci from "react-native-vector-icons/MaterialCommunityIcons";
import Ionic from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { findActiveRequestsByLocation } from "../../services";

export const DriverRideSearchScreen = () => {
  const [search, setSearch] = useState("");
  const [rides, setRides] = useState([]);
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box
        pt="60px"
        bg="#fff"
        w="100%"
        h={"100%"}
        alignItems="center"
        pb="15px"
        pl={6}
        pr={6}
      >
        <FormControl mt={3} mb={6}>
          <HStack
            space={3}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Pressable>
              <Octicons name="arrow-left" size={20} color="#000" />
            </Pressable>
            <Box bg="#fff" borderRadius={4} h="50px" w="80%">
              <Input
                InputLeftElement={
                  <Icon
                    as={
                      <Ionic name="ios-search-outline" size={25} color="gray" />
                    }
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                // placeholder="Name"
                type="text"
                placeholder="Search"
                h="100%"
                fontSize="sm"
                bg="#F6F7F9"
                fontFamily="Raleway_500Medium"
                borderColor="#fff"
                onChangeText={(text) => {
                  setSearch(text);
                  findActiveRequestsByLocation(text).then((res) => {
                    if (res.status === "success") {
                      setRides(res.data);
                      console.log(res);
                    }
                  });
                }}
              />
            </Box>
            <Pressable>
              <Text
                color={"#4DB299"}
                fontFamily="Raleway_600SemiBold"
                fontSize="md"
              >
                Cancel
              </Text>
            </Pressable>
          </HStack>
        </FormControl>

        {rides.length > 0 &&
          search.length > 0 &&
          rides.map((ride) => {
            return (
              <>
                <Pressable
                  bg="#fff"
                  w="100%"
                  justifyContent="space-between"
                  flexDirection="row"
                  pt={3}
                  pb={3}
                  // pl={5}
                  pr={5}
                  pl={5}
                  borderRadius={5}
                  key={ride.id}
                  mb={4}
                  onPress={() => {
                    navigation.navigate("bookRide");
                  }}
                  style={{
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderColor: "#E5E5E5",
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
                    <Ionic
                      name="ios-person-outline"
                      size={25}
                      color="#4DB299"
                    />
                  </Box>
                  <HStack alignItems="center" justifyContent="center" space={4}>
                    <Box style={{ alignItems: "center" }}>
                      <Text fontFamily="Raleway_700Bold">
                        {ride.pickup} to {ride.dropoff}
                      </Text>
                      <HStack space={2}>
                        <Text fontFamily="Raleway_400Regular" color="#818181">
                          {ride.time}
                        </Text>
                        <Text fontFamily="Raleway_400Regular" color="#818181">
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
                  ></Text>
                </Pressable>
              </>
            );
          })}
      </Box>
    </Box>
  );
};
