import React from 'react'
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import appstyles from '../styles/appstyles'
import Icon from "react-native-vector-icons/Ionicons";
import { SvgXml } from 'react-native-svg'
import xml from './svgxml';

const challangecard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.challangeDetails}>
                <Image source={props.source} style={styles.challangeImage} />
                <View>
                    <Text style={{ color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: Dimensions.get('window').height < 650 ? 12 : 14 }}>{props.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="time-outline" size={22} color={appstyles.colorGrey} /><Text style={{ color: appstyles.colorGrey, fontFamily: 'Roboto-Light', marginLeft: 5, fontSize: Dimensions.get('window').height < 650 ? 10 : 13.5 }}>{props.date}</Text></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}><Icon name="trophy-outline" size={23} color="green" /><Text style={{ color: 'green', fontSize: 15, fontFamily: 'Roboto-Light', marginLeft: 5 }}>{props.price}</Text></View>
                </View>
            </View>
            <View style={[styles.challangeDetails, { flexDirection: 'column' }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 16 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Per Kill</Text>
                        <Text style={styles.activeHead}>{props.rewardperkill}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Type</Text>
                        <Text style={styles.activeHead}>Solo</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Version</Text>
                        <Text style={styles.activeHead}>TPP</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={styles.inactiveHead}>Map</Text>
                        <Text style={styles.activeHead}>Erangle</Text>
                    </View>
                </View>
                {
                    props.chcontext
                        ?
                        <View style={{ width: '100%', marginTop: 10 }}>
                            <View style={styles.progressContainer}>
                                <View style={styles.progress}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginTop: 8 }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', color: appstyles.primaryRed }}>50 spots left</Text>
                                <Text style={{ fontFamily: 'Roboto-Light', color: appstyles.colorGrey }}>50/100</Text>
                            </View>
                        </View>
                        :
                        <View></View>
                }
                <View style={styles.entryDetails}>
                    <View style={{ flexDirection: 'row', width: '70%', height: '100%', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto-Medium', color: '#666666', fontSize: 16 }}>ENTRY FEE</Text>
                        <Text style={{ fontFamily: 'Roboto-Medium', color: appstyles.white, fontSize: 16, marginLeft: 10 }}>₹50</Text>
                    </View>
                    {
                        props.chcontext
                            ?
                            <TouchableOpacity style={{ height: '100%', width: '30%', alignItems: 'center', justifyContent: 'center', backgroundColor: appstyles.primaryRed }}>
                                <Text style={{ color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: 16 }}>Join</Text>
                            </TouchableOpacity>
                            :
                            <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 16 }}>
                                <SvgXml
                                    xml={xml.trophy}
                                    height={30}
                                    width={30}
                                />
                            </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: appstyles.darkThemeColor,
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
        color: appstyles.colorGrey,
        fontFamily: 'Roboto-Light',
        fontSize: 14
    },
    activeHead: {
        color: appstyles.white,
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
        height: 50,
        backgroundColor: 'rgb(45,48,55)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 15
    },
})

export default challangecard
