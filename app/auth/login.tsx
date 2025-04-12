import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LoginScreen() {
    <View style={styles.container}>
        <View style={styles.containerContent}>
            <View style={styles.visualBox}>
                <View style={styles.visualBoxContent}>
                    <View style={styles.contentRow}></View>
                    <View style={styles.contentRow}></View>
                    <View style={styles.contentRow}></View>
                    <View style={styles.contentRow}></View>
                </View>
            </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F8F8F8'
    },
    containerContent: {
      width: '90%',
      height: '90%'
    },
    contentRow: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    visualBox: {
        padding: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    main: {
      flex: 7,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    footer: {
      flex: 2,
      flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    headerTitle: {
      fontFamily: 'Inter',
      letterSpacing: -3,
      color: '#4600DE',
      fontSize: wp(100) / 11,
      fontWeight: "800"
    },
    footerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    mainContent: {
      height: '80%',
      width: '80%'
    },
    visualBoxContent: {
        width: '90%',
        height: '90%',
        flexDirection: 'row'
    }
  })
  