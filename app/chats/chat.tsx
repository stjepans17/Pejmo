import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

export default function ChatScreen() {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (message.trim()) {
            console.log("Sending:", message);
            setMessage(""); // clear input after sending
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>

            </View>
            <View style={styles.main}>
                <Text>I am chatting with Tikei</Text>
            </View>
            <View style={styles.under}>
                <View style={styles.underContent}>
                    <View style={styles.visualBox}>
                        <View style={{ flex: 2, justifyContent: 'center',alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Send message..."
                                value={message}
                                onChangeText={setMessage}
                                placeholderTextColor="#aaa"
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <CustomButton
                            title="Send"
                            onPress={() => console.log('click')}
                            backgroundColor="#4600DE"
                            textColor="#FFF"
                            fontSize={14}
                            padding={12}
                            borderRadius={30}
                            width={'80%'}
                            height={'30%'}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingTop: 20,
        // paddingHorizontal: 16,
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        zIndex: 10,
        backgroundColor: "#fff",
    },
    main: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    under: {
        flex: 2
    },
    underContent: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
        flexDirection: 'row'
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
})
