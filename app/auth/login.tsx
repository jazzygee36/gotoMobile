import AppBackground from "@/components/AppBackground";
import AppButton from "@/components/button";
import AppInput from "@/components/input";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inputContainer}>
            <Text style={styles.createText}>Login</Text>
            <AppInput label="Email" placeholder="" />
            <AppInput label="Password" placeholder="" />
            <AppButton
              title="Login"
              onPress={() => {
                router.push("/home/home");
              }}
            />
            <Text style={{ marginLeft: 8, textAlign: "center" }}>
              Don’t have an Account?{" "}
              <Pressable onPress={() => router.push("/")}>
                Create Account
              </Pressable>
            </Text>
          </View>
        </ScrollView>
      </AppBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: "90%",
    alignSelf: "center",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    gap: 25,
  },
  createText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
