import BackArrow from "@/assets/images/backarrow.png";
import AppBackground from "@/components/AppBackground";
import AppButton from "@/components/button";
import AppInput from "@/components/input";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndividualRegistration() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const handleSubmit = () => {
    // submit logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBackground>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.acctNav}>
              <Pressable style={styles.backCon} onPress={() => router.back()}>
                <Image source={BackArrow} style={{ width: 16, height: 16 }} />
              </Pressable>
              <Text style={styles.createText}>Create Account</Text>
            </View>
            <View style={styles.inputContainer}>
              <AppInput
                label="Business Name"
                placeholder="Enter Business Name"
              />
              <AppInput
                label="Email Address"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <AppInput
                label="Phone Number"
                placeholder="Enter +234"
                keyboardType="phone-pad"
              />
              <View>
                <AppInput
                  label="Password"
                  placeholder="Enter Password"
                  secureTextEntry={true}
                />
                <Text style={{ fontSize: 12 }}>
                  Password must be at least 8 characters
                </Text>
              </View>
              <View>
                <AppInput
                  label="Confirm Password"
                  placeholder="Enter Confirm Password"
                  secureTextEntry={true}
                />
                <Text style={{ fontSize: 12 }}>Password must be the same</Text>
              </View>
              <Pressable
                style={styles.row}
                onPress={() => setChecked(!checked)}
              >
                <View style={[styles.checkbox, checked && styles.checked]} />
                <Text style={{ marginLeft: 8 }}>
                  I agree to all the terms and conditions
                </Text>
              </Pressable>

              <AppButton title={"Create Account"} onPress={handleSubmit} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AppBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 50,
  },
  acctNav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  },
  backCon: {
    borderRadius: 8,
    borderColor: "#000831",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  createText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingVertical: 25,
    gap: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000831",
    borderRadius: 4,
  },
  checked: {
    backgroundColor: "#000831",
  },
});
