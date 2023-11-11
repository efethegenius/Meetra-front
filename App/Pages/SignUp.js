import { StatusBar } from "expo-status-bar";
import {
  Box,
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  Text,
  Button,
  Link,
  VStack,
  ScrollView,
  useToast,
  Collapse,
  Slide,
} from "native-base";
import { useCallback, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AlertBox } from "../Components/CommonActions";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const toast = useToast();
  const userSignUp = async () => {
    try {
      const signup = await fetch("http://172.20.10.3:3002/user/create-user", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          phone: phone,
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());
      if (signup.Status === "Failed") {
        setErrorMessage(signup.Message);
        setShow(true);
      }
      if (signup.Status === "Success") {
        console.log(signup);
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box alignItems="center" backgroundColor={"#edf7f5"} h="100%">
      <ScrollView
        w="100%"
        h="80%"
        backgroundColor={"#edf7f5"}
        // alignItems={"center"}
        // justifyContent={"center"}
      >
        <VStack mx="5" space={3} w="90%" maxW={700}>
          <Slide in={show} w="100%" placement="top">
            {
              <AlertBox
                show={show}
                setShow={setShow}
                title="Oops!"
                message={errorMessage}
                status="error"
              />
            }
          </Slide>
          <Box w="100%" mb="4">
            <Text fontSize="xl" fontFamily="Raleway_700Bold" color="#414141">
              Hey There !
            </Text>
            <Text fontSize="sm" color="#818181" fontFamily="Raleway_500Medium">
              Kindly fill in the details below to register
            </Text>
          </Box>
          <FormControl>
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Full name
              </Text>
              <Input
                type="text"
                placeholder="Owoade Tobiloba"
                h={"50px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setFullname(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                A Name is required
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl>
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Phone Number
              </Text>
              <Input
                type="text"
                placeholder="07067896171"
                h={"50px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setPhone(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                A Phone Number is required
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl>
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Enter your mail
              </Text>
              <Input
                type="text"
                placeholder="Tobiowoade@gmail.com"
                h={"50px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setEmail(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                A valid Email is required
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl>
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Enter Password
              </Text>
              <Input
                type="password"
                placeholder="********"
                h={"50px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setPassword(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl mb="2">
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Confirm Password
              </Text>
              <Input
                type="password"
                placeholder="********"
                h={"50px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                This does not match password
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Box w="100%" alignItems="center">
            <Button
              w="100%"
              bg="#4db299"
              p="4"
              fontSize="3"
              mb="3"
              isDisabled={
                email === "" ||
                password === "" ||
                fullname === "" ||
                phone === "" ||
                confirmPassword === ""
                  ? true
                  : false
              }
              _text={{
                color: "#fff",
                fontFamily: "Raleway_600SemiBold",
                fontSize: "md",
              }}
              onPress={() => {
                userSignUp();
              }}
            >
              Sign Up
            </Button>
            <Text fontSize="sm" fontFamily="Raleway_400Regular">
              Already a member?{"  "}
              <Text
                fontFamily="Raleway_600SemiBold"
                color="#4db299"
                textDecorationLine="underline"
                textDecorationStyle="solid"
                textDecorationColor="#000"
                onPress={() => {
                  navigation.navigate("login");
                }}
              >
                Log in
              </Text>
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf7f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
