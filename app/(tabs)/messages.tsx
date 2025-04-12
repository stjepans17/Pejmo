import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../../features/home/styles";

interface Message {
  id: string;
  name: string;
  preview: string;
  unread: boolean;
}

export default function MessagesScreen() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: "1",
          name: "Tomaž",
          preview: "See you at 10!",
          unread: true,
        },
        {
          id: "2",
          name: "Matej",
          preview: "Hvala za vožnjo!",
          unread: false,
        },
        {
          id: "3",
          name: "Sara",
          preview: "Super si peljal",
          unread: false,
        },
      ]);
    }, 300);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[
              localStyles.messageCard,
              item.unread && localStyles.unread,
            ]}
            onPress={() => alert(`Open chat with ${item.name}`)}
          >
            <Text style={localStyles.name}>{item.name}</Text>
            <Text style={localStyles.preview}>{item.preview}</Text>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const localStyles = {
  messageCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  unread: {
    backgroundColor: "#F3F0FF",
  },
  name: {
    fontWeight: "600" as const,
    fontSize: 16,
    color: "#222",
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: "#666",
  },
};
