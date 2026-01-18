import BackArrow from "@/assets/images/backarrow.png";
import AppBackground from "@/components/AppBackground";
import AppButton from "@/components/button";
import AppInput from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

import { corporateSchema } from "@/utils/validation";

export default function RegisterRegistration() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(corporateSchema),
  });
  const [checked, setChecked] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBackground>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"} // adjust layout when keyboard appears
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
              <View>
                <Controller
                  control={control}
                  name="businessName"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <AppInput
                        label="Business Name"
                        placeholder="Enter Business Name"
                        onChangeText={onChange}
                        value={value}
                      />
                    );
                  }}
                />
                {errors.businessName && (
                  <Text style={styles.err}>{errors.businessName.message}</Text>
                )}
              </View>
              <View>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <AppInput
                        label="Email Address"
                        placeholder="Enter Email Address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={onChange}
                        value={value}
                      />
                    );
                  }}
                />
                {errors.email && (
                  <Text style={styles.err}>{errors.email.message}</Text>
                )}
              </View>
              <View>
                <Controller
                  control={control}
                  name="phoneNumber"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <AppInput
                        label="Phone Number"
                        placeholder="Enter +234"
                        keyboardType="phone-pad"
                        onChangeText={onChange}
                        value={value}
                      />
                    );
                  }}
                />
                {errors.phoneNumber && (
                  <Text style={styles.err}>{errors.phoneNumber.message}</Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <AppInput
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        onChangeText={onChange}
                        value={value}
                      />
                    );
                  }}
                />

                <Text style={{ fontSize: 12 }}>
                  Password must be at least 8 characters
                </Text>
                {errors.password && (
                  <Text style={styles.err}>{errors.password.message}</Text>
                )}
              </View>
              <View>
                <Controller
                  control={control}
                  name="confirmPwd"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <AppInput
                        label="Confirm Password"
                        placeholder="Enter Confirm Password"
                        secureTextEntry={true}
                        onChangeText={onChange}
                        value={value}
                      />
                    );
                  }}
                />

                <Text style={{ fontSize: 12 }}>Password must be the same</Text>
                {errors.confirmPwd && (
                  <Text style={styles.err}>{errors.confirmPwd.message}</Text>
                )}
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

              <AppButton
                title={"Create Account"}
                onPress={handleSubmit(onSubmit)}
                style={styles.btn}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </AppBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
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
  btn: {
    backgroundColor: "#000831",
    padding: 14,
  },
  err: {
    color: "red",
  },
});
