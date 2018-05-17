import * as React from 'react';
import { Dispatch } from 'redux';
import { StoreState, IMessage, ChatBotAction, ChatState } from '../types';
import { connect } from 'react-redux';
import Message from '../components/chat/Message';

interface ChatContainerProps {
  chatState: ChatState;
}

interface ChatContainerState {

}

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {
  constructor(props: ChatContainerProps) {
    super(props);
    this.state = {};
  }

  renderMessages = (): JSX.Element[] => {
    const messages = this.props.chatState.chats[this.props.chatState.currentChat].messages;
    return messages.map((message: IMessage) => {
      return (
        <Message
          key={message.messageId}
          messageId={message.messageId}
          sentOrReceived={message.sentOrReceived}
          messageText={message.messageText}
          avatar={message.avatar}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
      </div>
    );
  }
}

interface StateFromProps {
  chatState: ChatState;
}

interface DispatchFromProps {

}

const mapStateToProps = (state: StoreState): ChatContainerProps => ({
  chatState: state.chatState,
});

const mapDispatchToProps = (dispatch: Dispatch<ChatBotAction>): DispatchFromProps => ({

});

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps, mapDispatchToProps
)(ChatContainer);
