import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, SearchBar } from 'react-native-elements';
import { TouchableOpacity, Alert, Modal, StyleSheet, Text, Pressable, View, Linking } from 'react-native'
import HomeScreen from '../HomeScreen';
import DetailScreen from '../DetailScreen';
import { Button } from 'react-native';


const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState(false)
    const onHandleSearch = () => {
        setSearch(true)
    }

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Tin Tức" component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <TouchableOpacity onPress={onHandleSearch}>
                            {search ?
                                <SearchBar
                                    placeholder="Search"
                                    onChangeText={setSearch}
                                    value={search}
                                    lightTheme={true}
                                /> :
                                <Icon
                                    style={{ marginRight: 15 }}
                                    name='ios-search-outline'
                                    type='ionicon'
                                    color='#fff'
                                />
                            }
                        </TouchableOpacity>
                    ),
                }}
            />
            <HomeStack.Screen name="Detail" component={DetailScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>

                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => {
                                                alert('Copied!');
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Copy link</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Share</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Save</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Change type</Text>
                                        </Pressable>

                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.textStyle}>Close!</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </Modal>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={styles.textStyle}>...</Text>
                            </Pressable>
                        </View>
                    ),
                }}
            />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 1,
        width: 200
    },
    buttonOpen: {
        backgroundColor: "#f4511e",
        width: 40
    },
    buttonClose: {
        backgroundColor: "#f4511e",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default HomeStackScreen
