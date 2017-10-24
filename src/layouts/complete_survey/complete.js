import React, { Component } from "react";
import { ListView } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Item,
  Input,
  View,
} from "native-base";

import styles from "./styles";
import globalStyles from '@themes/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BoxShadow} from 'react-native-shadow';

const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho",
];

class CompleteSurvey extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
          <Title>HOÀN THÀNH</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <BoxShadow setting={globalStyles.shadowSubHeader}>
            <View style={globalStyles.subHeader}>
              <Text style={{
                ...globalStyles.h3,
                marginTop: 10,
                marginLeft: 5,
                fontStyle: 'italic',
              }}>Khảo sát hoàn thành</Text>
            </View>
          </BoxShadow>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem style={{ paddingLeft: 20 }}>
                <Text>
                  {data}
                </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button
                full
                success
                onPress={() => alert(data)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome active name='upload' style={globalStyles.iconInput}/>
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome active name='trash' style={globalStyles.iconInput}/>
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}

export default CompleteSurvey;
