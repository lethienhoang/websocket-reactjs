import React, { Component } from "react";
import ChatNav from './components/chat_navbar.component';
import Chat from './components/chat.component';
import People from "./components/people.component";

class App extends React.Component {
  componentDidMount() {
    const { dispatch, } = this.props;
    const name = "Demo";

    // when our app mounts, it should be updated of the pots
    //   getCurrentPot(dispatch)
    // put this socket's username to the server
    //   dispatch({type: 'ASSIGNED_USERNAME', name})
    //   registerUsername(name)
  }

  closeSnackbar = () => this.props.dispatch({ type: "ANOTHER_ONE_PITCHED_IN" });

  render() {
    const { pot, name, names, snackbarIsOpen, mode, whoDidIt } = this.props;

    return (
      <div className="chat-panel">
        <div className="chat-people-panel">
          <People/>
        </div>
        <div className="chat-message-panel">
          <div className="chat-message">
            <Chat/>
          </div>
          <div className="chat-navbar">
            <ChatNav/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
