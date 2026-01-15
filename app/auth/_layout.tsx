import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="individual" options={{ headerShown: false }} />
      <Stack.Screen name="business" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
