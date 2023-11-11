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

export default function FP1() {
  const [email, setEmail] = useState("");

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
          <Box w="100%" mb="2">
            <Text fontSize="xl" fontFamily="Raleway_700Bold" color="#414141">
              Enter your mail
            </Text>
            <Text fontSize="sm" color="#818181" fontFamily="Raleway_500Medium">
              A code will be sent to the email address used to register
            </Text>
          </Box>
          <FormControl>
            <Stack space={2.5}>
              <Input
                type="text"
                placeholder="Tobiowoade@gmail.com"
                h={"62px"}
                pl="5"
                onChangeText={(text) => setEmail(text)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Atleast 6 characters are required.
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
              isDisabled={email === "" ? true : false}
              _text={{
                color: "#fff",
                fontFamily: "Raleway_600SemiBold",
                fontSize: "md",
              }}
              onPress={() => {
                navigation.navigate("fp2");
              }}
            >
              Send
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
