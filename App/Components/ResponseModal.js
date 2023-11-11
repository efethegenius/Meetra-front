import { View } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Modal,
  Text,
  VStack,
  FormControl,
  Input,
  Center,
} from "native-base";
import Mci from "react-native-vector-icons/MaterialCommunityIcons";

import Octicons from "react-native-vector-icons/Octicons";

const ResponseModal = ({
  openResponse,
  setOpenResponse,
  setOpenRequest,
  title,
  type,
}) => {
  return (
    <Center>
      <Modal isOpen={openResponse} onClose={() => setOpenResponse(false)}>
        <Modal.Content maxWidth="400px" p={7}>
          <VStack space={5} alignItems={"center"}>
            {type === "driver" ? (
              <Mci name="checkbox-marked" size={50} color="#4DB299" />
            ) : (
              <Octicons name="thumbsup" size={50} color="#4DB299" />
            )}

            <Text textAlign="center" fontFamily="Raleway_700Bold" fontSize={17}>
              {title}
            </Text>
            <Text
              textAlign="center"
              fontFamily="Raleway_500Medium"
              fontSize={16}
              mb={2}
            >
              Kindly wait for a {type} to reach out to you and enjoy the
              carpool!
            </Text>

            <Button
              backgroundColor="#4DB299"
              onPress={() => {
                setOpenResponse(false);
                setOpenRequest(false);
              }}
            >
              Back Home
            </Button>
          </VStack>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ResponseModal;
