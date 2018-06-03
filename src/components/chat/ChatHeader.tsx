import * as React from 'react';
import { Typography, Paper } from '@material-ui/core';

interface IChatHeaderProps {

}

interface IChatHeaderState {

}

class ChatHeader extends React.Component<IChatHeaderProps, IChatHeaderState> {
    constructor(props: IChatHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Paper>
                    <Typography
                        variant="subheading"
                    >
                        Chat
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default ChatHeader;
