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
} from "native-base";
import { useCallback, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FP3() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  return (
    <Box alignItems="center" backgroundColor={"#edf7f5"} h="100%">
      <Box
        w="100%"
        h="80%"
        backgroundColor={"#edf7f5"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <VStack mx="5" space={5} w="90%" maxW={700}>
          <Box w="100%" mb="8">
            <Text fontSize="xl" fontFamily="Raleway_700Bold" color="#414141">
              Enter new password
            </Text>
            <Text fontSize="md" color="#818181" fontFamily="Raleway_500Medium">
              Input your new password to get started !
            </Text>
          </Box>
          <FormControl>
            <Stack space={2.5}>
              <Text fontFamily="Raleway_500Medium" fontSize="md">
                Enter New Password
              </Text>
              <Input
                type="password"
                placeholder="********"
                h={"62px"}
                pl="5"
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
              <Text fontFamily="Raleway_500Medium" fontSize="md">
                Confirm New Password
              </Text>
              <Input
                type="password"
                placeholder="********"
                h={"62px"}
                pl="5"
                onChangeText={(text) => setConfirmPassword(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Password does not match
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
                confirmPassword === "" || password === "" ? true : false
              }
              _text={{
                color: "#fff",
                fontFamily: "Raleway_600SemiBold",
                fontSize: "md",
              }}
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              Confirm
            </Button>
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
