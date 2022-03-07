import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { getDate } from "../../helpers";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { ArrowDown } from "react-native-feather";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";


const Dashboard = ({ navigation }) => {
  let _date = new Date();

  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#85BDAF" barStyle="light-content" />
      <View style={{ backgroundColor: "#E5E5E5" }}>
        <View style={styles.calendar_container}>
          <Text style={styles.title}>For You</Text>
          <Text style={styles.current_date}>
            {getDate(new Date(), _date.getDay())} {}
          </Text>
          <View style={styles.calendar}></View>
          <TouchableOpacity
            style={styles.show_more}
            onPress={() =>
              navigation.navigate("Statistics", {
                date: _date,
              })
            }
          >
            <Text style={{ color: "#FFF", marginRight: 10 }}>Show More</Text>
            <Text>
              <Icon name={"chevron-down"} size={12} color="#FFF" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stats_container}>
        <View style={[styles.card, styles.elevation]}>
          <Text style={{ color: "#C4C4C4", fontWeight: "bold" }}>TODAY</Text>
          <View style={styles.stats}>
          <ProgressChart
          data={data}
          width={Dimensions.get("window").width - 120}
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
          hideLegend={false}
        />
          </View>
          <TouchableOpacity
            style={styles.more}
            onPress={() =>
              navigation.navigate("Statistics", {
                date: _date,
              })
            }
          >
            <Text style={{ color: "#C4C4C4", marginRight: 10 }}>More</Text>
            <Text>
              <Icon name={"chevron-right"} size={12} color="#C4C4C4" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.elevation]}></View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85BDAF",
  },
  calendar_container: {
    width: "100%",
    height: 329,
    backgroundColor: "#85BDAF",
    borderBottomLeftRadius: 50,
    paddingTop: 30,
    paddingLeft: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
    lineHeight: 36,
  },
  current_date: {
    fontSize: 16,
    color: "#FFF",
    lineHeight: 26,
  },
  calendar: {},
  show_more: {
    position: "absolute",
    bottom: 18,
    right: 30,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  more: {
    position: "absolute",
    bottom: 15,
    right: 15,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
  },
  stats_container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E5E5E5",
    borderTopRightRadius: 50,
    padding: 30,
  },
  card: {
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 15,
  },
  shadow_prop: {
    shadowColor: "rgba(208, 200, 200, 0.2)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: "grey",
  },
  stats: {
    marginBottom: 10,
  },
});
