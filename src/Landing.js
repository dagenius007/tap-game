import React, { Component } from "react";
import Play from "./Play";
import { StyleSheet, View, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import { Route, Link } from "react-router-native";

export default class Landing extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      counter: 0,
      isCounting: true,
      isSubtracting: false
      //   startpoint: 0,
      //   endpoint: 0
    };
  }

  render() {
    return (
      <Container>
        <Image
          source={require("./img/BG.png")}
          style={{
            height: 400,
            width: 400
          }}
        />
        <View
          style={{
            marginTop: 20,
            flex: 0.5,
            justifyContent: "center",
            alignItems: "center",
            height: 100
          }}
        >
          <View>
            <Button
              style={{
                backgroundColor: "#ea5b7a",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 45,
                paddingRight: 45
              }}
            >
              <Link to="/play">
                <Text style={{ fontSize: 20 }}>Start</Text>
              </Link>
            </Button>
          </View>
          {/* <View style={styles.buttons}>
            <Button
              style={{
                backgroundColor: "#ea5b7a",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 45,
                paddingRight: 45
              }}
            >
              <Link to="/play">
                <Text style={{ fontSize: 20 }}>Next</Text>
              </Link>
            </Button>
          </View> */}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1
  },
  buttons: {
    marginTop: 20
  }
});
