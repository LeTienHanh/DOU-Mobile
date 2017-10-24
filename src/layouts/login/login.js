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
  Body,
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

class Login extends Component {
  @autobind
  goToRegister() {
    this.props.navigation.navigate('Register');
  }

  @autobind
  goToSurvey() {
    this.props.navigation.navigate('Survey');
  }

  render() {
    return (
      <Container style={{backgroundColor: colors.background}}>
        <Content>
          <Text style={{fontSize: 13, marginLeft: 15, marginTop: 15}}>Version 1.0</Text>
          <Image source={require('@assets/masan.png')} style={{height: 130, width: null}}/>

          <Form  style={{marginTop: 40}}>
            <Item style={globalStyles.marginTop15}>
              <FontAwesome style={globalStyles.iconInput} name='user' />
              <Input placeholder='ID'/>
            </Item>
            <Item last style={globalStyles.marginTop15}>
              <FontAwesome style={globalStyles.iconInput} name='unlock-alt' />
              <Input placeholder='Mật khẩu' secureTextEntry={true} />
            </Item>
          </Form>
        </Content>

        <Footer style={styles.footer}>
          <FooterTab style={{backgroundColor: colors.background}}>
            <View style={styles.footerContainer}>
              <Text uppercase={false} style={{fontSize: 14, color: '#000', textAlign: 'center'}}>
                Chưa có tài khoản?
                <Text style={styles.registerText} onPress={this.goToRegister}> Đăng ký</Text>
              </Text>
              <Button block style={styles.logInBtn} onPress={this.goToSurvey}>
                <Text style={{fontSize: 14, color: '#FFF'}}>Đăng nhập</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Login;
