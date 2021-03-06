import React from 'react';
import { View, Text, FlatList, Image, Linking } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { ScrollView } from 'react-native-gesture-handler';


const DetailScreen = ({ route }) => {
    // da nhan du lieu 
    console.log('Route', route);
    const { key } = route.params;
    const linkingWeb = () => {
        return (Linking.openURL(key.link))
    }
    // tuong tu: const key = route.params.keys
    return (

        <View>
            <ScrollView style={{ margin: 10 }}>

                <Text selectable style={{ fontSize: 20, fontWeight: "bold" }}>{key.subtitle}</Text>
                <Text> </Text>
                <Text selectable style={{ fontStyle: 'italic' }}>{key.creatOn}</Text>
                <Text> </Text>
                <Text selectable
                    style={{ fontStyle: 'italic', textDecorationLine: "underline" }}
                    onPress={linkingWeb}
                >
                    {key.link}
                </Text>
                <Text> </Text>
                <Text selectable>{key.content}</Text>
                <Text> </Text>
                <Text selectable>{key.content}</Text>
                <Text> </Text>
                <Text selectable>{key.content}</Text>
                <Text>{key.type}</Text>

            </ScrollView>
        </View>

    )
}
export default DetailScreen;