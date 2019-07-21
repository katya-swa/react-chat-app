import React from "react";
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import Modal from 'react-modal';
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
const customStyles = {
  overlay : {
  background: 'rgba(0,0,0, .4)'
},
content : {
  top : '50%',
  left : '50%',
  right : 'auto',
  bottom : 'auto',
  marginRight : '-50%',
  transform : 'translate(-50%, -50%)',
  width : '72%'
  }
};

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.onRemoveClick = this.onRemoveClick.bind(this)
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalIsOpen: false
    }  
  }
  onRemoveClick(){
     messagesRef.child(this.props.message.key).remove()
     alert('メッセージはページを更新後に削除されます')
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
      this.setState({modalIsOpen: false});
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
                <div id="modal"></div>
                <button  className='btn btn-primary' onClick={this.openModal}>チャットを見る</button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  shouldCloseOnOverlayClick={true}
                  style={customStyles} >
                    {this.props.message.text}
                    <br />
                    <br />
                    <button className='btn btn-primary' onClick={this.closeModal}>閉じる</button>
                </Modal>
              </Chip>
              <button onClick={this.onRemoveClick}>削除</button>
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}
