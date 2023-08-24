import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, StyleSheet, Pressable, Button, useColorScheme } from 'react-native';
import Feed from './screens/tabScreens/Feed';
import Notifications from './screens/tabScreens/Notifications';
import Settings from './screens/tabScreens/Settings';
import {Ionicons} from '@expo/vector-icons';
import TweetDetailsScreen from './screens/homeStack/TweetDetailsScreen';
import Payments from './screens/drawerScreens/Payments';

// Material Top Tab Navigation
const TopTabs = createMaterialTopTabNavigator();

function TopTabGroup() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 10 }}
                        source={{
                            uri: 'data:image/jpeg;base64,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',
                        }}
                    />  
                </Pressable>
            ),
            headerRight: () => <Button title="New Tweet" onPress={() => navigation.navigate('NewTweetScreen')} />,
        });
    }, [navigation]);


    return (
        <TopTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size}) => {
                    let iconName;
                    let colorName;

                    if (route.name === 'main') {
                        iconName = focused ? 'list' : 'list-outline';
                        colorName = focused ? '#1DA1F2' : 'gray';
                    } else if (route.name === 'Following') {
                        iconName = focused ? 'person-add' : 'person-add-outline';
                        colorName = focused ? '#1DA1F2' : 'gray';
                    } else if (route.name === 'Followers') {
                        iconName = focused ? 'people' : 'people-outline';
                        colorName = focused ? '#1DA1F2' : 'gray';
                    }
                    return <Ionicons name={iconName} size={size} color={colorName} />;
                },
                tabBarActiveTintColor: '#1DA1F2',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: '#1DA1F2',
                    height: 1,

                },
            
            })}
        >
            <TopTabs.Screen name="main" component={Feed} />
            <TopTabs.Screen name="Following" component={Payments} />
            <TopTabs.Screen name="Followers" component={Settings} />
        </TopTabs.Navigator>
    );
}

// Stack Navigation
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="TabGroup" component={TabGroup} options={
                { headerShown: false 
                }
            } />
            <HomeStack.Screen name="TweetDetailsScreen" component={TweetDetailsScreen} 
            
            />
        </HomeStack.Navigator>
    );
}

// Tab Bottom Navigation
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, focused, size}) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Notifications') {
                        iconName =  focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'ios-settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#1DA1F2',
                tabBarInactiveTintColor: 'gray',
            
            })} >
            <Tab.Screen 
                name="Feed"
                component={TopTabGroup}
                options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

// Drawer Navigation
const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator 

            screenOptions={
                { headerShown: false , 
                drawerActiveTintColor: '#1DA1F2',
                drawerInactiveTintColor: 'gray',
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                drawerStyle: {
                    backgroundColor: '#fff',
                    width: 240,
                },
                drawerHideStatusBarOnOpen: true,
                drawerPosition: 'left',
            }
            }     
        >
            <Drawer.Screen component={ HomeStackGroup } name="HomeStackGroup" />
            <Drawer.Screen component={ Payments } name="Payments" options={{
                headerShown: true,
                headerTitle: 'Payments',
                headerTitleAlign: 'center',
                headerTintColor: '#1DA1F2',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: 'transparent',
                    elevation: 0,
                }
            }} />
            <Drawer.Screen component={ Settings } name="Settings" />
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    const currentTheme = useColorScheme();
    return (
    <NavigationContainer theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
        <DrawerGroup />
    </NavigationContainer>
    );
}