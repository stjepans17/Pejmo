import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Pressable, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { styles as sharedStyles } from "../../features/home/styles";
import { styles } from "../../features/home/styles";

export default function AddListingScreen() {
	const [type, setType] = useState<"ride" | "passenger">("ride");
	const [fromCity, setFromCity] = useState("");
	const [toCity, setToCity] = useState("");
	const [dateTime, setDateTime] = useState<Date>(new Date());
	const [showPicker, setShowPicker] = useState(false);
	const [price, setPrice] = useState("");
	const [seats, setSeats] = useState("");
	const [pickupPoint, setPickupPoint] = useState<{ latitude: number; longitude: number } | null>(null);

	const handleMapPress = (event: MapPressEvent) => {
		setPickupPoint(event.nativeEvent.coordinate);
	};

	const handleSubmit = () => {
		if (!fromCity || !toCity || !price || !seats || !pickupPoint) {
			Alert.alert("Please fill in all fields and select a pickup point");
			return;
		}

		// Simulate submission
		Alert.alert(`${type === "ride" ? "Ride" : "Passenger"} listing added!`);
		setFromCity("");
		setToCity("");
		setPrice("");
		setSeats("");
		setDateTime(new Date());
		setPickupPoint(null);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
			<View style={localStyles.container}>
				<View style={localStyles.navbar}>
					<View style={styles.navbarSide}></View>
					<View style={styles.navbarCenter}>
						<Text style={styles.navbarTitle}>pejmo!</Text>
					</View>
					<View style={styles.navbarSide}></View>
				</View>

				<View style={{ padding: 20 }}>
					<Text style={sharedStyles.heading}>I am:</Text>

					<View style={sharedStyles.toggleContainer}>
						<Pressable onPress={() => setType("ride")}>
							<Text style={[sharedStyles.toggleText, type === "ride" && sharedStyles.active]}>
								Passenger
							</Text>
						</Pressable>

						<Pressable onPress={() => setType("passenger")}>
							<Text style={[sharedStyles.toggleText, type === "passenger" && sharedStyles.active]}>
								Driver
							</Text>
						</Pressable>
					</View>

					<Text style={sharedStyles.label}>From</Text>
					<TextInput
						style={sharedStyles.input}
						placeholder="Enter origin city"
						value={fromCity}
						onChangeText={setFromCity}
					/>

					<Text style={sharedStyles.label}>To</Text>
					<TextInput
						style={sharedStyles.input}
						placeholder="Enter destination city"
						value={toCity}
						onChangeText={setToCity}
					/>

					<Text style={sharedStyles.label}>Date</Text>
					<Pressable onPress={() => setShowPicker(true)} style={sharedStyles.input}>
						<Text>{dateTime.toLocaleDateString("sl-SI")}</Text>
					</Pressable>
					{showPicker && (
						<DateTimePicker
							value={dateTime}
							mode="date"
							display="default"
							onChange={(event, selectedDate) => {
								setShowPicker(false);
								if (selectedDate) setDateTime(selectedDate);
							}}
						/>
					)}

					<Text style={sharedStyles.label}>Price (€)</Text>
					<TextInput
						style={sharedStyles.input}
						placeholder="Enter price"
						value={price}
						onChangeText={setPrice}
						keyboardType="numeric"
					/>

					<Text style={sharedStyles.label}>Seats</Text>
					<TextInput
						style={sharedStyles.input}
						placeholder="Enter number of seats"
						value={seats}
						onChangeText={setSeats}
						keyboardType="numeric"
					/>

					<Text style={sharedStyles.label}>Pickup Point</Text>
					<MapView
						style={localStyles.map}
						initialRegion={{
							latitude: 46.056946,
							longitude: 14.505751,
							latitudeDelta: 0.05,
							longitudeDelta: 0.05,
						}}
						onPress={handleMapPress}
					>
						{pickupPoint && <Marker coordinate={pickupPoint} />}
					</MapView>

					<Pressable onPress={handleSubmit} style={localStyles.button}>
						<Text style={localStyles.buttonText}>Add Listing</Text>
					</Pressable>
				</View>
			</View>
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}

const localStyles = StyleSheet.create({
	container: {
		backgroundColor: "#f9f9f9",
		flex: 1,
	},
	navbar: {
		height: 90,
		flexDirection: "row",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 5,
		zIndex: 10,
		backgroundColor: "#fff",
		width: "100%",
	},
	map: {
		width: "100%",
		height: 200,
		marginTop: 10,
		borderRadius: 8,
	},
	button: {
		backgroundColor: "#4600DE",
		paddingVertical: 12,
		borderRadius: 8,
		marginTop: 20,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
		fontWeight: "600",
		fontSize: 16,
	},
});