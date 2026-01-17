import { StyleSheet, Text, TextInput, View } from "react-native";

type AppInputProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: string;
  onChangeText?: () => void;
  value?: any;
  error?: string;
};

export default function AppInput({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  onChangeText,
  value,
  error,
}: AppInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        style={styles.inputProperty}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        value={value}
        error={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // marginBottom: 16,
  },
  inputLabel: {
    fontSize: 12,
    color: "#606161",
    marginBottom: 4,
  },
  inputProperty: {
    borderColor: "#71767B",
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
    fontSize: 12,
  },
});
