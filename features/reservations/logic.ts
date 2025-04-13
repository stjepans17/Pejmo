import { Alert } from "react-native";
import { RideItem } from "./types";

// Utility function to remove item by ID
const removeItemById = (items: RideItem[], id: string): RideItem[] =>
  items.filter((item) => item.id !== id);

// Accept a ride or passenger request
export const handleAccept = (
  id: string,
  isPassengerRequest: boolean,
  setItems: React.Dispatch<React.SetStateAction<RideItem[]>>
) => {
  Alert.alert("Accepted", `You accepted the ${isPassengerRequest ? "passenger request" : "driver offer"} (ID: ${id})`);
  setItems((prev) => removeItemById(prev, id));
};

// Decline a ride or passenger request
export const handleDecline = (
  id: string,
  isPassengerRequest: boolean,
  setItems: React.Dispatch<React.SetStateAction<RideItem[]>>
) => {
  Alert.alert("Declined", `You declined the ${isPassengerRequest ? "passenger request" : "driver offer"} (ID: ${id})`);
  setItems((prev) => removeItemById(prev, id));
};

// Start a chat with another user
export const handleMessage = (username: string) => {
  Alert.alert("Chat", `Opening chat with ${username}`);
};

// Optionally handle deletion for sent requests/offers
export const handleDelete = (
  id: string,
  setItems: React.Dispatch<React.SetStateAction<RideItem[]>>
) => {
  Alert.alert("Deleted", `You deleted the listing with ID: ${id}`);
  setItems((prev) => removeItemById(prev, id));
};

// Optionally handle tracking a ride
export const handleTrack = (username: string) => {
  Alert.alert("Track", `Tracking the driver ${username}`);
};