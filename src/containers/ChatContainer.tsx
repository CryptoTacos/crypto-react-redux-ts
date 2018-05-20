import * as React from 'react';
import { Dispatch } from 'redux';
import { StoreState, IMessage, ChatBotAction, } from '../types';
import { connect } from 'react-redux';
import Message from '../components/chat/Message';
import WelcomeChat from '../chat/WelcomeChat';
import DefaultChat from '../chat/DefaultChat';

interface ChatContainerProps {
  chatDriver: WelcomeChat | DefaultChat;
}

interface ChatContainerState {

}

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {
  constructor(props: ChatContainerProps) {
    super(props);
    this.state = {};
  }

  renderMessages = (): JSX.Element[] => {
    return this.props.chatDriver.getMessagesAsList().map((message: IMessage) => {
      return (
        <Message
          key={message.key}
          messageId={message.key}
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
  chatDriver: WelcomeChat | DefaultChat;
}

interface DispatchFromProps {

}

const mapStateToProps = (state: StoreState): ChatContainerProps => ({
  chatDriver: state.chatState.chatDriver,
});

const mapDispatchToProps = (dispatch: Dispatch<ChatBotAction>): DispatchFromProps => ({

});

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps, mapDispatchToProps
)(ChatContainer);
