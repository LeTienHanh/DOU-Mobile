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
import {
  View,
  Image,
} from 'react-native';
import {autobind} from 'core-decorators';
import {BoxShadow} from 'react-native-shadow';

import styles from './styles';
import colors from '@themes/colors';
import globalStyles from '@themes/styles';

class FarmInfo extends Component {
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
              }}>Thông tin hộ chăn nuôi</Text>
            </View>
          </BoxShadow>

          <Form  style={{marginTop: 20}}>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Tên hộ chăn nuôi'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Địa chỉ'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Huyện'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Tỉnh'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Tổng số lượng heo đang nuôi'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Số lượng heo thịt'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='0 - 20 Kg'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='20 - 50 Kg'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Trên 50 Kg'/>
            </Item>
            <Item style={globalStyles.marginTop15}>
              <Input placeholder='Số lượng heo nái'/>
            </Item>
          </Form>
        </Content>

        <Footer style={styles.footer}>
          <FooterTab style={{backgroundColor: colors.background}}>
            <View style={styles.footerContainer}>
              <Button block style={styles.nextBtn} onPress={this.goToSurvey}>
                <Text style={{fontSize: 14, color: '#FFF'}}>Tiếp Theo</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FarmInfo;
