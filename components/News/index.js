import React from 'react';
import { StyleSheet, SectionList, View, FlatList, Text } from 'react-native';
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
const News = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {
                        title: 'Hoc dot', data: [
                            { id: 'PH10704', name: 'Đàm Việt Tiến', email: 'tiendvph10704@fpt.edu.vn' },
                            { id: 'PH14832', name: 'Đoàn Văn Đông', email: 'dongdvph14832@fpt.edu.vn' },
                            { id: 'PH15513', name: 'Trần Minh Quân', email: 'quantmph15513@fpt.edu.vn' },
                            { id: 'PH15857', name: 'Đỗ Xuân Tuấn Long', email: 'longdxtph15857@fpt.edu.vn' }
                        ]
                    }, // Item
                    {
                        title: 'Hoc gioi', data: [
                            { id: 'PH10704', name: 'Đàm Việt Tiến', email: 'tiendvph10704@fpt.edu.vn' },
                            { id: 'PH14832', name: 'Đoàn Văn Đông', email: 'dongdvph14832@fpt.edu.vn' },
                            { id: 'PH15513', name: 'Trần Minh Quân', email: 'quantmph15513@fpt.edu.vn' },
                            { id: 'PH15857', name: 'Đỗ Xuân Tuấn Long', email: 'longdxtph15857@fpt.edu.vn' }
                        ]
                    }// Item

                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default News
