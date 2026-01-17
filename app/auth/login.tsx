import AppBackground from "@/components/AppBackground";
import AppButton from "@/components/button";
import AppInput from "@/components/input";
import { loginSchema } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/home/home");
  };

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

            {/* Email */}
            <View>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <AppInput
                    label="Email"
                    placeholder=""
                    value={value}
                    onChangeText={onChange}
                    error={errors.email?.message}
                  />
                )}
              />
              {errors.password && (
                <Text style={styles.error}>{errors.email?.message}</Text>
              )}
            </View>
            {/* Password */}
            <View>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <AppInput
                    label="Password"
                    placeholder=""
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    error={errors.password?.message}
                  />
                )}
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password?.message}</Text>
              )}
            </View>
            <AppButton
              title="Login"
              onPress={handleSubmit(onSubmit)}
              color="#fff"
              style={styles.btn}
            />

            <Text style={{ textAlign: "center" }}>
              Don’t have an Account?
              <Text onPress={() => router.push("/")}> Create Account</Text>
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
  btn: {
    backgroundColor: "#000831",
    padding: 14,
  },
  error: {
    color: "red",
  },
});
