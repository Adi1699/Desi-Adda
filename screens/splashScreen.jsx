import React from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable'

// appstyles
import appstyles from '../styles/appstyles'

const splashscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Animatable.View animation="zoomIn">
                <Image style={{height: 150, width: 150}} source={require("../assets/logo/logo.png")}/>
            </Animatable.View>
            <Animatable.View style={{position: 'absolute', bottom: 50}} animation="fadeInLeft">
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <View style={styles.getStarted}>
                        <Text style={{color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: 16}}>Get Started</Text>                    
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appstyles.darkThemeColor,
        position: 'relative'
    },
    getStarted: {
        backgroundColor: appstyles.primaryRed,
        padding: 10,
        width: Dimensions.get('window').width - 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})

export default splashscreen
