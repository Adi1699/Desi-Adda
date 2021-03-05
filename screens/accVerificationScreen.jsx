import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    Platform
} from 'react-native'
import { TextInput } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"

// appstyles
import appstyles from "../styles/appstyles"

const accVerificationScreen = ({ navigation }) => {
    const [resend, setresend] = React.useState(false)
    const [timer, setTimer] = React.useState(10);
    const [text, setText] = React.useState('');
    const id = React.useRef(null);
    const clear = () => {
        window.clearInterval(id.current)
    }
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    React.useEffect(() => {
        if (timer === 0) {
            clear()
            setresend(true)
        }
    }, [timer])

    const handleResend = () => {
        setresend(false)
        setTimer(10);
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={styles.backarrow}>
                    <Ionicons name="arrow-back-outline" size={40} color={appstyles.primaryRed} />
                </View>
            </TouchableWithoutFeedback>
            <View style={{ width: Dimensions.get('window').width - 80 }}>
                <Text style={{ color: appstyles.borderColorlightGrayD, fontFamily: 'Roboto-Light', fontSize: 14, textAlign: 'left' }}>A 6-digit verification code is just sent to your email.</Text>
                <Text style={{ color: appstyles.primaryRed, fontSize: 14 }}>Change Email</Text>
            </View>
            <TextInput
                label="Enter the code"
                value={text}
                mode="outlined"
                dense={true}
                theme={{
                    colors: {
                        text: appstyles.white,
                        primary: appstyles.white,
                        placeholder: appstyles.colorGrey
                    }
                }}
                onChangeText={text => setText(text)}
                style={styles.textInput}
            />
            <View style={styles.resendActionContainer}>
                {
                    resend ?
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={{ color: appstyles.primaryRed, fontFamily: 'Roboto-Light', fontSize: 12 }}>Resend</Text>
                        </TouchableOpacity>
                        :
                        <View style={appstyles.flexrow}>
                            <Text style={{ fontSize: 12, fontFamily: 'Roboto-Light', color: appstyles.colorGrey }}>Resend the code in</Text>
                            <Text style={{ marginLeft: 5, color: appstyles.primaryRed, fontSize: 12, fontFamily: 'Roboto-Light' }}>{timer}s</Text>
                        </View>
                }
            </View>
            <TouchableOpacity style={{ marginTop: 40 }} onPress={() => navigation.navigate('profilesetup')}>
                <View style={styles.button}>
                    <Text style={{ color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: 16 }}>Verify</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appstyles.darkThemeColor
    },
    backarrow: {
        position: 'absolute',
        left: 25,
        top: Platform.OS === 'ios' ? StatusBar.currentHeight + 50 : StatusBar.currentHeight - 20
    },
    button: {
        width: Dimensions.get('window').width - 80,
        backgroundColor: appstyles.primaryRed,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textInput: {
        width: Dimensions.get('window').width - 80,
        backgroundColor: appstyles.darkThemeColor,
        fontFamily: 'Roboto-Light',
        marginVertical: 10
    },
    resendActionContainer: {
        width: Dimensions.get('window').width - 80,
        alignItems: 'flex-end'
    }
})

export default accVerificationScreen
