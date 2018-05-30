import * as React from 'react';
import { Dispatch } from 'redux';
import { IStoreState, IMessage, ChatBotAction, IChatState } from '../types';
import { connect } from 'react-redux';
import Message from '../components/chat/Message';
import UserInput from '../components/chat/UserInput';
import { createNewMessage, clearMessage } from '../actions/chatBotActions';

interface ChatContainerProps {
  messages: IMessage[];
  onEnterMessage: (message: string) => void;
  onDeleteMessage: (messageId: number) => void;
  chatState: IChatState<IMessage>;
}

interface ChatContainerState {

}

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {
  constructor(props: ChatContainerProps) {
    super(props);
    this.state = {};
    console.log('trying to construct');
  }

  renderMessages = (): JSX.Element[] => {
    const messages = this.props.chatState.chats[this.props.chatState.currentChat].messages;
    return messages.map((message: IMessage) => {
      return (
        <div key={message.key}>
          <Message
            key={message.key}
            messageId={message.key}
            sentOrReceived={message.sentOrReceived}
            sender={message.sender}
            messageText={message.messageText}
            avatar={message.avatar}
            clickDeleteMessage={this.props.onDeleteMessage}
          />
        </div>
      );
    });
  }

  render() {
    console.log('rendering');
    return (
      <div>
        {this.renderMessages()}
        <UserInput
          onEnterMessage={this.props.onEnterMessage}
        />
      </div>
    );
  }
}

interface StateFromProps {
  chatState: IChatState<IMessage>;
  messages: IMessage[];
}

interface DispatchFromProps {
  onEnterMessage: (message: string) => void;
  onDeleteMessage: (messageId: number) => void;
}
const mapStateToProps = (state: IStoreState): StateFromProps => ({
  chatState: state.chatState,
  messages: state.chatState.chats[state.chatState.currentChat].messages ?
    state.chatState.chats[state.chatState.currentChat].messages : [],
});

const mapDispatchToProps = (dispatch: Dispatch<ChatBotAction<IMessage>>):
  DispatchFromProps => ({
    onEnterMessage: (message: string) => {
      dispatch(createNewMessage(message));
    },
    onDeleteMessage: (messageId: number) => {
      dispatch(clearMessage(messageId));
    }
  });

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps, mapDispatchToProps
)(ChatContainer);
