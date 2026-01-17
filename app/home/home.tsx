import AppBackground from "@/components/AppBackground";
import AppButton from "@/components/button";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Stations = [
  { name: "Ardrova Plc", amount: "N800/ltr" },
  { name: "Mrs holding", amount: "N800/ltr" },
  { name: "Ardrova Plc", amount: "N800/ltr" },
  { name: "NNPC", amount: "N800/ltr" },
  { name: "Oando", amount: "N800/ltr" },
  { name: "Petrocam", amount: "N800/ltr" },
  { name: "Ardrova Plc", amount: "N800/ltr" },
  { name: "Mrs holding", amount: "N800/ltr" },
  { name: "Ardrova Plc", amount: "N800/ltr" },
  { name: "NNPC", amount: "N800/ltr" },
  { name: "Oando", amount: "N800/ltr" },
  { name: "Petrocam", amount: "N800/ltr" },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBackground>
        <View style={styles.userContainer}>
          <View style={styles.userLogo}>
            <Text style={styles.userLogoText}>S</Text>
          </View>

          <Text style={styles.userText}>Hello Samson</Text>
        </View>
        <LinearGradient
          colors={["#2673E5", "#03145B"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          <Text style={styles.cardText}>Available Balance</Text>
          <Text style={styles.cardBal}>N 0:00</Text>
          <AppButton
            title={"Fund Wallet"}
            onPress={() => {}}
            style={styles.btnFund}
            color="#000"
          />
        </LinearGradient>

        <AppButton
          title={"Verify your Identity"}
          onPress={() => {}}
          style={styles.verifyIdentity}
          color="#000"
        />
        <FlatList
          data={Stations}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          contentContainerStyle={styles.stationList}
          renderItem={({ item }) => (
            <View style={styles.stationItem}>
              <Text style={styles.stationName}>{item.name}</Text>
              <Text style={styles.stationAmount}>{item.amount}</Text>
            </View>
          )}
        />
      </AppBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    margin: "auto",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  userLogo: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
  },
  userLogoText: {
    color: "#000",
  },
  userText: {
    fontSize: 16,
    fontWeight: "bold",
    // marginTop: 35,
  },
  container: {
    borderRadius: 15,
    paddingVertical: 21,
    paddingHorizontal: 33,
    marginVertical: 38,
  },
  cardText: {
    color: "#fff",
  },
  cardBal: {
    color: "#fff",
    marginTop: 26,
  },
  btnFund: {
    marginTop: 26,

    backgroundColor: "#D0E2FC",
    borderColor: "none",
    padding: 10,
    borderRadius: 8,
    width: "50%",
  },
  verifyIdentity: {
    backgroundColor: "transparent",
    color: "#000",
    borderWidth: 1,
    width: "100%",
    padding: 10,
  },
  stationList: {
    marginTop: 24,
    gap: 12,
  },

  stationItem: {
    // backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stationName: {
    color: "#000",
    fontWeight: "500",
  },

  stationAmount: {
    color: "#2673E5",
  },
});
