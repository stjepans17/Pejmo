import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from "react-native";

type DimensionValue = number | `${number}%` | "auto"; 

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  padding?: number;
  borderRadius?: number;
  width?: DimensionValue; 
  height?: DimensionValue
  style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#4600DE",
  textColor = "white",
  fontSize = 16,
  padding = 16,
  borderRadius = 16,
  width = "100%",
  height = "100%",
  style
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        { backgroundColor, padding, borderRadius, width, height } as ViewStyle, 
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor, fontSize } as TextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'Inter'
  },
});

export default CustomButton;