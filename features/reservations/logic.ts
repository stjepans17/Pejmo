import { Alert } from "react-native";

export const handleAccept = (id: string, isPassenger: boolean, update: Function) => {
  Alert.alert("Accepted", `You accepted ${isPassenger ? "request" : "offer"} ID: ${id}`);
  update((prev: any[]) => prev.filter(item => item.id !== id));
};

export const handleDecline = (id: string, isPassenger: boolean, update: Function) => {
  Alert.alert("Declined", `You declined ${isPassenger ? "request" : "offer"} ID: ${id}`);
  update((prev: any[]) => prev.filter(item => item.id !== id));
};

export const handleMessage = (username: string) => {
  Alert.alert("Message", `Initiating chat with ${username}`);
};