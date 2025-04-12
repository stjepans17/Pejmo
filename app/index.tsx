import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import CarIcon from "@/assets/images/svg/car-shadow.svg"

export default function HomeScreen() {
  const router = useRouter();
  const [loaded] = useFonts({
    Inter: require('@/assets/fonts/Inter.ttf')
  });

  // get the width of the current screen
  const width = Dimensions.get('window').width;

  const HandleLogin = () => {
    console.log('going home ...')
    router.replace("/(tabs)/home");
  }

  const HandleSignup = () => {
    router.push("./auth/signup");
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>pejmo!</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.mainContent}>
            <CarIcon fill={"#4600DE"}></CarIcon>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <CustomButton
              title="Sign Up"
              onPress={() => console.log('click')}
              backgroundColor="#4600DE"
              textColor="#FFF"
              fontSize={wp(100) / 26}
              padding={12}
              borderRadius={30}
              width={'80%'}
              height={'70%'}
            />
          </View>
          <View style={styles.footerContent}>
            <CustomButton
              title="Log In"
              onPress={() => HandleLogin()}
              backgroundColor="#4600DE"
              textColor="#FFF"
              fontSize={wp(100) / 26}
              padding={12}
              borderRadius={30}
              width={'80%'}
              height={'70%'}
            />
          </View>
        </View>
      </View>
    </View>
  );
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
  }
})
