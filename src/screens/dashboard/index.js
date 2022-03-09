import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
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
import { IMAGES } from "../../constants";
const screenWidth = Dimensions.get("window").width;

const Dashboard = ({ navigation }) => {
  let _date = new Date();

  const data = {
    labels: [
      "Mental Health",
      "Satisfaction",
      "Family/Social Support",
      "Work",
      "Sense of Purpose",
    ], // optional
    data: [0.2, 0.1, 0.8, 0.7, 0.9],
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#85BDAF" barStyle="light-content" />
      <View style={{ backgroundColor: "#E5E5E5" }}>
        <View style={styles.calendar_container}>
          <Text style={styles.title}>For You</Text>
          <Text style={styles.current_date}>
            {getDate(new Date(), _date.getDay())} {}
          </Text>
          <View style={styles.calendar}>
            <Calendar
              current={"2012-03-01"}
              onDayPress={(day) => {
                navigation.navigate("Statistics", {
                  date: day,
                })
              }}
              onDayLongPress={(day) => {
                navigation.navigate("Statistics", {
                  date: day,
                })
              }}
              monthFormat={"yyyy MM"}
              onMonthChange={(month) => {
                console.log("month changed", month);
              }}
              hideArrows={true}
              renderArrow={(direction) => (
                <Text>
                  <Icon name={`chevron-${direction}`} size={12} color="#FFF" />
                </Text>
              )}
              hideExtraDays={true}
              disableMonthChange={true}
              firstDay={1}
              hideDayNames={false}
              showWeekNumbers={true}
              onPressArrowLeft={(subtractMonth) => subtractMonth()}
              onPressArrowRight={(addMonth) => addMonth()}
              disableArrowLeft={false}
              disableArrowRight={false}
              disableAllTouchEventsForDisabledDays={true}
              renderHeader={(date) => {
                <View>{date}</View>;
              }}
              style={{
                // height: 137,
                width: screenWidth-60,
                borderRadius: 20,
                backgroundColor:
                  "radial-gradient(87.58% 209.18% at 6.09% 10.16%, rgba(188, 217, 209, 0.6) 0%, rgba(188, 217, 209, 0.6) 100%)",
              }}
              enableSwipeMonths={true}
            />
          </View>
          <TouchableOpacity
            style={styles.show_more}
            onPress={() =>
              navigation.navigate("Statistics", {
                date: _date,
              })
            }
          >
            <Text style={{ color: "#FFF", marginRight: 10, fontSize: 12 }}>
              Show More
            </Text>
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
              width={screenWidth - 90}
              height={180}
              strokeWidth={8}
              chartConfig={{
                //backgroundColor: '#478438',
                backgroundGradientFrom: "#FFF",
                backgroundGradientTo: "#FFF",
                //decimalPlaces: 2,
                color: (opacity = 1) => `rgba(227, 168, 159, ${opacity})`,
              }}
              style={{
                borderRadius: 15,
              }}
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
            <Text style={{ color: "#C4C4C4", marginRight: 10, fontSize: 12 }}>
              More
            </Text>
            <Text>
              <Icon name={"chevron-right"} size={12} color="#C4C4C4" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.elevation, { paddingBottom: 40 }]}>
          <Text
            style={{
              color: "#C4C4C4",
              lineHeight: 26,
              fontSize: 12,
              marginBottom: 15,
            }}
          >
            Your Wellness plan
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 115,
                width: 84,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Image source={IMAGES.wellnes_plan} />
              <View style={styles.image_component}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 22,
                    color: "#FFF",
                    fontWeight: "bold",
                  }}
                >
                  Veronicah N.
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 22,
                    color: "#FFF",
                    marginBottom: 5,
                  }}
                >
                  Shamiri Licensed
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 115,
                width: 84,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={IMAGES.wellnes_plan} />
              <View style={styles.image_component}>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 22,
                    color: "#FFF",
                    fontWeight: "bold",
                  }}
                >
                  Veronicah N.
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    lineHeight: 22,
                    color: "#FFF",
                    marginBottom: 5,
                  }}
                >
                  Shamiri Licensed
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.more}
            onPress={() =>
              navigation.navigate("Statistics", {
                date: _date,
              })
            }
          >
            <Text style={{ color: "#C4C4C4", marginRight: 10, fontSize: 12 }}>
              More
            </Text>
            <Text>
              <Icon name={"chevron-right"} size={12} color="grey" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  calendar: {
    // paddingTop: 20,
    // paddingBottom: 20,
    height: 200,
    borderRadius: 20,
  },
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
  image_component: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    backgroundColor: "#53A08C",
    opacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  more: {
    position: "absolute",
    bottom: 0,
    right: 20,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
});
