import {StackNavigator} from "react-navigation";

import RegisterStep1 from './register-s1-container';
import RegisterStep2 from './register-s2-container';
import RegisterStep3 from './register-s3-container';

const RegisterNavigator = StackNavigator(
  {
    RegisterStep1: {screen: RegisterStep1},
    RegisterStep2: {screen: RegisterStep2},
    RegisterStep3: {screen: RegisterStep3},
  },
  {
    initialRouteName: "RegisterStep1",
    headerMode: "none",
  }
);

export default RegisterNavigator;
