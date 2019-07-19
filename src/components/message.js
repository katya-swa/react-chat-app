import React from "react";
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import { firebaseDb } from './../firebase/index.js'

const messagesRef = firebaseDb.ref('messages')
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.onRemoveClick = this.onRemoveClick.bind(this)
  }
  onRemoveClick(){
     messagesRef.child(this.props.message.key).remove()
     alert('メッセージはページを更新後に削除されます')
  }
  render() {
    return (
      <div className="Message">
      <List>
        <ListItem disabled="true">
          <Avatar className="" src={this.props.message.profile_image} />
          <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
          <div className="">
            <Chip style={styles.chip} >
              {this.props.message.text}
              <button onClick={this.onRemoveClick}>削除</button>
            </Chip>
          </div>
        </ListItem>
      </List>
      </div>
    );
  }
}
