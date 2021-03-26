import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../SettingsScreen';
import ChangePasswordScreen from '../ChangePasswordScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Cài đặt" component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                }}

            />
            <SettingsStack.Screen name="ChangePassword" component={ChangePasswordScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                }}
            />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen


