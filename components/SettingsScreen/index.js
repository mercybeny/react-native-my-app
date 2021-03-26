import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { colors, ListItem, Avatar, Icon } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

const stylesI = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 450,
        height: 200,
        resizeMode: 'stretch',
    },
});


const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={[styles.container, {

                flexDirection: "column"
            }]}>
                <View style={{ alignItems: 'center' }}>
                    <Avatar
                        title='HL'
                        size="xlarge"
                        rounded
                        source={{
                            uri: 'abc',
                        }}
                    />
                    <Text style={{ margin: 10, fontSize: 30 }}>Hoàng Long</Text>
                </View>

                <View style={{ flex: 2, justifyContent: 'center', borderTopWidth: 1, borderTopColor: "#20232a" }}>
                    <Text style={{ fontStyle: 'italic', marginTop: 10 }}>Email:</Text>
                    <Text style={{ margin: 10, fontSize: 20 }}>nguyenhoanglongcda@gmail.com</Text>
                    <Text style={{ fontStyle: 'italic' }}>Họ và tên:</Text>
                    <Text style={{ margin: 10, fontSize: 20 }}>Nguyễn Hoàng Long</Text>
                    <Text style={{ fontStyle: 'italic' }}>Điện thoại:</Text>
                    <Text style={{ margin: 10, fontSize: 20 }}>0904648401</Text>
                </View>
                <View style={{ flex: 1, borderTopColor: "#20232a", borderTopWidth: 1 }}>

                    <Text style={{ fontSize: 20, marginTop: 10 }}>CÀI ĐẶT TÀI KHOẢN</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name='lock'
                            color='black'
                            style={{ marginTop: 10 }}
                        />
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20 }}
                            onPress={() => {
                                navigation.navigate("ChangePassword");
                            }}>Thay đổi mật khẩu</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name='logout'
                            color='black'
                            style={{ marginTop: 10 }}
                        />
                        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20 }}
                            onPress={() => {
                                alert('Developing!!!');
                            }}>Đăng xuất</Text>
                    </View>

                </View>

            </View >
        </ScrollView>

    );

}




export default SettingsScreen
