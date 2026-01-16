import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
