import React, { useState } from 'react';
import { RefreshControl, FlatList, StyleSheet, View, Text, SectionList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const MessagesScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    return (
        <View style={styles.container}>
            <SectionList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }

                sections={[
                    { title: 'A', data: ['Alan', 'Acivi', 'Alpha'] },
                    { title: 'B', data: ['Binz', 'Bigdata', 'BigDaddy'] },
                    { title: 'C', data: ['Conan', 'Coco', 'Country'] },
                    { title: 'D', data: ['Devil', 'Dan', 'Dominic'] },
                    { title: 'E', data: ['Evil', 'Eva', 'Evos'] },
                    { title: 'F', data: ['Forgive', 'Forever', 'Fine'] },
                    { title: 'G', data: ['Givichy', 'Giveaway', 'Geveta'] },
                    { title: 'H', data: ['Highland', 'Hill', 'Havana'] },
                    { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                ]}

                renderItem={({ item }) => <Text onPress={() => {
                    navigation.navigate("Contact", { key: item });
                }}
                    style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default MessagesScreen
