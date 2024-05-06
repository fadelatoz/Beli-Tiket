import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import React, { useRef } from 'react';

import HomeScreen from '../pages/HomeScreen';
import SplashScreen from '../pages/SplashScreen';
import CartScreen from '../pages/CartScreen';
import Headers from '../components/Headers';
import { FavoriteScreen, SettingScreen } from '../pages';
import BottomTabs from '../components/molecules/BottomTabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()


const MainApp = ({route}) => {
    const {data} = route.params
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabs {...props} />}>
            <Tab.Screen name='Home' component={FavoriteScreen} />
            <Tab.Screen name='FavoriteScreen' component={HomeScreen} />
            <Tab.Screen name='CartScreen' component={CartScreen} />
            <Tab.Screen name='SettingScreen' component={SettingScreen} />
        </Tab.Navigator>
    )
}

function Router() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ navigation }) => <Headers navigation={navigation} />,
            }}>
            <Stack.Screen options={{headerShown : false}} name="SplashScreen" component={SplashScreen} />
            {/* {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Router