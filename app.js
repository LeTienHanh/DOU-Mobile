import React from "react";
import codePush from "react-native-code-push";
import App from "./src/app";

class AppWrapper extends React.Component {
  componentDidMount() {
    const updateDialogOptions = {
      updateTitle: "You have an update",
      optionalUpdateMessage: "Update available. Install?",
      optionalIgnoreButtonLabel: "Nop",
      optionalInstallButtonLabel: "Yep",
    };

    codePush.sync({updateDialog: updateDialogOptions});
  }

  render() {
    return <App />;
  }
}

export default AppWrapper;
