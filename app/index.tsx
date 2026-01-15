import Arrow from "@/assets/images/autharrow.png";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#023477", "#000831"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Get Started</Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btnLink}
          onPress={() => router.push("/auth/individual")}
        >
          <View style={styles.btnContent}>
            <Text style={styles.btnText}>Individual Account</Text>
            <Image source={Arrow} style={styles.arrow} />
          </View>
        </Pressable>

        <Pressable
          style={styles.btnLink}
          onPress={() => router.push("/auth/business")}
        >
          <View style={styles.btnContent}>
            <Text style={styles.btnText}>Corporate Account</Text>
            <Image source={Arrow} style={styles.arrow} />
          </View>
        </Pressable>
      </View>

      <Text style={styles.footerText}>
        Already have an Account?{" "}
        <Link href="/auth/login">
          <Text style={styles.link}>Sign In</Text>
        </Link>
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
  },

  btnContainer: {
    marginVertical: 50,
    gap: 30,
  },

  btnLink: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    minWidth: 260,
    alignItems: "center",
  },

  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  btnText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  arrow: {
    width: 16,
    height: 16,
  },

  footerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },

  link: {
    color: "#4da3ff",
  },
});
