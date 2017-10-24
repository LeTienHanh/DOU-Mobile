import React, {Component} from "react";
import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Form,
  Text,
  H3,
  Icon,
  Header, Left, Right, Title, Body, Subtitle,
  View,
} from "native-base";

import globalStyles from '@themes/styles';
import styles from './styles';
import colors from '@themes/colors';
import {autobind} from 'core-decorators';
import {BoxShadow} from 'react-native-shadow';

class RegisterS1 extends Component {
  @autobind
  onNextStepClick() {
    this.props.navigation.navigate('RegisterStep2');
  }

  render() {
    return (
      <Container style={{backgroundColor: colors.background}}>
        <Header style={globalStyles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>ĐĂNG KÝ</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <BoxShadow setting={globalStyles.shadowSubHeader}>
            <View style={globalStyles.subHeader}>
              <Text style={{
                ...globalStyles.h3,
                marginTop: 10,
                marginLeft: 10,
                fontStyle: 'italic',
              }}>Họ Tên - Bộ Phận</Text>
            </View>
          </BoxShadow>

          <Form>
            <Item floatingLabel>
              <Label>Họ và Tên</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Bộ phận</Label>
              <Input />
            </Item>
          </Form>

          <Button block rounded style={styles.signInBtn} onPress={this.onNextStepClick}>
            <Text>Tiếp tục</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default RegisterS1;
