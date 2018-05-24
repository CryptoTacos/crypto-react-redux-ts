
import * as React from 'react';
import { IMessage } from '../../types';
import { IconButton } from 'material-ui';

interface MessageProps extends IMessage {
    messageId: number;
    clickDeleteMessage: (messageId: number) => void;
}

interface MessageState {

}

class Message extends React.Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
        this.state = {};
    }

    clickDelete = (): void => {
        this.props.clickDeleteMessage(this.props.messageId);
    }

    render() {
        return (
            <div className="message" key={this.props.messageId}>
                {this.props.messageText}
                {this.props.children}
                <IconButton
                    iconClassName="fa fa-times"
                    onClick={this.clickDelete}
                />
            </div>
        );
    }
}

export default Message;