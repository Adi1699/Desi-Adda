import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image } from 'react-native'
import appstyles from '../styles/appstyles'
import Icon from "react-native-vector-icons/Ionicons";

const resultChallangeCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.challangeDetails}>
                <Image source={props.source} style={styles.challangeImage} />
                <View>
                    <Text style={{ color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: Dimensions.get('window').height < 650 ? 12 : 14 }}>{props.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="time-outline" size={22} color={appstyles.darkThemeColor} /><Text style={{ color: appstyles.darkThemeColor, fontFamily: 'Roboto-Light', marginLeft: 5, fontSize: Dimensions.get('window').height < 650 ? 10 : 13.5 }}>{props.date}</Text></View>            
                </View>
            </View>
            <View style={[styles.challangeDetails, { flexDirection: 'column' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 16 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Entry Fee</Text>
                        <Text style={styles.activeHead}>{props.rewardperkill}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Type</Text>
                        <Text style={styles.activeHead}>Solo</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Map</Text>
                        <Text style={styles.activeHead}>Erangle</Text>
                    </View>
                </View>
  
                <View style={styles.entryDetails}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Version</Text>
                        <Text style={styles.activeHead}>TPP</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '70%', height: '100%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}><Icon name="trophy-outline" size={23} color="green" /><Text style={{ color: 'green', fontSize: 15, fontFamily: 'Roboto-Light', marginLeft: 95 }}>{props.price}</Text></View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Per Kill</Text>
                        <Text style={styles.activeHead}>₹40</Text>
                    </View>
                 
                </View>
            </View>
        </View> 
    );
}



const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: appstyles.silverGrey,
        paddingTop: 16,
    },
    challangeDetails: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        width: '100%'
    },
    challangeImage: {
        height: 100,
        width: 100,
        borderRadius: 8,
        marginRight: 16,
        resizeMode: 'contain'
    },
    inactiveHead: {
        color: appstyles.white,
        fontFamily: 'Roboto-Light',
        fontSize: 14
    },
    activeHead: {
        color: appstyles.white,
        fontWeight: "bold",
        fontFamily: 'Roboto-Light',
        fontSize: 14.5
    },
    progressContainer: {
        width: '95%',
        backgroundColor: '#333333',
        borderRadius: 20,
        height: 12,
        overflow: 'hidden'
    },
    progress: {
        backgroundColor: appstyles.primaryRed,
        width: '50%',
        height: '100%',
        borderRadius: 20
    },
    entryDetails: {
        width: Dimensions.get('window').width - 30,
        height: 60,
        backgroundColor: appstyles.middleGrey,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 15
    },
});

export default resultChallangeCard; 



