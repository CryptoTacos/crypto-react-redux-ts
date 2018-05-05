import * as React from 'react';
import { ChatBotActions } from '../actions/chatBotActions';
import { Dispatch } from 'redux';
import { StoreState, IMessage } from '../types';
import Message from '../components/chat/Message';
import { connect } from 'react-redux';

interface ChatContainerProps {
    messages: IMessage[];
}

interface ChatContainerState {

}

class ChatContainer extends React.Component<ChatContainerProps, ChatContainerState> {
    constructor(props: ChatContainerProps) {
        super(props);
        this.state = {};
    }

    renderMessages = (): JSX.Element[] => {
        const messageList: JSX.Element[] = [];
        for (const message of this.props.messages) {
            messageList.push(
                <div>
                    <Message 
                        messageId={message.messageId}
                        sentOrReceived={message.sentOrReceived}
                        children={message.children}
                        avatar={message.avatar}
                    />
                </div>
            );
        }
        return messageList;
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

}

interface DispatchFromProps {

}

const mapStateToProps = (state: StoreState): StateFromProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch<ChatBotActions>): DispatchFromProps => ({

});

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps, mapDispatchToProps
)(ChatContainer);
