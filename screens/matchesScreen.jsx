import * as React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// component
import Header from "../components/header"
import Card from "../components/challangecard"
// appstyles
import appstyles from "../styles/appstyles"

const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }} style={[styles.scene, { marginVertical: 10 }]}>
        <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true} />
    </ScrollView>
);

const SecondRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }} style={[styles.scene, { marginVertical: 10 }]}>
        <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true} />
        <Card source={require("../assets/images/freefire.jpg")} title="Free Fire - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true} />
    </ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

const matchesScreen = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'ongoing', title: 'ONGOING' },
        { key: 'completed', title: 'COMPLETED' },
    ]);

    const renderScene = SceneMap({
        ongoing: FirstRoute,
        completed: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: appstyles.primaryRed }}
            style={{ backgroundColor: appstyles.darkThemeColor }}
        />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: appstyles.darkThemeColor }}>
            <Header headTxt="My Matches" context={false} navigation={navigation} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
                lazy={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flex: 1,
        backgroundColor: "#000"
    },
    scene: {
        flex: 1,
    },
});

export default matchesScreen
