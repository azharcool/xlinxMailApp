import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes, RootStackParamList } from './routes';


const Stack = createNativeStackNavigator<RootStackParamList>();

import LanguageScreen from '../screens/auth/Language';
import ActivateScreen from '../screens/auth/Activate';
import LoginScreen from '../screens/auth/Login';
import InboxScreen from '../screens/home/Inbox';

const NavContainer = () => {
    const isLoggedIn = true;

    const loginGroup = () => {
        return (
            <Stack.Group>
                <Stack.Screen name={Routes.Activate} component={ActivateScreen} />
                <Stack.Screen name={Routes.Login} component={LoginScreen} />
                <Stack.Screen name={Routes.Language} component={LanguageScreen} />
            </Stack.Group>
        )
    };

    const homeGroup = () => {
        return (
            <Stack.Group>
                <Stack.Screen name={Routes.Inbox} component={InboxScreen} />
            </Stack.Group>
        )
    };


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isLoggedIn ?
                    loginGroup() :
                    homeGroup()}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;