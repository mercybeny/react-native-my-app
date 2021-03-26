import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const dataPieChart = [
    {
        name: "Tiêu cực",
        population: 157,
        color: "#0066CC",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Trung lập",
        population: 316,
        color: "lightgray",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Tích cực",
        population: 659,
        color: "#FF9933",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const dataBarChart = {
    labels: ["20/03", "21/03", "22/03", "23/03", "24/03"],
    legend: ["Tích cực", "Tiêu cực", "Trung lập"],
    data: [
        [160, 80, 40],
        [100, 50, 30], [150, 70, 40],
        [130, 80, 60], [100, 70, 30]
    ],
    barColors: ["#FF9933", "lightgray", "#0066CC"]
};

const ChartScreen = () => {
    return (
        <ScrollView>
            <View style={[styles.container, {
                flexDirection: "column"
            }]}>

                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", padding: 10, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
                        <Icon
                            name="camera"
                            color="black"
                            onPress={() => {
                                alert("Developing!!!");
                            }}
                        />
                        <Text style={{ flex: 1, marginLeft: 10 }}>DateAndTime</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", borderBottomColor: 'lightgray', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ text: 'center' }}>
                        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 10, fontWeight: 'bold' }}>Số lượng nội dung đề cập</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1 }}>Báo chí, tin tức</Text>
                        <Text>224</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ flex: 1 }}>Mạng xã hội</Text>
                        <Text>465</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ flex: 1 }}>Nguồn khác</Text>
                        <Text>329</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ flex: 1 }}>Tổng số</Text>
                        <Text>1018</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 10, fontWeight: "bold" }}>Diễn biến nội dung</Text>
                    <LineChart
                        data={{
                            labels: ["20/03", "21/03", "22/03", "23/03", "24/03"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width}
                        //width={420}
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,

                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            marginTop: 30
                        }}
                    />
                    <Text style={{ textAlignVertical: "center", textAlign: "center", fontStyle: 'italic' }}>Biểu đồ số lượng bài viết liên quan</Text>
                    <Text style={{ margin: 10 }}>
                        Nhận xét:   Số lượng bài viết liên quan đến chủ đề tìm kiếm có chiều hướng TĂNG/GIẢM tính từ THỜI GIAN - THỜI GIAN
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
                    <PieChart
                        data={dataPieChart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        absolute
                        style={{ marginTop: 20 }}
                    />
                    <Text style={{ textAlignVertical: "center", textAlign: "center", fontStyle: 'italic' }}>Biểu đồ phân loại bài liên quan đến chủ đề</Text>
                    <Text style={{ marginTop: 10 }}>
                        Nhận xét:   Số lượng bài viết tích cực chiếm A % tổng số bài viết liên quan đến chủ đề tìm kiếm,
                        số lượng bài viết mang tính trung lập chiếm B % và số lượng bài viết tiêu cực chiếm C %
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <StackedBarChart
                        style={{
                            backgroundColor: 'white',
                            marginTop: 20,
                        }}
                        data={dataBarChart}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}

                    />
                    <Text style={{ textAlignVertical: "center", textAlign: "center", fontStyle: 'italic', marginTop: 10 }}>Biểu đồ chi tiết tổng số bài viết tính theo từng ngày</Text>
                    <Text style={{ marginTop: 10 }}>
                        Nhận xét:   Tổng số bài viết TÍCH CỰC có xu hướng TĂNG/GIẢM, số bài viết TRUNG LẬP có xu hướng TĂNG/GIẢM,
                        số bài viết TIÊU CỰC có xu hướng TĂNG/GIẢM trong khoảng từ THỜI GIAN - THỜI GIAN
                    </Text>
                </View>

            </View>
        </ScrollView >
    );
}

export default ChartScreen
