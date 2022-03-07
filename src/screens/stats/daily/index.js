import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const DailyStatistics = ({}) => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };

  return (
    <React.Fragment>
      <View style={styles.chart}>
        <ProgressChart
          data={data}
          width={Dimensions.get("window").width - 60}
          height={220}
          strokeWidth={16}
          radius={32}
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
          hideLegend={true}
        />
      </View>
      <View style={[styles.card, styles.elevation]}>
        <View style={styles.single_metric}>
          <View style={styles.metric_header}>
            <Text>Mental Health</Text>
            <Text>8/10</Text>
          </View>
          <ProgressBar
            progress={8 / 10}
            color={"#F6E9E7"}
            style={styles.progress_bar}
          />
        </View>
        <View style={styles.single_metric}>
          <View style={styles.metric_header}>
            <Text>Satisfaction</Text>
            <Text>2.5/10</Text>
          </View>
          <ProgressBar
            progress={2.5 / 10}
            color={"#E3A89F"}
            style={styles.progress_bar}
          />
        </View>
        <View style={styles.single_metric}>
          <View style={styles.metric_header}>
            <Text>Family/Social Support</Text>
            <Text>4.5/10</Text>
          </View>
          <ProgressBar
            progress={4.5 / 10}
            color={"#BCD9D1"}
            style={styles.progress_bar}
          />
        </View>
        <View style={styles.single_metric}>
          <View style={styles.metric_header}>
            <Text>Work</Text>
            <Text>6/10</Text>
          </View>
          <ProgressBar
            progress={6 / 10}
            color={"#85BDAF"}
            style={styles.progress_bar}
          />
        </View>
        <View style={styles.single_metric}>
          <View style={styles.metric_header}>
            <Text>Sense of Purpose</Text>
            <Text>4/10</Text>
          </View>
          <ProgressBar
            progress={4 / 10}
            color={"#143029"}
            style={styles.progress_bar}
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default DailyStatistics;

const styles = StyleSheet.create({
  card: {
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 15,
    marginTop: 30
  },
  elevation: {
    // elevation: 20,
    // shadowColor: "grey",
  },
  stats: {
    marginBottom: 10,
  },
  single_metric: {
    marginBottom: 20,
  },
  progress_bar: {
    height: 15,
    borderRadius: 20,
  },
  metric_header: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
