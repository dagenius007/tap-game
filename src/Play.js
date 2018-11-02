import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Route , Link } from "react-router-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text
} from "native-base";

export default class Play extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      counter: 100,
      isCounting: true,
      isSubtracting: false,
      //   startpoint: 0,
      //   endpoint: 0
    };

    this.AddCounter = this.AddCounter.bind(this);
    this.SubCounter = this.SubCounter.bind(this);

    this.interval = setInterval(() => {
      if (this.state.counter === this.state.endpoint) {
        this.setState({
          isSubtracting: true
        });
      } else if (this.state.counter <= this.state.startpoint) {
        this.setState({
          isSubtracting: false
        });
      }

      this.setState(previousState => {
        if (this.state.counter === 0) {
          this.setState({
            isCounting: false
          });
          // console.log(this.state.isCounting);
        } else {
          return { counter: previousState.counter - 1 };
        }
      });
    }, 100);
  }
  componentWillMount() {
    let diff = 0;
    while (diff != 10) {
      let startpoint = Math.floor(Math.random() * 100 + 1);
      let endpoint = Math.floor(Math.random() * 100 + 1);
      diff = endpoint - startpoint;
      if (diff === 10) {
        this.setState({
          startpoint: startpoint,
          endpoint: endpoint
        });
      }
    }
  }

  componentDidUpdate() {
    if (!this.state.isCounting) {
      clearInterval(this.interval);
    }
  }

  AddCounter() {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
    // }
  }
  SubCounter() {
    if (this.state.value <= 0) {
      this.setState({
        value: 0
      });
    } else {
      this.setState(prevState => ({
        value: prevState.value - 5
      }));
    }
  }
  renderButton() {
    console.log(this.state.startpoint);
    if (!this.state.isCounting) {
      return (
        <View style={styles.button}>
          <Button
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 45,
              paddingRight: 45
            }}
          >
            <Text style={{ fontSize: 15 }}>Done</Text>
          </Button>
          <Button
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 45,
              paddingRight: 45,
              marginTop: 20
            }}
          >
            <Text style={{ fontSize: 15 }}>Retry</Text>
          </Button>
        </View>
      );
    } else if (this.state.isSubtracting) {
      return (
        <View style={styles.button}>
          <Button
            onPress={this.SubCounter}
            danger
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 45,
              paddingRight: 45,
              marginTop: 20
            }}
          >
            <Text style={{ fontSize: 15 }}>Dont Tap</Text>
          </Button>
        </View>
      );
    } else {
      return (
        <View>
          <Button onPress={this.AddCounter}>
            <Text style={{ fontSize: 15 }}>Tap</Text>
          </Button>
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header>
          <Left>
            <Button transparent>
            <Link to="/">
              <Icon name="arrow-back" />
              </Link>
            </Button>
          </Left>
          <Body>
            <Title>LEVEL 1</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <View style={styles.content}>
          <View style={styles.center}>
            <Text style={{
              fontSize: 30
            }}>
              Goal : <Text style={styles.text}>30</Text>
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#d6d7da",
              marginTop: 30,
              padding: 3,
              borderRadius: 5
            }}
          >
            <View
              style={{
                height: 20,
                backgroundColor: this.state.counter > 30 ?"#37ba50" : "#ff0000",
                width: `${this.state.counter}%`,
                borderRadius: 5
              }}
            />
          </View>

          <View style={styles.card}>
            <Text style={{ fontSize: 180, color: "#f24449" }}>
              {this.state.value}
            </Text>
          </View>

          <View style={styles.center}>{this.renderButton()}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 15,
    textAlign: "center"
  },
  card: {
    height: 215,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#dee7f4",
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    marginTop: 30,
    fontSize: 30,
    color: "red"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  goal: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: "#185bc3",
    backgroundColor: "#f0f1f5",
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "red",
    shadowOffset: { height: 0, width: 0 }
  }
});
