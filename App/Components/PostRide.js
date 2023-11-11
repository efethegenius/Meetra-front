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
import { postRide } from "../../services";
import ResponseModal from "./ResponseModal";

const PostRide = ({
  openPost,
  setOpenPost,
  placement,
  openResponse,
  setOpenResponse,
}) => {
  const [isRequesting, setIsRequesting] = useState(false);
  const [postInfo, setPostInfo] = useState({
    driverId: "1",
    pickup: "",
    dropoff: "",
    emptySeats: "",
    phone: "",
    date: "",
    time: "",
    makemodel: "",
    plateNumber: "",
    color: "",
    price: "",
  });

  const handlePostChange = (name, value) => {
    setPostInfo({ ...postInfo, [name]: value });
  };

  const funcPostRide = () => {
    setIsRequesting(true);
    postRide(postInfo).then((res) => {
      if (res.Status === "Success") {
        setOpenResponse(true);
      }
      setIsRequesting(false);
    });
  };

  return (
    <Modal
      isOpen={openPost}
      onClose={() => setOpenPost(false)}
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
          Post a ride
        </Modal.Header>
        <Modal.Body>
          <VStack space="15px">
            <Text fontFamily="Raleway_500Medium" textAlign="center">
              This means you will show up in the feed of available passengers
              that have similar routes with you
            </Text>
            <FormControl>
              <FormControl.Label>Pick up location</FormControl.Label>
              <Input
                onChangeText={(value) => handlePostChange("pickup", value)}
                pt="15px"
                pb="15px"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Drop off location</FormControl.Label>
              <Input
                onChangeText={(value) => handlePostChange("dropoff", value)}
                pt="15px"
                pb="15px"
              />
            </FormControl>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>Empty seats</FormControl.Label>
                <Input
                  onChangeText={(value) =>
                    handlePostChange("emptySeats", value)
                  }
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Phone number</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("phone", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>Date</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("date", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Time</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("time", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>Car make and model</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("makemodel", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Plate number</FormControl.Label>
                <Input
                  onChangeText={(value) =>
                    handlePostChange("plateNumber", value)
                  }
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <HStack w="100%" alignItems="center" justifyContent="center">
              <FormControl mt="3" w="50%" mr="10px">
                <FormControl.Label>Color</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("color", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
              <FormControl mt="3" w="50%">
                <FormControl.Label>Price</FormControl.Label>
                <Input
                  onChangeText={(value) => handlePostChange("price", value)}
                  pt="15px"
                  pb="15px"
                />
              </FormControl>
            </HStack>
            <Button
              onPress={() => {
                funcPostRide();
              }}
              w="80px"
              alignSelf="center"
              bg="#4DB299"
            >
              Post
            </Button>
          </VStack>
        </Modal.Body>
      </Modal.Content>
      <ResponseModal
        openResponse={openResponse}
        setOpenResponse={setOpenResponse}
        setOpenRequest={setOpenPost}
        title="Ride Posted"
        type="passenger"
        icon=""
      />
    </Modal>
  );
};

export default PostRide;

const styles = StyleSheet.create({
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
});
