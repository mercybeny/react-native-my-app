import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../MessageScreen';
import { TouchableOpacity, View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import ContactScreen from '../ContactScreen';


const MessagesStack = createStackNavigator();

const MessagesStackScreen = () => {


    return (
        <MessagesStack.Navigator>
            <MessagesStack.Screen name="Danh bạ" component={MessagesScreen}
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
            <MessagesStack.Screen name="Contact" component={ContactScreen}
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
        </MessagesStack.Navigator>
    );
}

export default MessagesStackScreen