import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import { Container, Button, Text, Spinner } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/image/masan-logo.jpg");

class Loading extends Component {

  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize(){
    const {user} = this.props;
  }

  componentDidMount(){
    setTimeout( () => {
      if(!this.props.user){
        this.props.navigation.navigate("Survey");
      }else{
        this.props.navigation.navigate("Login");
      }
    },500);
  }

  render() {
    return (
      <Container style={styles.container}>
        <View>
          <Image source={require('@assets/masan.png')} style={{height: 130, width: null, marginTop: 30}}/>
          <Spinner style={styles.spinner}/>
        </View>
      </Container>
    );
  }
}

export default Loading;
