import * as React from 'react';
import { Dispatch } from 'redux';
import { IStoreState, IMessage, ChatBotAction, } from '../types';
import { connect } from 'react-redux';
import Message from '../components/chat/Message';
import UserInput from '../components/chat/UserInput';
import { createNewMessage, clearMessage } from '../actions/chatBotActions';

interface ChatContainerProps {
  messages: IMessage[];
  onEnterMessage: (message: string) => void;
  onDeleteMessage: (messageId: number) => void;
}

interface ChatContainerState {

}

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {
  constructor(props: ChatContainerProps) {
    super(props);
    this.state = {};
  }

  renderMessages = (): JSX.Element[] => {
    return this.props.messages.map((message: IMessage) => {
      return (
        <Message
          key={message.key}
          messageId={message.key}
          sentOrReceived={message.sentOrReceived}
          messageText={message.messageText}
          avatar={message.avatar}
          clickDeleteMessage={this.props.onDeleteMessage}
        />
      );
    });
  }

  render() {
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
  messages: IMessage[];
}

interface DispatchFromProps {
  onEnterMessage: (message: string) => void;
  onDeleteMessage: (messageId: number) => void;
}

const mapStateToProps = (state: IStoreState): StateFromProps => ({
  messages: state.chatState[state.chatState.currentChat] ? state.chatState[state.chatState.currentChat] : [],
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
