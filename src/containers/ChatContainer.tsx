import * as React from 'react';
import { Dispatch } from 'redux';
import { IStoreState, IMessage, ChatBotAction, } from '../types';
import { connect } from 'react-redux';
import Message from '../components/chat/Message';
import UserInput from '../components/chat/UserInput';
import { createNewMessage } from '../actions/chatBotActions';

interface ChatContainerProps {
  messages: IMessage[];
  onEnterMessage: (message: string) => void;
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
}

const mapStateToProps = (state: IStoreState): StateFromProps => ({
  messages: state.welcomeChatState.messages,
});

const mapDispatchToProps = (dispatch: Dispatch<ChatBotAction<IMessage>>):
  DispatchFromProps => ({
    onEnterMessage: (message: string) => {
      dispatch(createNewMessage(message));
    }
  });

export default connect<StateFromProps, DispatchFromProps, {}>(
  mapStateToProps, mapDispatchToProps
)(ChatContainer);
