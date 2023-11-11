import { StatusBar } from "expo-status-bar";
import { Box, Text, Button, HStack } from "native-base";
import { useCallback } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function Dashboard() {
  return (
    <Box paddingTop="100px" paddingLeft="10px" paddingRight="10px">
      <HStack justifyContent="space-between" w="100%" alignItems="center">
        <Text>|||</Text>
        <Button
          bg="#1B3E36"
          paddingTop="4px"
          paddingBottom="4px"
          paddingLeft="6px"
          paddingRight="6px"
        >
          <Text color="white">+ Request a ride</Text>
        </Button>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#edf7f5",
  },
});
