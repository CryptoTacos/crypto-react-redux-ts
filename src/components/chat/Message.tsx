
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
            <div />
        );
    }
}

export default Message;