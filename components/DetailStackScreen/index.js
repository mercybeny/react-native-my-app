import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../DetailScreen';

const DetailStack = createStackNavigator();

const DetailStackScreen = () => {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen name="Detail" component={DetailScreen}
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
        </DetailStack.Navigator>
    );
}

export default DetailStackScreen


