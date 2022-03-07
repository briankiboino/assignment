import React, { useState } from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import DailyStatistics from "./daily";
import WeeklyStatistics from "./weekly";

const Statistics = ({ date, navigation, route }) => {
  const [tab, setTab] = useState(1);

  const getContent = () => {
    switch (tab) {
      case 1:
        return <DailyStatistics />;
      default:
        return <WeeklyStatistics />;
    }
  };

  function renderHeader() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#E5E5E5" />
        <View style={styles.header}>
          <Text onPress={() => navigation.goBack()}>
            <Icon name={"chevron-left"} size={23} color="grey" />
          </Text>
          <Text>{route.params.date.getFullYear()}</Text>
          <Text>{/* {route.params.date.getFullYear()} */}</Text>
        </View>
      </React.Fragment>
    );
  }

  function renderContent() {
    return (
      <View style={styles.content}>
        <View style={styles.nav}>
          <TouchableOpacity
            style={[
              styles.tab_button,
              tab === 1 ? styles.active : styles.inactive,
            ]}
            onPress={() => setTab(1)}
          >
            <Text>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab_button,
              tab === 2 ? styles.active : styles.inactive,
            ]}
            onPress={() => setTab(2)}
          >
            <Text>Weekly</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statistics}>{getContent()}</View>
      </View>
    );
  }

  return (
    <View>
      {renderHeader()}
      {renderContent()}
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#E5E5E5",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    borderColor: "grey",
    borderBottomWidth: 0.5,
  },
  content: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  nav: {
    borderRadius: 20,
    backgroundColor: "#F6E9E7",
    height: 40,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    width: "100%",
  },
  tab_button: {
    width: "49%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height:'100%'
  },
  active: {
    backgroundColor: "#FFF",
  },
  inactive: {},
  statistics: {
    paddingTop: 20,
    paddingBottom: 20,
  }
});
