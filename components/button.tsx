import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={{ color: "#fff", textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#000831",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
});
