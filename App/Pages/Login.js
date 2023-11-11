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
  Collapse,
  Slide,
  Spinner,
  HStack,
} from "native-base";
import { useCallback, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AlertBox } from "../Components/CommonActions";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigation = useNavigation();

  const userLogin = async () => {
    // try {
    //   setIsLoggingIn(true);
    //   const login = await fetch(
    //     "https://b0fb-102-89-23-90.eu.ngrok.io/user/user-login",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: email,
    //         password: password,
    //       }),
    //       headers: {
    //         "content-type": "application/json",
    //         Accept: "application/json",
    //       },
    //     }
    //   ).then((res) => res.json());
    //   if (login.Status === "Failed") {
    //     setErrorMessage(login.Message);
    //     setShow(true);
    //     setIsLoggingIn(false);
    //     return;
    //   }
    //   // await AsyncStorage.setItem("token", login.token);
    //   // navigation.navigate("Dash");
    //   navigation.navigate("dashboard");
    //   setIsLoggingIn(false);
    //   console.log(login.token);
    // } catch (error) {
    //   console.log(error);
    //   setIsLoggingIn(false);
    // }
    navigation.navigate("dashboard");
  };
  return (
    <Box alignItems="center" backgroundColor={"#edf7f5"} h="100%">
      <Box
        w="100%"
        h="80%"
        backgroundColor={"#edf7f5"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Slide in={show} w="100%" placement="top" alignSelf="center">
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
        <VStack mx="5" space={5} w="90%" maxW={700}>
          <Box w="100%" mb="3">
            <Text fontSize="xl" fontFamily="Raleway_700Bold" color="#414141">
              Welcome back !
            </Text>
            <Text fontSize="sm" color="#818181" fontFamily="Raleway_500Medium">
              Let's get you back to where you started from
            </Text>
          </Box>
          <FormControl>
            <Stack space={1}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Enter your mail
              </Text>
              <Input
                type="text"
                placeholder="Tobiowoade@gmail.com"
                h={"60px"}
                pl="2"
                fontSize="sm"
                onChangeText={(text) => setEmail(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl mb="3">
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="sm">
                Enter Password
              </Text>
              <Input
                type="password"
                placeholder="********"
                h={"60px"}
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
            <Link
              _text={{
                fontSize: "xs",
                color: "#000",
                fontFamily: "Raleway_600SemiBold",
              }}
              alignSelf="flex-end"
              mt="1"
              onPress={() => {
                navigation.navigate("fp1");
              }}
            >
              Forgot your Password?
            </Link>
          </FormControl>
          <Box w="100%" alignItems="center">
            <Button
              w="100%"
              bg="#4db299"
              p="4"
              fontSize="3"
              mb="3"
              isDisabled={email === "" || password === "" ? true : false}
              onPress={() => {
                userLogin();
                // navigation.navigate("dashboard");
              }}
            >
              <HStack space={2} justifyContent="center">
                {isLoggingIn && <Spinner accessibilityLabel="Loading posts" />}
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Raleway_600SemiBold",
                    fontSize: 16,
                  }}
                >
                  Log In
                </Text>
              </HStack>
            </Button>
            <Text fontSize="sm" fontFamily="Raleway_400Regular">
              New to Meetra?{"  "}
              <Text
                fontFamily="Raleway_600SemiBold"
                color="#4db299"
                textDecorationLine="underline"
                textDecorationStyle="solid"
                textDecorationColor="#000"
                onPress={() => {
                  navigation.navigate("signup");
                }}
              >
                Sign up
              </Text>
            </Text>
          </Box>
        </VStack>
      </Box>
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
