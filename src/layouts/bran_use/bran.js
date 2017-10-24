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
  Header, Left, Right, Title, Body, Subtitle,
  Footer,
  FooterTab,
} from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Image,
} from 'react-native';
import {autobind} from 'core-decorators';

import styles from './styles';
import colors from '@themes/colors';
import globalStyles from '@themes/styles';
import {BoxShadow} from 'react-native-shadow';

class BranUse extends Component {

  @autobind
  goToSurvey() {
    this.props.navigation.navigate('Survey');
  }

  render() {
    return (
      <Container style={{backgroundColor: colors.background}}>
        <Header style={globalStyles.header}>
          <Body>
          <Title>THÔNG TIN</Title>
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
              }}>Thông tin cám đang sử dụng</Text>
            </View>
          </BoxShadow>

          <Form  style={{marginTop: 10}}>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Loại heo'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Tên công ty cám'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Tên nhãn hiệu cám'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Mã cám'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Giá mua cám tiền mặt'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Giá mua cám nợ'/>
            </Item>
          </Form>
        </Content>

        <Footer style={styles.footer}>
          <FooterTab style={{backgroundColor: colors.background}}>
            <View style={styles.footerContainer}>
              <Button block style={{...styles.nextBtn, marginRight: 5}} onPress={this.goToSurvey}>
                <Text style={{fontSize: 14, color: '#FFF'}}>Tạm Ngừng</Text>
              </Button>
              <Button block style={{...styles.nextBtn, marginLeft: 5}} onPress={this.goToSurvey}>
                <Text style={{fontSize: 14, color: '#FFF'}}>Tiếp Tục</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default BranUse;
