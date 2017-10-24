import React, { Component } from 'react';
import { View, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Right,
  Text,
} from 'native-base';
import globalStyles from '@themes/styles';
import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {autobind} from 'core-decorators';

class Survey extends Component {


  @autobind
  goToBranUse(){
    this.props.navigation.navigate('BranUse');
  }

  @autobind
  goToCompleteSurvey() {
    this.props.navigation.navigate('CompleteSurvey');
  }

  @autobind
  goToIncompleteSurvey(){
    this.props.navigation.navigate('IncompleteSurvey');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={{
            ...globalStyles.h2,
            ...globalStyles.textCenter,
            ...globalStyles.marginTop30,
            ...styles.mb
          }}>KHẢO SÁT TRẠI</Text>
          <View>
            <Button block iconLeft primary style={{ marginBottom: 10, margin: 10 }} onPress={this.goToBranUse}>
              <FontAwesome style={globalStyles.iconInput} name='list' />
              <Text>Khảo Sát</Text>
            </Button>
            <Button block iconLeft warning style={{ marginBottom: 10, margin: 10 }} onPress={this.goToIncompleteSurvey}>
              <FontAwesome style={globalStyles.iconInput} name='warning' />
              <Text>Khảo Sát Chưa Hoàn Thành</Text>
            </Button>
            <Button block iconLeft success style={{ marginBottom: 10, margin: 10 }} onPress={this.goToCompleteSurvey}>
              <FontAwesome style={globalStyles.iconInput} name='check-circle' />
              <Text>Khảo Sát Hoàn Thành</Text>
            </Button>
            <Button block iconLeft info style={{ marginBottom: 10, margin: 10 }}>
              <FontAwesome style={globalStyles.iconInput} name='user' />
              <Text>Thông Tin Chủ Tài Khoản</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Survey;
