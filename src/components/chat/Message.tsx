
import * as React from 'react';
import { IMessage } from '../../types';

interface MessageProps extends IMessage {
}

interface MessageState {

}

class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="message">
                {this.props.messageText}
                {this.props.children}
            </div>
        );
    }
}

export default Message;