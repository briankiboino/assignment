import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const WeeklyStatistics = ({}) => {
  const data = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [0, 2, 4, 6, 8],
      },
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
  };

  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.title}>Mental Heath</Text>
      </View>
      <View style={styles.numbers_container}>
        <View>
          <Text style={{ marginBottom: 20 }}>Weekly Average</Text>
          <Text style={styles.number}>6</Text>
        </View>
        <View>
          <Text style={{ marginBottom: 20 }}>Weekly-over-week</Text>
          <Text style={styles.number}>20%</Text>
        </View>
        <View>
          <Text style={{ marginBottom: 20 }}>Goal</Text>
          <Text style={styles.number}>6</Text>
        </View>
      </View>
      <View style={styles.chart}>
        <BarChart
          //   style={graphStyle}
          data={data}
          width={Dimensions.get("window").width - 60}
          height={220}
          withInnerLines={false}
          chartConfig={{
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#FFF",
            backgroundGradientToOpacity: 0.1,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `#E3A89F`,
            labelColor: (opacity = 1) => `grey`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "##F6E9E7",
            },
          }}
          verticalLabelRotation={0}
        />
      </View>
    </View>
  );
};

export default WeeklyStatistics;

const styles = StyleSheet.create({
  title_container: {
    marginTop: 15,
    marginBottom: 15,
  },
  numbers_container: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  number: {
    color: "#E3A89F",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
  },
});
