import React from "react";
import {StackNavigator} from "react-navigation";

import Register from '@layouts/register/register-navigator';
import Login from '@layouts/login/login-container';
import Loading from '@layouts/loading/loading-container.js';
import Survey from '@layouts/survey/survey-container.js';
import FarmInfo from '@layouts/farm_infomations/farm-info-container.js';
import BranUse from '@layouts/bran_use/bran-container.js';
import CompleteSurvey from '@layouts/complete_survey/complete-container.js';
import IncompleteSurvey from '@layouts/incomplete_survey/incomplete-container.js';

const AppNavigator = StackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: ({navigation, screenProps}) => <Register screenProps={{parentNavigation: navigation, ...screenProps}}/>},
    Loading: { screen: Loading },
    Survey: { screen: Survey },
    FarmInfo: {screen: FarmInfo},
    BranUse: {screen: BranUse},
    CompleteSurvey: {screen: CompleteSurvey},
    IncompleteSurvey: {screen: IncompleteSurvey},
  },
  {
    initialRouteName: "Loading",
    headerMode: "none",
  }
);
const defaultGetStateForAction = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return defaultGetStateForAction(action, state);
};

export default AppNavigator;
