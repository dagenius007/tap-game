import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route,Switch } from "react-router-native";
import Landing from "./src/Landing";
// import { Switch } from "native-base";
import Play from "./src/Play";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/play" component={Play} /> 
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
