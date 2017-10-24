const React = require("react-native");

const {StyleSheet, Dimensions, Platform} = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  spinner: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8
  }
};
