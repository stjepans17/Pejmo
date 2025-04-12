import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
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
      <View style={localStyles.navbar}>
        <View style={styles.navbarSide}></View>
        <View style={styles.navbarCenter}>
          <Text style={styles.navbarTitle}>pejmo!</Text>
        </View>
        <View style={styles.navbarSide}></View>
      </View>
      <Text style={styles.heading}>Messages</Text>

      <View style={{ flex: 8 }}>
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

    </View>
  );
}

const localStyles = StyleSheet.create({
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
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: "#666",
  },
  main: {
    flex: 8,
  },
  navbar: {
    height: 90,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
    backgroundColor: "#fff",
  }
});

