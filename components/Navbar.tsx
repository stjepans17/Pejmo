import { View, StyleSheet} from  "react-native";

export default function Navbar() {
    return (
        <View style={{flex:1}}>
            <View style={{flex: 1}}>
                <View style={{width: '90%', height: '90%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <ProfileIcon height={'30%'} width={'30%'} /> */}
                </View>
            </View>
            <View style={{flex: 3}}>
                <View style={{width: '90%', height: '90%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <LiftLogicLogo height={'25%'} width={'30%'} /> */}
                </View>
            </View>
            <View style={{flex: 1}}>
                <View style={{width: '90%', height: '90%', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <LiftLogicLogo height={'25%'} width={'30%'} /> */}
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerLeftContainer: {}
})