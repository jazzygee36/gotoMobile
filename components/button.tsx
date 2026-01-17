import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
};

export default function AppButton({
  title,
  onPress,
  style,
  color = "#fff",
}: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={[style, styles.buttonContainer]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    // borderWidth: 1,
  },
  text: {
    textAlign: "center",
    color: "#000",
  },
});
