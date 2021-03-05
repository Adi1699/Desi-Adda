import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, Platform } from 'react-native'
// components
import Header from '../components/header';
// appstyles
import appstyles from "../styles/appstyles"

const matcharray = [
    {
        num: 1,
        name: 'Match 17799 | Valorant',
        paid: 40,
        won: 0,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 2,
        name: 'Match 12467 | PUBG',
        paid: 40,
        won: 40,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 3,
        name: 'Match 00003 | Call of duty',
        paid: 40,
        won: 0,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 4,
        name: 'Match 98778 | Free Fire',
        paid: 40,
        won: 100,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 5,
        name: 'Match 56496 | Witcher-3',
        paid: 40,
        won: 0,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 6,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 7,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 8,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 9,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 10,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 11,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 12,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 13,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    },
    {
        num: 14,
        name: 'Match 12120 | Modern Combat 5',
        paid: 40,
        won: 400,
        date: '14th Fab at 10:00AM'
    }
]

const statScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: appstyles.darkThemeColor }]}>
            <Header headTxt="Statistics" context={false} navigation={navigation} />
            <ScrollView style={styles.maincontainer} showsVerticalScrollIndicator={false}>
                <View style={styles.contentView}>
                    <View style={styles.place}>
                        <Text style={styles.cattext}>#</Text>
                        {matcharray.map((value, index) => {
                            return <View key={value.num} style={styles.dataContainer}><Text style={styles.data} key={index}>{value.num}</Text></View>
                        })}
                    </View>
                    <View style={styles.match}>
                        <Text style={styles.cattext}>Match</Text>
                        {matcharray.map((value, index) => {
                            return <View key={value.num} style={styles.dataContainer}><Text style={[styles.data, { marginTop: 10, marginBottom: 1, paddingBottom: 0 }]} key={index}>{value.name}</Text><Text style={styles.dataDate}>{value.date}</Text></View>
                        })}
                    </View>
                    <View style={styles.paid}>
                        <Text style={styles.cattext}>Paid</Text>
                        {matcharray.map((value, index) => {
                            return <View key={value.num} style={styles.dataContainer}><Text style={styles.data} key={index}>₹{value.paid}</Text></View>
                        })}
                    </View>
                    <View style={styles.won}>
                        <Text style={styles.cattext}>Won</Text>
                        {matcharray.map((value, index) => {
                            return <View key={value.num} style={styles.dataContainer}><Text style={styles.data} key={index}>₹{value.won}</Text></View>
                        })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    maincontainer: {
        backgroundColor: '#000',
        flex: 1,
    },
    contentView: {
        width: Dimensions.get('window').width,
        maxWidth: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cattext: {
        color: appstyles.white,
        paddingHorizontal: 12,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#111111'
    },
    place: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    match: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    paid: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    won: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    dataContainer: {
        borderBottomColor: appstyles.colorGrey,
        borderBottomWidth: 0.5,
        minHeight: 60
    },
    data: {
        color: appstyles.white,
        marginVertical: 10,
        paddingBottom: 15,
        paddingHorizontal: 12,
        fontSize: Platform.OS === "ios" ? 14 : (Dimensions.get('window').height < 650 ? 0.03 * Dimensions.get('window').width : 0.035 * Dimensions.get('window').width)
    },
    dataDate: {
        paddingHorizontal: 12,
        color: appstyles.colorGrey,
        opacity: 0.7,
        marginTop: 2,
        paddingBottom: 5,
        fontSize: 10
    }
})

export default statScreen