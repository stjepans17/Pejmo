import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  dateTime: Date | null;
  setDateTime: (date: Date) => void;
}

export default function DateSelector({ dateTime, setDateTime }: Props) {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDateTime(selectedDate);
    }
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>When:</Text>
			<DateTimePicker
				value={dateTime || new Date()}
				mode="date"
				display={"default"}
				onChange={onChange}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontWeight: "600",
    marginBottom: 4,
  },
  input: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 6,
  },
});