import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
const ContactScreen = ({ route }) => {

    console.log('Route', route);
    const { key } = route.params;
    return (
        <ScrollView>
            <View style={[styles.container, {
                flexDirection: "column"
            }]}>
                <View style={{ flex: 1.5, backgroundColor: "white" }}>
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Avatar
                            title={key[0]}
                            size="xlarge"
                            rounded
                            source={{
                                uri: 'abc',
                            }}
                        />
                        <Text style={{ margin: 10, fontSize: 30 }}>{key}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", borderBottomWidth: 1, borderColor: 'lightgray' }}>
                    <View style={[styles.container, {
                        flexDirection: "row"
                    }]}>
                        <View style={{ flex: 1, backgroundColor: "white" }}>
                            <Button title='Call'
                                onPress={() => {
                                    alert('Developing!');
                                }} />
                        </View>
                        <View style={{ flex: 1, backgroundColor: "white" }}>
                            <Button title='Message'
                                onPress={() => {
                                    alert('Developing!');
                                }} />
                        </View>
                        <View style={{ flex: 1, backgroundColor: "white" }}>
                            <Button title='More'
                                onPress={() => {
                                    alert('Developing!');
                                }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
                    <Text style={{ fontStyle: 'italic', margin: 10 }}>Email:</Text>
                    <Text style={{ marginLeft: 20, fontSize: 20 }}>{key}@gmail.com</Text>
                    <Text style={{ fontStyle: 'italic', margin: 10 }}>Phone:</Text>
                    <Text style={{ marginLeft: 20, fontSize: 20, marginBottom: 10 }}>{key}'s phone number</Text>
                </View>
            </View>
        </ScrollView>



    );
}



export default ContactScreen;