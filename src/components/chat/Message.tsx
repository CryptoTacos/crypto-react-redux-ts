
import * as React from 'react';
import { IMessage } from '../../types';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Paper, Typography } from '@material-ui/core';

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
            <div key={this.props.messageId}>
                <Paper>
                    <div className="message">
                        <Typography>
                            {this.props.messageText}
                        </Typography>
                        {this.props.children}
                        <IconButton
                            onClick={this.clickDelete}
                        >
                            <Icon className="fa fa-times" />
                        </IconButton>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Message;