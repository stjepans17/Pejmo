import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headerSection, { flex: 1, backgroundColor: 'orange' }]}>
          {/* <ProfileIcon height={'30%'} width={'30%'} /> */}
        </View>
        <View style={[styles.headerSection, { flex: 3, backgroundColor: 'green' }]}>
          {/* <LiftLogicLogo height={'25%'} width={'30%'} /> */}
        </View>
        <View style={[styles.headerSection, { flex: 1, backgroundColor: 'red' }]}>
          {/* <LiftLogicLogo height={'25%'} width={'30%'} /> */}
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainContent}>
          <Text style={{ fontSize: 18 }}>Welcome to Home!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
  },
  headerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  main: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
