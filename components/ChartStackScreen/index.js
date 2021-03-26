import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChartScreen from '../ChartScreen';

const ChartStack = createStackNavigator();

const ChartStackScreen = () => {
    return (
        <ChartStack.Navigator>
            <ChartStack.Screen name="Biểu đồ" component={ChartScreen}
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
        </ChartStack.Navigator>
    );
}

export default ChartStackScreen


