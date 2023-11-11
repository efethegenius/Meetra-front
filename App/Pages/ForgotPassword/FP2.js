import { StatusBar } from "expo-status-bar";
import OTPInputView from "@twotalltotems/react-native-otp-input";
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
  HStack,
} from "native-base";
import { useCallback, useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FP2() {
  const [isFilled, setIsFilled] = useState(false);

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
              Input Code
            </Text>
            <Text fontSize="sm" color="#818181" fontFamily="Raleway_500Medium">
              Please enter the 4 digit code sent to your mail
            </Text>
          </Box>
          <FormControl>
            <OTPInputView
              style={{ width: "100%", height: 100 }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                navigation.navigate("fp3");
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </FormControl>
          <Box w="100%" alignItems="center">
            {/* <Button
              w="100%"
              bg="#4db299"
              p="4"
              fontSize="3"
              mb="3"
              isDisabled={!isFilled ? true : false}
              _text={{
                color: "#fff",
                fontFamily: "Raleway_600SemiBold",
                fontSize: "md",
              }}
              onPress={() => {
                navigation.navigate("fp3");
              }}
            >
              Send
            </Button> */}
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
  borderStyleBase: {
    width: 58,
    height: 58,
    color: "#000",
    fontSize: 18,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 58,
    height: 58,
    // borderWidth: 0,
    borderBottomWidth: 1,
    color: "#000",
    fontSize: 18,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
