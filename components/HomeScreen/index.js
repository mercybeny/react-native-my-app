import React, { useState } from 'react';
import { Button } from 'react-native';
import { RefreshControl, FlatList, StyleSheet, View, Text, Linking, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { Card } from 'react-native-elements'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    searchAndOption: {

        alignItems: 'center',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    }
});

const stylesModal = StyleSheet.create({
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
        backgroundColor: "transparent"
    },
    buttonClose: {
        backgroundColor: "#f4511e",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
const HomeScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");
    const keyExtractor = (item, index) => index.toString();
    const filterNews = (status) => {
        console.log(status);
        const newList = list.filter(item => item.type == status);
        setList(newList);
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const [list, setList] = useState([
        {
            name: 'bai viet dau tien',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Within the space of a few days, the rollout of the Oxford-AstraZeneca Covid-19 vaccine has ground to a standstill in virtually all of western Europe.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '13:35 GMT March 24, 2021',
            link: 'https://www.facebook.com/cnn/posts/10161874166516509',
            type: "tichcuc"
        },
        {
            name: 'bai viet thu 2',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The discovery of the call comes after state officials originally told CNN that they did not think audio of the call existed!',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '03:52 GMT March 24, 2021',
            link: 'https://edition.cnn.com/2021/03/14/politics/trump-phone-call-georgia-investigator-trash-folder/index.html',
            type: "tichcuc"
        },
        {
            name: 'bai viet thu 3',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Europe has taken a muddled stance towards the AstraZeneca vaccine since it was first approved for use in the European Union in late January.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '23:15 GMT March 23, 2021',
            link: 'https://www.kezi.com/content/national/573998902.html',
            type: "trunglap"
        },
        {
            name: 'bai viet thu 4',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'At the minute, Im just not seeing any reason at all why any country would pause the AstraZeneca vaccine.It doesnt really make much sense to me',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '22:51 GMT March 23, 2021',
            link: 'https://medium.com/the-mission/mastering-depression-and-living-the-life-you-were-meant-to-live-a9b4e357ddd9',
            type: "trunglap"
        },
        {
            name: 'bai viet thu 5',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The actions of European governments have surprised experts, and caused a myriad of questions among people who have had or are in line to get the shot.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '15:35 GMT March 23, 2021',
            link: 'https://edition.cnn.com/2021/03/16/health/astrazeneca-blood-clots-europe-explainer-intl/index.html',
            type: "trunglap"
        },
        {
            name: 'bai viet thu 6',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'Since then, virtually all of western Europe has stopped using the shot, but countries are reminding citizens that those decisions are precautionary!',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '08:30 GMT March 23, 2021',
            link: 'https://www.9news.com.au/world/coronavirus-cases-surge-in-europe-as-astrazeneca-vaccine-remains-on-hold/d1778a0b-6373-490c-aca1-13c376019e6d',
            type: "trunglap"
        },
        {
            name: 'bai viet thu 7',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'The agency will meet on Thursday, and the World Health Organization (WHO) is analyzing the reports on Tuesday ',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '07:25 GMT March 22, 2021',
            link: 'https://news.un.org/en/story/2020/04/1062882',
            type: "tieucuc"
        },
        {
            name: 'bai viet thu 8',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'No cases of clotting have yet been linked to the vaccine -- thats what the EMA and WHO are analyzing, and the EMA are expected to issue their advice to countries on Thursday.',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '21:30 GMT March 21, 2021',
            link: 'https://www.ema.europa.eu/en/news/covid-19-vaccine-astrazeneca-benefits-still-outweigh-risks-despite-possible-link-rare-blood-clots',
            type: "tieucuc"
        },
        {
            name: 'bai viet thu 9',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'But even the reported cases of clotting in inoculated people are very few and far between. In Denmark, one fatality prompted the initial wave of suspensions',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '17:35 GMT March 21, 2021',
            link: 'https://www.dw.com/en/coronavirus-digest-denmark-reports-two-blood-clot-cases-after-astrazeneca-jab/a-56936303',
            type: "tieucuc"
        },
        {
            name: 'bai viet thu 10',
            avatar_url: 'https://picsum.photos/200/200',
            subtitle: 'After giving out 1.7 million AstraZeneca doses, Germany has uncovered just seven cases of blood clotting',
            content: 'Fulton County District Attorney Fani Willis had sent a round of letters to Georgia state officials in February, including the Georgia Secretary of States Office, asking them to preserve documents relevant to election interference. Willis is currently conducting a criminal investigation into Trumps attempts to overturn the 2020 election results in Georgia.The secretary of states office is also separately investigating Trump for his attempts to overturn the states election results.Audio of an hour-long January 2 phone call in which Trump repeatedly pressured Republican Secretary of State Brad Raffensperger to "find" the exact number of votes needed to overturn Bidens victory surfaced soon after the call happened. But the December call only became public last week.Watson told CNN affiliate WSB-TVs investigative reporter Mark Winne that she had recorded the December call from Trump for posterity."Its not every day, that probably will never happen again in my lifetime," Watson told WSB.It is still not clear why Watson moved the audio of the call to her trash folder, but Watson told Winne that even though she was surprised Trump called her, she did not perceive any pressure from his phone call.',
            creatOn: '03:35 GMT March 20, 2021',
            link: 'https://www.unicef.org/wca/press-releases/more-17-million-covid-19-vaccines-arrive-democratic-republic-congo',
            type: "tieucuc"
        }
    ]);


    const renderItem = ({ item }) => (

        <Card>
            <Card.Image
                source={{ uri: item.avatar_url }} >
            </Card.Image>
            <Card.Title
                style={{ marginTop: 15, textAlign: 'left' }}>
                <Text onPress={() => {
                    navigation.navigate("Detail", { key: item }); // chuyen den trang co name Detail khai bao ben ngoai, tham so 2 la gia tri chuyen sang
                }}>
                    {item.subtitle}
                </Text>


            </Card.Title>
            <Text
                onPress={() => {
                    if (item.type == "tichcuc") {
                        alert(item.name + " " + item.type);
                    } else {
                        if (item.type == "trunglap") {
                            alert(item.name + " " + item.type)
                        } else {
                            if (item.type == "tieucuc") {
                                alert(item.name + " " + item.type)
                            } else {
                                return false
                            }
                        }
                    }

                }}
                style={{ fontStyle: 'italic' }}>{item.creatOn}</Text>
            <Text> </Text>
            <Text

                style={{ fontSize: 10, fontStyle: 'italic' }}
                onPress={() => Linking.openURL(item.link)}
            >
                {item.link}
            </Text>
        </Card>
    )
    //const keyExtractor = (item, index) => index.toString();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlignVertical: "center", textAlign: "center", fontWeight: 'bold' }}>{list.length} Nội dung</Text>
                </View>
                <View style={stylesModal.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={stylesModal.centeredView}>
                            <View style={stylesModal.modalView}>

                                <Pressable
                                    style={[stylesModal.button, stylesModal.buttonClose]}
                                    onPress={() => {
                                        filterNews('tichcuc');
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={stylesModal.textStyle}>Tích cực</Text>
                                </Pressable>

                                <Pressable
                                    style={[stylesModal.button, stylesModal.buttonClose]}
                                    onPress={() => {
                                        filterNews('trunglap');
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={stylesModal.textStyle}>Trung lập</Text>
                                </Pressable>

                                <Pressable
                                    style={[stylesModal.button, stylesModal.buttonClose]}
                                    onPress={() => {
                                        filterNews('tieucuc');
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={stylesModal.textStyle}>Tiêu cực</Text>
                                </Pressable>

                                <Pressable
                                    style={[stylesModal.button, stylesModal.buttonClose]}
                                    onPress={() => {
                                        alert('developing');
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={stylesModal.textStyle}>Tất cả</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[stylesModal.button, stylesModal.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={stylesModal.textStyle}>Trạng thái</Text>
                    </Pressable>
                </View>
            </View>

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
            />
        </View>
    );


}

export default HomeScreen
