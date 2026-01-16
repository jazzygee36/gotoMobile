import { ImageBackground, StyleSheet } from "react-native";

export default function AppBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ImageBackground
      source={require("@/assets/images/removebg-preview.png")}
      style={styles.background}
      imageStyle={styles.image}
      resizeMode="contain"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: "auto",
  },
});
