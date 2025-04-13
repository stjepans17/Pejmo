import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from "react-native";
import { useState, useRef } from "react";
import CustomButton from "@/components/CustomButton";
import { styles } from "../../features/home/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Message {
    id: number;
    text: string;
    sender: "me" | "other";
}

export default function ChatScreen() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Živjo! Kako si?", sender: "other" },
        { id: 2, text: "Ej! Super, ti?", sender: "me" },
        { id: 3, text: "Tudi fajn, hvala!", sender: "other" },
        { id: 4, text: "A gremo danes na kavo?", sender: "other" },
        { id: 5, text: "Ja, z veseljem! Ob 17h?", sender: "me" },
    ]);

    const scrollRef = useRef<ScrollView>(null);

    const sendMessage = () => {
        const trimmed = message.trim();
        if (trimmed) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: trimmed,
                sender: "me",
            };
            setMessages(prev => [...prev, newMessage]);
            setMessage("");

            setTimeout(() => {
                scrollRef.current?.scrollToEnd({ animated: true });
            }, 100);
        }
    };

    return (
        <View style={localStyles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <View style={styles.navbarSide}>
                    <Pressable onPress={() => router.push('/(tabs)/messages')}>
                        <Ionicons name="arrow-back" size={28} color="#4600DE" />
                    </Pressable>
                </View>
                <View style={styles.navbarCenter}>
                    <Text style={styles.navbarTitle}>pejmo!</Text>
                </View>
                <View style={styles.navbarSide}></View>
            </View>

            {/* Centrirano ime */}
            <Text style={localStyles.chatWithText}>Tomaz</Text>

            {/* Glavni del – pogovor */}
            <View style={localStyles.main}>
                <View style={localStyles.visualBoxChat}>
                    <ScrollView
                        contentContainerStyle={localStyles.chatContainer}
                        ref={scrollRef}
                        showsVerticalScrollIndicator={false}
                    >
                        {messages.map((msg) => (
                            <View
                                key={msg.id}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: msg.sender === 'me' ? 'flex-end' : 'flex-start',
                                    paddingHorizontal: 10,
                                    marginBottom: 8,
                                }}
                            >
                                <View
                                    style={[
                                        localStyles.messageBubble,
                                        msg.sender === "me"
                                            ? localStyles.myMessage
                                            : localStyles.otherMessage,
                                    ]}
                                >
                                    <Text style={localStyles.messageText}>{msg.text}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

            {/* Input in gumb */}
            <View style={localStyles.under}>
                <View style={localStyles.underContent}>
                    <View style={localStyles.visualBox}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput
                                style={localStyles.input}
                                placeholder="Send message..."
                                value={message}
                                onChangeText={setMessage}
                                placeholderTextColor="#aaa"
                                onSubmitEditing={sendMessage}
                                returnKeyType="send"
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '30%' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <CustomButton
                                    title="Send"
                                    onPress={sendMessage}
                                    backgroundColor="#4600DE"
                                    textColor="#FFF"
                                    fontSize={14}
                                    padding={12}
                                    borderRadius={30}
                                    style={{ width: '100%', height: 48 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chatWithText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginTop: 22,           // 🆕 več prostora od navbarja
        paddingHorizontal: 20,
        paddingBottom: 4,
        textAlign: 'center',
        alignSelf: 'center',
    },
    
    main: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatContainer: {
        width: '100%',
        paddingVertical: 12,
    },
    messageBubble: {
        maxWidth: '75%',
        borderRadius: 16,
        padding: 12,
    },
    myMessage: {
        backgroundColor: '#FFB366',
        borderTopRightRadius: 0,
        alignSelf: 'flex-end',
    },
    otherMessage: {
        backgroundColor: '#AECBFA',
        borderTopLeftRadius: 0,
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
    under: {
        flex: 2,
    },
    underContent: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    visualBox: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width: '100%',
        height: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    visualBoxChat: {
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        width: '90%',
        height: '90%',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    input: {
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        color: "#000",
        height: 48,
        paddingHorizontal: 12,
        width: '90%',
    },
});
