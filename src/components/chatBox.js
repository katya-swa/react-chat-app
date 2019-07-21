import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../App.css';

export default class ChatBox extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            <TextField name='user_name' onChange={this.props.onTextChange} className=""  placeholder="名前" />
<br />
            <TextField name='profile_image' onChange={this.props.onTextChange} className="" placeholder="プロフ画像 URL" />
          </div>
          <TextField rows="4" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
          <RaisedButton primary="true" label="送信" className="" onClick={this.props.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}
