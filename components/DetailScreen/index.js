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
    // thich hien thi cai gi thi goi ra : name, subtitle,avatar...
    return (

        <View>
            <ScrollView style={{ margin: 10 }}>

                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{key.subtitle}</Text>
                <Text> </Text>
                <Text style={{ fontStyle: 'italic' }}>{key.creatOn}</Text>
                <Text> </Text>
                <Text
                    style={{ fontStyle: 'italic', textDecorationLine: "underline" }}
                    onPress={linkingWeb}
                >
                    {key.link}
                </Text>
                <Text> </Text>
                <Text>{key.content}</Text>
                <Text> </Text>
                <Text>{key.content}</Text>
                <Text> </Text>
                <Text>{key.content}</Text>

            </ScrollView>
        </View>

    )
}
export default DetailScreen;