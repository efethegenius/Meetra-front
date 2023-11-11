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
} from "native-base";
import { requestRide } from "../../services";
import ResponseModal from "./ResponseModal";

const RequestRide = ({
  openRequest,
  setOpenRequest,
  placement,
  setOpenResponse,
  openResponse,
}) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestInfo, setRequestInfo] = useState({
    passengerId: "1",
    pickup: "",
    dropoff: "",
    numOfPeople: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleRequestChange = (name, value) => {
    setRequestInfo({ ...requestInfo, [name]: value });
  };

  const funcRequestRide = () => {
    setIsRequesting(true);
    requestRide(requestInfo).then((res) => {
      if (res.Status === "Success") {
        setOpenResponse(true);
      }
      setIsRequesting(false);
    });
  };

  return (
    <Modal
      isOpen={openRequest}
      onClose={() => setOpenRequest(false)}
      safeAreaTop={true}
      size="full"
    >
      <Modal.Content {...styles[placement]}>
        <Modal.CloseButton />
        <Modal.Header
          fontFamily="Raleway_500Medium"
          alignItems="center"
          bg="#f6f6f6"
          p="30px"
        >
          Request a ride
        </Modal.Header>
        <Modal.Body>
          <VStack space="15px">
            <Text fontFamily="Raleway_500Medium" textAlign="center">
              This means you will show up in the feed of available drivers that
              has similar routes with you
            </Text>
            <FormControl>
              <FormControl.Label>Pick up location</FormControl.Label>
              <Input
                onChangeText={(value) => handleRequestChange("pickup", value)}
                pt="15px"
                pb="15px"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Drop off location</FormControl.Label>
              <Input
                onChangeText={(value) => handleRequestChange("dropoff", value)}
                pt="15px"
                pb="15px"
              />
            </FormControl>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>How many people?</FormControl.Label>
                <Input
                  onChangeText={(value) =>
                    handleRequestChange("numOfPeople", value)
                  }
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Phone number</FormControl.Label>
                <Input
                  onChangeText={(value) => handleRequestChange("phone", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>Date</FormControl.Label>
                <Input
                  onChangeText={(value) => handleRequestChange("date", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Time</FormControl.Label>
                <Input
                  onChangeText={(value) => handleRequestChange("time", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <Button
              onPress={() => {
                funcRequestRide();
              }}
              w="80px"
              alignSelf="center"
              bg="#4DB299"
            >
              Request
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
      <ResponseModal
        openResponse={openResponse}
        setOpenResponse={setOpenResponse}
        setOpenRequest={setOpenRequest}
        title="Ride Requested"
        type="driver"
      />
    </Modal>
  );
};

export default RequestRide;

const styles = StyleSheet.create({
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
});
