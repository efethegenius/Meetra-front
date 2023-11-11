import { Box, HStack, Link, Pressable, Text, VStack } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const BookRideScreen = () => {
  const navigation = useNavigation();
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box pt="60px" bg="#fff" w="100%" alignItems="center" pb="15px">
        <Box
          bg="#f6f6f6"
          pt="10px"
          pb="10px"
          pl="25px"
          pr="25px"
          borderRadius="8px"
        >
          <Text fontFamily="Raleway_700Bold">Ride Details</Text>
        </Box>
      </Box>
      <Box
        mt="10px"
        w="100%"
        alignItems="center"
        justifyContent="center"
        bg="#fff"
        pt="5"
        pb="5"
      >
        <VStack alignItems="center" space="4px">
          <Box
            w="80px"
            h="80px"
            bg="amber.100"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
          >
            IMG
          </Box>
          <Text fontFamily="Raleway_700Bold" mt="10px">
            Cathy Sanni
          </Text>
          <Text fontFamily="Raleway_500Medium" color="#818181">
            5.0
          </Text>
          <Text
            onPress={() => {
              navigation.navigate("viewProfile");
            }}
            fontFamily="Raleway_700Bold"
            color="#4DB299"
          >
            View full profile
          </Text>
        </VStack>
      </Box>

      <VStack
        mt="10px"
        bg="#fff"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="20px"
        space="40px"
      >
        <HStack w="100%" justifyContent="space-between">
          <VStack space="8px">
            <Text fontFamily="Raleway_400Regular" fontSize="sm" color="#818181">
              From
            </Text>
            <Text fontFamily="Raleway_700Bold">Somolu</Text>
          </VStack>
          <VStack space="8px">
            <Text
              textAlign="right"
              fontFamily="Raleway_400Regular"
              fontSize="sm"
              color="#818181"
            >
              To
            </Text>
            <Text fontFamily="Raleway_700Bold" textAlign="right">
              Lekki
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%" justifyContent="space-between">
          <VStack space="8px">
            <Text fontFamily="Raleway_400Regular" fontSize="sm" color="#818181">
              Car Model
            </Text>
            <Text fontFamily="Raleway_700Bold">Toyota Camry</Text>
          </VStack>
          <VStack space="8px">
            <Text
              textAlign="right"
              fontFamily="Raleway_400Regular"
              fontSize="sm"
              color="#818181"
            >
              Plate number
            </Text>
            <Text textAlign="right" fontFamily="Raleway_700Bold">
              GGE 177 AA
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%" justifyContent="space-between">
          <VStack space="8px">
            <Text fontFamily="Raleway_400Regular" fontSize="sm" color="#818181">
              Time
            </Text>
            <Text fontFamily="Raleway_700Bold">4:00pm</Text>
          </VStack>
          <VStack space="8px">
            <Text
              textAlign="right"
              fontFamily="Raleway_400Regular"
              fontSize="sm"
              color="#818181"
            >
              Date
            </Text>
            <Text textAlign="right" fontFamily="Raleway_700Bold">
              16-04-23
            </Text>
          </VStack>
        </HStack>
        <HStack w="100%" justifyContent="space-between">
          <VStack space="8px">
            <Text fontFamily="Raleway_400Regular" fontSize="sm" color="#818181">
              Pickup Location
            </Text>
            <Text fontFamily="Raleway_700Bold">Folaagoro junction</Text>
          </VStack>
          <VStack space="8px">
            <Text
              textAlign="right"
              fontFamily="Raleway_400Regular"
              fontSize="sm"
              color="#818181"
            >
              Space
            </Text>
            <Text textAlign="right" fontFamily="Raleway_700Bold">
              1 empty seat
            </Text>
          </VStack>
        </HStack>
        <Box bg="#f6f6f6" p="4" borderRadius="10px">
          <Text fontFamily="Raleway_700Bold" fontSize="lg">
            N500
          </Text>
        </Box>
      </VStack>
      <Pressable
        bg="#4DB299"
        w="100%"
        alignItems="center"
        justifyContent="center"
        pt="20px"
        pb="20px"
      >
        <Text color="#fff" fontFamily="Raleway_700Bold" fontSize="lg">
          Book ride
        </Text>
      </Pressable>
    </Box>
  );
};
