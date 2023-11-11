import { Box, HStack, Link, Pressable, Text, VStack } from "native-base";
import React from "react";
import Mci from "react-native-vector-icons/MaterialCommunityIcons";

export const FullProfileScreen = () => {
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
          <Text fontFamily="Raleway_700Bold">Full Profile</Text>
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
        <VStack alignItems="center" space="4px" w="100%">
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
          <Box bg="#f6f6f6" w="90%" p="15px" borderRadius="9px">
            <Text
              fontFamily="Raleway_500Medium"
              textAlign="center"
              color="#818181"
            >
              I am a Software Developer based in Lagos with over 5 years of
              experience in the industry. When i am not working, you can catch
              me playing video games and watching movies.
            </Text>
          </Box>
        </VStack>
      </Box>
      <VStack
        bg="#fff"
        w="100%"
        alignItems="center"
        space="20px"
        mb="10px"
        mt="30px"
        p="20px"
      >
        <HStack w="100%" space="20px">
          <Mci name="phone-outline" size={20} color="#4DB299" />
          <Text>07067896171</Text>
        </HStack>
        <HStack w="100%" space="20px">
          <Mci name="map-marker-outline" size={20} color="#4DB299" />
          <Text>Fola agoro, Somolu, Lagos Nigeria</Text>
        </HStack>
      </VStack>
      <VStack p="20px" space="20px" bg="#fff" w="100%" alignItems="center">
        <HStack w="100%" space="20px">
          <Mci name="account-outline" size={20} color="#4DB299" />
          <Text>Male</Text>
        </HStack>
        <HStack w="100%" space="20px">
          <Mci name="car" size={20} color="#4DB299" />
          <Text>25 Rides completed</Text>
        </HStack>
      </VStack>
    </Box>
  );
};
